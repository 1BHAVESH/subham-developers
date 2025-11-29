// Header.jsx
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Menu,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"; // 👈 Added
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import menuImg from "/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Separator } from "./ui/separator";
import { Link, useNavigate } from "react-router-dom";
import EnquiryDialog from "./EnquiryDialog";

export default function Header() {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState("home");

  const menuItems = [
    { name: "Home", id: "home", path: "/" },
    { name: "About us", id: "about", path: "/about" },
    { name: "Projects", id: "projects", path: "/projects" },
    { name: "Mission & Vision", id: "mission", path: "/mission-&-vision" },
    { name: "Media", id: "media", path: "/media" },
    { name: "Contact us", id: "contact", path: "/contact" },
  ];

  return (
    <header className="w-full">
      {/* 🔹 TOP BLACK BAR */}
      <div className="bg-black text-[#d4af37] text-xs flex justify-between items-center px-4 lg:px-10 h-14">
        {/* MOBILE MARQUEE */}
        <div className="block md:hidden w-[70%] overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex gap-6">
            <span className="flex items-center gap-1">
              <Phone size={14} /> +91 9024195 195
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> info@subhamdevelopers.com
            </span>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6 ml-16">
          <a
            href="tel:+919024195195"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
            +91 9024195 195
          </a>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            <a
              href="mailto:info@subhamdevelopers.com"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              info@subhamdevelopers.com
            </a>
          </span>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/SubhamDevelopersJodhpur"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size={22}
              className="text-xl cursor-pointer"
            />
          </a>
          <a href="https://www.instagram.com/subhamdeveloper/" target="_blank">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              size={22}
              className="text-xl cursor-pointer"
            />
          </a>

          {/* <FontAwesomeIcon icon={faGoogle} className="text-xl" /> */}
        </div>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <nav className="bg-white h-[80px] w-full shadow-sm sticky top-10 z-50 border-b">
        <div className="max-w-6xl h-[78px] mx-auto flex items-center justify-between px-4 lg:px-10">
          <a href="/">
            <img
              src="/logo.png"
              className="w-28 md:w-[150px] md:h-[76px]"
              alt="Subham Developers"
            />
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
            {menuItems.map(({ name, id, path }) => (
              <li
                key={id} // 👈 key must be here
                onClick={() => setActiveNav(id)}
                className={`cursor-pointer border-b-2 transition-all 
        ${
          activeNav === id
            ? "border-[#d4af37] text-[#d4af37] font-semibold"
            : "border-transparent hover:border-[#d4af37] hover:text-[#d4af37]"
        }
      `}
              >
                <Link to={path}> {name} </Link> {/* 👈 LINK INSIDE li */}
              </li>
            ))}
          </ul>

          {/* DESKTOP ENQUIRY */}
          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <button className="cursor-pointer bg-black text-[#d4af37] px-7 py-1 rounded-full text-sm">
                  Enquiry
                </button>
              </DialogTrigger>

              <DialogContent>
                <EnquiryDialog />
              </DialogContent>
            </Dialog>
          </div>

          {/* 📱 MOBILE MENU */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu size={28} className="cursor-pointer" />
              </SheetTrigger>

              <SheetContent side="right" className="bg-white w-[75%]">
                <SheetTitle className="hidden"></SheetTitle>
                <SheetHeader className="p-2 pl-1 h-[50px]">
                  <img
                    src={menuImg}
                    alt="menu"
                    className="w-28 h-auto object-contain"
                  />
                  <SheetDescription className="hidden"></SheetDescription>
                </SheetHeader>

                {/* Mobile Menu Items */}
                <ul className="flex flex-col gap-4 text-gray-700 mt-2">
                  <Link to={"/"}>
                    <li className="pl-4">Home</li>
                  </Link>
                  <Separator />
                  <li className="pl-4" onClick={() => navigate("/about")}>
                    About us
                  </li>
                  <Separator />
                  <li className="pl-4" onClick={() => navigate("/projects")}>
                    projects
                  </li>
                  <Separator />
                  <li
                    className="pl-4"
                    onClick={() => navigate("/mission-&-vision")}
                  >
                    Mission & Vision
                  </li>
                  <Separator />
                  <li className="pl-4" onClick={() => navigate("/media")}>
                    Media
                  </li>
                  <Separator />
                  <li className="pl-4" onClick={() => navigate("/contact")}>
                    Contact us
                  </li>
                </ul>

                {/* 📌 FIXED MOBILE ENQUIRY FORM */}
                <div className="mt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-[150px] ml-4 bg-black text-[#d4af37] px-5 py-2 rounded-md text-sm">
                        Enquiry
                      </button>
                    </DialogTrigger>

                    <DialogContent>
                      <EnquiryDialog />
                    </DialogContent>
                  </Dialog>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
