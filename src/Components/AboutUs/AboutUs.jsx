import { BsArrowUpRight } from "react-icons/bs";
import bg from "../../../public/Images/Rectangle 24.png"
const AboutUs = () => {
    return (
        <section className="max-w-[1160px] mx-auto mb-40">
            <div className="flex justify-between items-center">
                {/* about us texts */}
                <div className="w-[50%] max-w-[500px]">
                    {/* section title */}
                    <div className="border-2 border-[#020043] w-[140px] rounded-3xl text-center py-2 mb-4">
                        <p className="text-lg font-medium text-[#020043]">Who we are</p>
                    </div>
                    {/* section heading */}
                    <h1 className="text-4xl font-bold text-[#020043] mb-7">We Help To Get <br /> Soultions</h1>
                    {/* section detiles */}
                    <div>
                        <p className="text-[#4D4C7B] mb-12">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                    </div>
                    {/* learn more button */}
                    <div className="w-40 h-12 flex justify-center items-center gap-3 border-[1px] text-[#020043] bg-[#FFC637] rounded-lg hover:bg-[#020043] hover:text-white mr-2 md:mr-0">
                        <p className="text-lg font-semibold">Learn more</p>
                        <BsArrowUpRight className="font-bold" />
                    </div>
                </div>
                {/* about us images */}
                <div className="relative w-[50%] flex justify-end">
                    <div className="bg-[#343268] text-[#FFFFFF] w-[395px] h-[200px] rounded-3xl px-5 py-7 absolute -bottom-5 -left-[68px]">
                        <h2 className="text-[28px] font-medium mb-4">Our mission is simple</h2>
                        <p className="text-lg text-yellow-50">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;