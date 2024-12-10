import { useState } from "react";

export default function App() {
  // State to store the current user's data
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    birthday: "",
    profileSettings: {
      bgColor: "#ffffff",
      borderWidth: "1px",
      borderRadius: "8px",
    },
  });

  // State to store the list of users
  const [users, setUsers] = useState([]);

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field belongs to profile settings
    if (name in user.profileSettings) {
      setUser({
        ...user,
        profileSettings: {
          ...user.profileSettings,
          [name]: value,
        },
      });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  // Find a user by their ID
  const findUserById = () => {
    const foundUser = users.find((u) => u.id === user.id);
    if (foundUser) {
      // Populate the form with the found user's data
      setUser(foundUser);
      alert("User found!");
    } else {
      alert("No user found with this ID");
    }
  };

  // Save a new user
  const saveNewUser = (e) => {
    e.preventDefault();

    // Validate the input for first name and last name
    if (!user.firstName || !user.lastName) {
      alert("Please enter both first name and last name");
      return;
    }

    // Create a unique ID
    const newUser = {
      ...user,
      id: Date.now().toString(),
    };

    // Add the new user to the list
    setUsers([...users, newUser]);

    // Clear the form after adding the user
    resetForm();
    alert("User added successfully!");
  };

  // Update an existing user's data
  const updateUser = (e) => {
    e.preventDefault();

    // Ensure the user ID is entered
    if (!user.id) {
      alert("Please enter the user's ID first");
      return;
    }

    // Update the user in the list
    setUsers(users.map((u) => (u.id === user.id ? user : u)));

    alert("User updated successfully!");
  };

  // Reset the form to default state
  const resetForm = () => {
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      birthday: "",
      profileSettings: {
        bgColor: "#ffffff",
        borderWidth: "1px",
        borderRadius: "8px",
      },
    });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="max-w-[800px] mx-auto bg-lime-300 rounded-lg p-8">
        <form className="space-y-6">
          {/* ID Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="id"
                value={user.id}
                onChange={handleChange}
                placeholder="Enter User ID"
                className="flex-grow border p-2 rounded"
              />
              <button
                type="button"
                onClick={findUserById}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Search
              </button>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Birth Date
              </label>
              <input
                type="date"
                name="birthday"
                value={user.birthday}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          {/* Profile Settings */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Background Color
              </label>
              <input
                type="color"
                name="bgColor"
                value={user.profileSettings.bgColor}
                onChange={handleChange}
                className="w-full h-10"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Border Width
              </label>
              <input
                type="text"
                name="borderWidth"
                value={user.profileSettings.borderWidth}
                onChange={handleChange}
                placeholder="Border width (e.g., 2px)"
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Border Radius
              </label>
              <input
                type="text"
                name="borderRadius"
                value={user.profileSettings.borderRadius}
                onChange={handleChange}
                placeholder="Border radius (e.g., 8px)"
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={saveNewUser}
              className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            >
              Save New User
            </button>
            <button
              type="button"
              onClick={updateUser}
              className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Update User
            </button>
          </div>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Users List</h2>
          <div className="grid grid-cols-2 gap-4">
            {users.map((u) => (
              <div
                key={u.id}
                className="p-4 shadow-md rounded"
                style={{
                  backgroundColor: u.profileSettings.bgColor,
                  borderWidth: u.profileSettings.borderWidth,
                  borderRadius: u.profileSettings.borderRadius,
                  borderStyle: "solid",
                  borderColor: "#000",
                }}
              >
                <p>
                  <strong>Name:</strong> {u.firstName} {u.lastName}
                </p>
                <p>
                  <strong>Birthday:</strong> {u.birthday}
                </p>
                <p>
                  <strong>ID:</strong> {u.id}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
