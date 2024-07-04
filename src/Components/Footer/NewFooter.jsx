import { Footer } from "flowbite-react";
import fb from "../../../public/Images/fb.png"
import insta from "../../../public/Images/insta.png"
import link from "../../../public/Images/link.png"
import yt from "../../../public/Images/yt.png"
import logo from "../../../public/Images/logo light.png"
const NewFooter = () => {
  return (
    <Footer container className="bg-[#020043] rounded-none">
      <div className="w-[1160px] mx-auto my-16 text-[#FFFFF5]">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src={logo}
              alt="Logo"
            />
            <div className="my-5">
              <p>123 Main Street Anytown, USA</p>
              <p>Postal Code: 12345</p>
            </div>
            <div>
              <p>Support: support@oyolloo.com</p>
              <p>(Available : 10:00am to 07:00pm)</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.LinkGroup col className="text-[#FFFFF5]">
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Success Page</Footer.Link>
                <Footer.Link href="#">Terms And Condition</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col className="text-[#FFFFF5]">
                <Footer.Link href="#">Services</Footer.Link>
                <Footer.Link href="#">Scheduling</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
                <Footer.Link href="#">Patient Portal</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" className="text-[#FFFFF5]" />
              <Footer.LinkGroup col className="text-[#FFFFF5]" >
                <Footer.Link href="#">
                  <div className="flex items-center gap-2">
                    <img src={fb} alt="" />
                    <img src={insta} alt="" />
                    <img src={link} alt="" />
                    <img src={yt} alt="" />
                  </div>
                </Footer.Link>
                <Footer.Link href="#">@docplus 2024</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default NewFooter;