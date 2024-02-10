import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((data) => setServices(data))
    }, [])
    return (
        <div id="services" className="lg:mt-60 mx-3 " >
            <div className="text-center space-y-5">
                <h2 className="text-3xl font-bold text-accent">Our Services</h2>
                <h3 className="text-5xl font-bold ">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 lg:mt-12">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
            <div className="mt-7 text-center">
                <button className="btn btn-outline btn-accent">More Services</button>
            </div>
        </div>
    );
};

export default OurServices;