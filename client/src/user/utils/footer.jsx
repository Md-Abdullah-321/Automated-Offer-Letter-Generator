import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full h-56 border-t-2 flex flex-col justify-center items-center gap-4">
      <div className="flex justify-between w-1/12 items-center">
        <FaFacebook className="text-slate-500" />
        <AiOutlineInstagram className="text-slate-500" />
        <FaLinkedin className="text-slate-500" />
      </div>
      <div className="text-slate-500">
        © {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
