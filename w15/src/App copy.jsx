/* eslint-disable no-unused-vars */
import Card from "./components/Card";
import FormGroup from "./components/FormGroup";

const Store = () => {
  //Define 2 state one to handle form data and the seconde to handle poduct list

  const handleSubmit = (e) => {
    e.preventDefault();
    //Functoin to add the new product to the list
  };

  const handleChange = (e) => {
    //Functoin to handle change in the input element
  };

  const handleQuantityChange = () => {
    //Functoin to update the quantity in the product
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <section className="bg-white rounded-lg shadow-lg p-6">
        {/* add your form code here */}
        {/* the form should be use FormGroup components */}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* show all product using Card components */}
      </div>
    </div>
  );
};


export default Store;
