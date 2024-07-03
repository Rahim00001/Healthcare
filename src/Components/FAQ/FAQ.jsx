
import { Accordion } from "flowbite-react";
const FAQ = () => {
    return (
        <div className="max-w-[1160px] mx-auto mb-20">
            {/* section title */}
            <div className="border-2 border-[#020043] w-[95px] rounded-3xl text-center py-2 mb-4">
                <p className="text-lg font-medium text-[#020043]">Faq</p>
            </div>
            {/* section heading */}
            <p className="text-4xl font-bold text-[#020043] mb-8">Frequntly Asked Question</p>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title> What are your office hours?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-[#343268] dark:text-gray-400">
                            Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>How can I schedule an appointment?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-[#343268] dark:text-gray-400">
                            Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Do you accept insurance?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-[#343268] dark:text-gray-400">
                            Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>What should I bring to my appointment?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-[#343268] dark:text-gray-400">
                            Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Do you offer telemedicine appointments?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-[#343268] dark:text-gray-400">
                            Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default FAQ;