
const Testimonial = () => {
    return (
        <div className="max-w-[1160px] mx-auto">
            {/* section title */}
            <div className="border-2 border-[#020043] w-[120px] rounded-3xl text-center py-2 mb-4">
                <p className="text-lg font-medium text-[#020043]">Testimonial</p>
            </div>
            {/* section heading */}
            <p className="text-4xl font-bold text-[#020043] mb-8">What they say about us</p>
            <div className="flex items-center gap-4 mb-6">
                {/* card 1 */}
                <div className="w-[371px] bg-white rounded-2xl p-3">
                    <p className="text-xl font-semibold text-[#020043] mb-3">Expertise and Compassion <br /> Combined</p>
                    <p className="text-[#3b3546] text-sm mb-3">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className="flex items-center gap-3">
                        <img src="../../../public/Images/user1.png" alt="" />
                        <div>
                            <p className="text-[#020043] font-semibold">Sarah D, <span className="font-normal">IT Proffessional</span></p>
                            <div className="flex items-center gap-1 mt-1">
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="w-[371px] bg-white rounded-2xl p-3">
                    <p className="text-xl font-semibold text-[#020043] mb-3">Life-Saving Care, Life-Changing <br /> Experience</p>
                    <p className="text-[#3b3546] text-sm mb-3">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                    <div className="flex items-center gap-3">
                        <img src="../../../public/Images/user2.png" alt="" />
                        <div>
                            <p className="text-[#020043] font-semibold">Micheel R, <span className="font-normal">Bussiness Executive</span></p>
                            <div className="flex items-center gap-1 mt-1">
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="w-[371px] bg-white rounded-2xl p-3">
                    <p className="text-xl font-semibold text-[#020043] mb-3">A Partner in Health and <br />Wellness</p>
                    <p className="text-[#3b3546] text-sm mb-3">As a busy professional, I appreciate the convenience and quality of care I receive at. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                    <div className="flex items-center gap-3">
                        <img src="../../../public/Images/user3.png" alt="" />
                        <div>
                            <p className="text-[#020043] font-semibold">David S, <span className="font-normal">Lawyer</span></p>
                            <div className="flex items-center gap-1 mt-1">
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                                <img src="../../../public/Images/star.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Dot div */}
            <div className="flex items-center justify-center gap-1">
                <img src="../../../public/Images/dot2.png" alt="" />
                <img src="../../../public/Images/dot.png" alt="" />
                <img src="../../../public/Images/dot2.png" alt="" />
            </div>
        </div>
    );
};

export default Testimonial;