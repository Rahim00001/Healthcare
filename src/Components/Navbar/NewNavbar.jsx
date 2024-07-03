import { Navbar } from "flowbite-react";
import { BsArrowUpRight } from "react-icons/bs";
const NewNavbar = () => {
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="../../../public/Images/logo dark.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="w-40 h-12 flex justify-center items-center gap-3 border-[1px] text-[#020043] border-[#020043] rounded-lg hover:bg-[#020043] hover:text-white mr-2 md:mr-0">
            <p className="text-lg font-semibold">Appoinment</p>
            <BsArrowUpRight className="font-bold" />
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" className="text-lg text-[#020043]">Home</Navbar.Link>
          <Navbar.Link href="#" className="text-lg text-[#020043]">Services</Navbar.Link>
          <Navbar.Link href="#" className="text-lg text-[#020043]">Blog</Navbar.Link>
          <Navbar.Link href="#" className="text-lg text-[#020043]">About Us</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NewNavbar;