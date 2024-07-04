import { BsArrowUpRight } from "react-icons/bs";
import bg1 from "../../../public/Images/Rectangle 27-2.png"
import bg2 from "../../../public/Images/Rectangle 27-1.png"
import bg3 from "../../../public/Images/Rectangle 27.png"
const Services = () => {
    return (
        <section className="max-w-[1160px] mx-auto mb-16 bg-white rounded-2xl py-5">
            <div className="flex justify-between items-center mb-10">
                {/* service us texts */}
                <div className="w-[50%] max-w-[500px] flex justify-center">
                    <div>
                        {/* section title */}
                        <div className="border-2 border-[#020043] w-[120px] rounded-3xl text-center py-2 mb-4">
                            <p className="text-lg font-medium text-[#020043]">Service</p>
                        </div>
                        {/* section heading */}
                        <h1 className="text-4xl font-bold text-[#020043] mb-7">Empowering Health, <br /> Enriching Lives</h1>
                        {/* section detiles */}
                        <div className="max-w-[400px] mb-12">
                            <p className="text-[#4D4C7B]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                        </div>
                        {/* learn more button */}
                        <div className="w-40 h-12 flex justify-center items-center gap-3 border-[1px] text-[#020043] bg-[#FFC637] rounded-lg hover:bg-[#020043] hover:text-white mr-2 md:mr-0">
                            <p className="text-lg font-semibold">Appoinment</p>
                            <BsArrowUpRight className="font-bold" />
                        </div>
                    </div>
                </div>
                {/* service image card 1 */}
                <div className="relative w-[50%] flex justify-center">
                    <div className="bg-[#020043] bg-opacity-60 text-[#FFFFFF] w-[395px] h-[200px] rounded-3xl px-5 py-7 absolute bottom-6 left-14 flex items-end">
                        <div>
                            <h2 className="text-[28px] font-medium mb-3">Advanced Technology</h2>
                            <p className="text-lg text-yellow-50">Our surgeons are trained in the latest robotic surgical techniques, which <br /> allow for greater precision</p>
                        </div>
                        <div className="bg-[#FFC637] w-16 h-9 rounded-full flex justify-center items-center">
                            <BsArrowUpRight className="font-bold" />
                        </div>
                    </div>
                    <img src={bg1} alt="" className="rounded-3xl" />
                </div>
            </div>
            <div className="flex justify-between items-center">
                {/* service image card 2 */}
                <div className="relative w-[50%] flex justify-center">
                    <div className="bg-[#020043] bg-opacity-60 text-[#FFFFFF] w-[395px] h-[200px] rounded-3xl px-5 py-7 absolute bottom-6 left-14 flex items-end">
                        <div>
                            <h2 className="text-[28px] font-medium mb-3">Online Doctor Meet</h2>
                            <p className="text-lg text-yellow-50">Our surgeons are trained in the latest robotic surgical techniques, which <br /> allow for greater precision</p>
                        </div>
                        <div className="bg-[#FFC637] w-16 h-9 rounded-full flex justify-center items-center">
                            <BsArrowUpRight className="font-bold" />
                        </div>
                    </div>
                    <img src={bg2} alt="" className="rounded-3xl" />
                </div>
                {/* service image card 3 */}
                <div className="relative w-[50%] flex justify-center">
                    <div className="bg-[#020043] bg-opacity-60 text-[#FFFFFF] w-[395px] h-[200px] rounded-3xl px-5 py-7 absolute bottom-6 left-14 flex items-end">
                        <div>
                            <h2 className="text-[28px] font-medium mb-3">Consultancy your health</h2>
                            <p className="text-lg text-yellow-50">Our surgeons are trained in the latest robotic surgical techniques, which <br /> allow for greater precision</p>
                        </div>
                        <div className="bg-[#FFC637] w-16 h-9 rounded-full flex justify-center items-center">
                            <BsArrowUpRight className="font-bold" />
                        </div>
                    </div>
                    <img src={bg3} alt="" className="rounded-3xl" />
                </div>
            </div>
        </section>
    );
};

export default Services;