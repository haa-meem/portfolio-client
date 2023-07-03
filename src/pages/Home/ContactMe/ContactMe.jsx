import { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id="contact" className="px-24 mt-5 pb-5">
            <h2 className="text-5xl font-bold text-center">Contact Me!</h2>
            <form>
                <div className="mb-5">
                    <div className="form-control w-full" data-aos="fade-up">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered rounded w-full"
                                data-aos="fade-up"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="form-control w-full" data-aos="fade-up">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered rounded w-full"
                                data-aos="fade-up"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="form-control w-full" data-aos="fade-up">
                        <label className="label">
                            <span className="label-text text-lg">Message</span>
                        </label>
                        <label className="input-group">
                            <textarea
                                type="text"
                                name="message"
                                placeholder="Message"
                                className="input input-bordered rounded w-full py-3"
                                rows={6}
                                data-aos="fade-up"
                            ></textarea>
                        </label>
                    </div>
                </div>
                <button className="btn btn-outline btn-warning btn-xs sm:btn-md" data-aos="fade-left">
                    <FaPaperPlane /> Send
                </button>
            </form>
        </div>
    );
};

export default ContactMe;
