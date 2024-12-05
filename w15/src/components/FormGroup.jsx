/* eslint-disable react/prop-types */
const FormGroup = (props) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {props.labelName}
            </label>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                className="w-full p-2 border rounded-md"
                required
            />
        </div>
    );
};

export default FormGroup;