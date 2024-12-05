/* eslint-disable react/prop-types */
import image from "./user.png"
const Card = (props) => {
    console.log(props)
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 ">
            <img src={image} alt="" />
            <h3 className="text-xl font-semibold mb-2">
                {props.productName}
            </h3>
            <p className="text-green-600 font-bold mb-2">
                {props.price}
            </p>
            <p className="text-gray-600 mb-4">{props.description}</p>
            <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => props.handleQuantityChange(props.id, 1)}
                        className="p-2 text-2xl px-4 rounded-full bg-gray-100 hover:bg-gray-200"
                    >
                        +
                    </button>
                    <span className="w-8 text-center">{props.quantity}</span>
                    <button
                        onClick={() => props.handleQuantityChange(props.id, -1)}
                        className="p-2 px-4 text-2xl rounded-full bg-gray-100 hover:bg-gray-200"
                   
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;