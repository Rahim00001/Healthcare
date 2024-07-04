import { BsArrowUpRight } from "react-icons/bs";
const FirstAppoinment = () => {
    return (
        <div className="max-w-[1160px] h-477px mx-auto mb-20 relative">
            <img src="../../../public/Images/Rectangle 32.png" alt="" className="w-full rounded-2xl" />
            <div className="absolute h-full left-0 bottom-0 w-full bg-gradient-to-r from-[#020043FF] to-[#0200434D] rounded-2xl">
                <div className="flex justify-end mr-8 mt-8">
                    <img src="../../../public/Images/logo dark.png" alt="" />
                </div>
                <h1 className="text-[40px] font-bold text-white mb-10 mt-5 ml-20">Get Your <br /> First Appointment <br />at 50% Off!</h1>
                <div className="flex items-center gap-5 ml-20">
                    <div className="w-40 h-12 flex justify-center items-center gap-3 border-[1px] border-[#FFC637] text-[#020043] bg-[#FFC637] rounded-lg hover:bg-[#020043] hover:text-white hover:border-[#020043] mr-2 md:mr-0">
                        <p className="text-lg font-semibold">Appoinment </p>
                        <BsArrowUpRight className="font-bold" />
                    </div>
                    <div className="w-40 h-12 flex justify-center items-center gap-3 border-[1px] border-white text-white rounded-lg hover:bg-[#020043] hover:text-white hover:border-[#020043] mr-2 md:mr-0">
                        <p className="text-lg font-semibold">Learn more</p>
                        <BsArrowUpRight className="font-bold" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstAppoinment;