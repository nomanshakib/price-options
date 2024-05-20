import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-cyan-400 rounded-md p-6 flex flex-col">
            <h2 className="text-center">
                <span className="text-6xl font-bold">{price}</span>
                <span className="text-2xl font-bold">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className="pl-4 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-10 bg-red-600 text-white font-bold w-full py-2 rounded-lg hover:bg-red-700">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;