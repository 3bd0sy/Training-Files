import { useState } from "react";
import Card from "./components/Card";
import FormGroup from "./components/FormGroup";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(
    {
    productName: "",
    price: "",
    description: "",
    quantity: "",
  }
);

  const handleSubmit = (e) => {
    e.preventDefault();
    //if (formData.productName && formData.price &&formData.description &&formData.quantity) 
      {
      setProducts([...products, { ...formData, id: Date.now() }]);
      console.log(`Date.now(): ${Date.now()}`);
      setFormData({
        productName: "",
        price: "",
        description: "",
        quantity: "",
      });
    }
  };








  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  
  };










  const handleQuantityChange = (id, increment) => {
    console.log(`id: ${id} , increment: ${increment}`);

    setProducts(
      products.map(
        (product) => {
        console.log(`product.id: ${product.id} , id: ${id}`);
        if (product.id === id) {
          const newQuantity = parseInt(product.quantity) + increment;
          console.log(`newQuantity: ${newQuantity}`);
          return {
            ...product,
            quantity: newQuantity.toString(),
            // quantity: newQuantity >= 0 ? newQuantity.toString() : "0",
          };
        }
        return product;
      })
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Add new product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* can we use map here */}
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Product name
            </label>
            <input
                type="text"
                name="prdoucname"
                value={formData.productName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
            />
        </div>
            
            <FormGroup
              labelName="Product Name"
              name="productName"
              type="text"
              value={formData.productName}
              handleChange={handleChange}
            />
            <FormGroup
              labelName="Price"
              name="price"
              type="number"
              value={formData.price}
              handleChange={handleChange}
            />
          </div>
          <div>
            <FormGroup
              labelName="Description"
              name="description"
              type="text"
              value={formData.description}
              handleChange={handleChange}
            />
          </div>
          <div>
            <FormGroup
              labelName="Available Quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              handleChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Add product
          </button>
        </form>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            // the proplem was here
            id={product.id}
            productName={product.productName}
            price={`${parseFloat(product.price).toFixed(2)}`}
            description={product.description}
            handleQuantityChange={handleQuantityChange}
            quantity={product.quantity}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
