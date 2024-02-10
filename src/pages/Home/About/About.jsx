import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div id='about' className="hero my-16 lg:my-32 p-3 lg:p-0">
            <div className="hero-content flex-col lg:flex-row p-0">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl aspect-square object-cover" />
                    <img src={parts} className="w-1/2 absolute right-5 top-2/4 rounded-lg border-8 border-white aspect-square object-cover shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-4 lg:space-y-8'>
                    <h1 className="text-3xl font-bold text-accent">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn-accent">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;