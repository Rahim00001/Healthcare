import stat from "../../../public/Images/stat.png"
import star from "../../../public/Images/star.png"
import certificate from "../../../public/Images/certificate.png"
import cam from "../../../public/Images/cam.png"
import users from "../../../public/Images/users.png"
import coin from "../../../public/Images/coin.png"
const Statistics = () => {
    return (
        <div className="max-w-[1160px] mx-auto text-[#020043] flex items-end gap-5 mt-12 mb-24">
            {/* card 1 */}
            <div className="w-[216px] bg-white rounded-2xl p-3">
                <p className="text-5xl font-bold mb-5">90%</p>
                <p>Patient satisfaction <br /> rate, reflecting our commitment.</p>
                <div className="flex justify-center">
                    <img src={stat} className="w-[130px] my-4" alt="" />
                </div>
            </div>
            <div>
                <div className="text-5xl font-bold text-center mb-5">
                    <p>Comprehensive Care</p>
                    <p>for Every Patient</p>
                </div>
                <div className="flex items-end gap-3">
                    {/* card 2 */}
                    <div className="w-[216px] bg-white rounded-2xl p-3">
                        <p className="text-5xl font-bold mb-4">500+</p>
                        <p>Board-certified <br /> doctors</p>
                        <div className="flex justify-end">
                            <img src={certificate} className="w-[77px] my-1" alt="" />
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="w-[216px] bg-white rounded-2xl p-3">
                        <div className="flex items-center gap-2">
                            <p className="text-5xl font-bold mb-4">4.8</p>
                            <img src={star} alt="" className="w-9 mb-3" />
                        </div>
                        <p>Over 20,000 Patient</p>
                        <div className="flex justify-end">
                            <img src={users} className="w-[77px] my-4" alt="" />
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className="w-[216px] bg-white rounded-2xl p-3">
                        <p className="text-5xl font-bold mb-4">$5000</p>
                        <p>Money spend <br />for poor patient</p>
                        <div className="flex justify-end">
                            <img src={coin} className="w-[90px] my-4" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* card 5 */}
            <div className="w-[216px] h-[312px] bg-white rounded-2xl p-3">
                <p className="text-5xl font-bold mb-5">50+</p>
                <p>Free lession video <br />for patient</p>
                <div className="flex justify-center">
                    <img src={cam} className="w-[130px] my-4" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Statistics;