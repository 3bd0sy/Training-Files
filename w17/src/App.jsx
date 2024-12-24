/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
// Application Programming Interface
// Full API URL to manage posts
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// AlertMessage Component: Displays success or error messages
const AlertMessage = ({ type, message, onClose }) => {
  const alertStyles = {
    success: "bg-green-50 border-green-500 text-green-700",
    error: "bg-red-50   border-red-500   text-red-700",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal Container */}
      <div
        className={`p-6 rounded-lg border-4 shadow-lg max-w-xl w-full ${alertStyles[type]}`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {type === "error" ? "Error" : "Success"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ×
          </button>
        </div>
        {/* Modal Body */}
        <div>
          <p>{message}</p>
        </div>
        {/* Modal Footer */}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// PostCard Component: Represents an individual post with edit and delete options
const PostCard = ({ post, onEdit, onDelete }) => (
  <div
    className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:border-gray-300 transition duration-200"
    style={{ flex: "1 1 calc(50% - 20px)", margin: "10px" }}
  >
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
    <p className="text-gray-600 mb-4">{post.body}</p>
    <div className="flex gap-3 border-t pt-4 mt-4">
      <button
        onClick={() => onEdit(post)}
        className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition duration-200 border border-blue-200 hover:border-blue-300"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(post.id)}
        className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition duration-200 border border-red-200 hover:border-red-300"
      >
        Delete
      </button>
    </div>
  </div>
);

const App = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    editId: null,
  });
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  // Handle input field changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Dynamically update state using input name attribute
    }));
  };

  const showMessage = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: "", message: "" });
    }, 10000);
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get(API_URL);
      setPosts(response.data.slice(0, 6));
    } catch (error) {
      showMessage("error", "Error fetching posts - " + error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async () => {
    try {
      const newPost = { title: formData.title, body: formData.body };
      const response = await axios.post(API_URL, newPost);
      setPosts((prev) => [response.data, ...prev]);
      showMessage("success", "Post added successfully");
    } catch (error) {
      showMessage("error", `Error adding post - ${error}`);
    }
  };

  const updatePost = async (id) => {
    try {
      const editedPost = { title: formData.title, body: formData.body };
      const response = await axios.put(`${API_URL}/${id}`, editedPost);
      setPosts((prev) => prev.map((p) => (p.id === id ? response.data : p)));
      showMessage("success", "Post updated successfully");
    } catch (error) {
      showMessage("error", "Error updating post");
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts((prev) => prev.filter((post) => post.id !== id));
      showMessage("success", "Post deleted successfully");
    } catch (error) {
      showMessage("error", "Error deleting post");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.editId) {
      updatePost(formData.editId);
    } else {
      addPost();
    }
  };

  return (
    <div className="min-h-screen bg-gray-600 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-100 mb-8 text-center">
          Blog Posts Manager
        </h1>
        {alert.show && (
          <AlertMessage
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert({ show: false, type: "", message: "" })}
          />
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200"
        >
          <div className="mb-4">
            {/* Input for title */}
            <input
              type="text"
              name="title"
              placeholder="Post Title"
              value={formData.title}
              onChange={handleChange} // Use handleChange for title
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            {/* Textarea for body */}
            <textarea
              name="body"
              placeholder="Post Content"
              value={formData.body}
              onChange={handleChange} // Use handleChange for body
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              {formData.editId ? "Update" : "Add"} Post
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  title: "",
                  body: "",
                })
              }
              className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {Object.keys(posts).length > 0 ? (
            posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onEdit={(post) =>
                  setFormData({
                    editId: post.id,
                    title: post.title,
                    body: post.body,
                  })
                }
                onDelete={deletePost}
              />
            ))
          ) : (
            <div className="text-center mx-auto bg-white p-5 rounded-2xl">
              <svg
                className="mx-auto h-16 w-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z"
                ></path>
              </svg>
              <h1 className="mt-2 text-3xl font-bold text-gray-700">
                No Data Available
              </h1>
              <p className="mt-1 text-gray-500">
                Sorry, there is no data available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
