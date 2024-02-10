import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;

    return (
        <div className="card lg:w-96 bg-base-100 shadow-sm shadow-teal-300">
            <figure className="px-2 pt-2">
                <img src={img} alt="Shoes" className="rounded-xl min-h-full" />
            </figure>
            <div className="card-body p-2">
                <h2 className="card-title"> {title} </h2>
                <div className="flex justify-between items-center text-accent">
                    <p>Price: ${price} </p>
                    <FaArrowRight className="cursor-pointer"/>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;