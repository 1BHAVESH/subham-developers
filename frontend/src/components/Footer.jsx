// components/Footer.jsx
import {
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import footerlogo from "../assets/footer-logo-2.png"

export default function Footer() {

  const navigate = useNavigate()



  return (
    <footer className="bg-[#1a1a1a] text-gray-300 pt-12 pb-6">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Popular Search */}
          <div>
            <div className="flex items-center gap-3">
              <div className="lg:w-100 w-50 h-10  flex items-center justify-center">
                <img
                  src={footerlogo}
                  className="w-[132px] h-[56px] ml-0.5 lg:ml-0 lg:mr-50"
                  alt="logo"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => navigate("/contact")} className="cursor-pointer hover:text-[#d4af37] transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Discovery */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base">
              Projects
            </h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => navigate("/Shubham-Paradise")} className="cursor-pointer hover:text-[#d4af37] transition">
                Shubham Paradise
              </li>
              <li onClick={() => navigate("/the-fort-jodhpur")} className="cursor-pointer hover:text-[#d4af37] transition">
                The Fort Jodhpur
              </li>
            </ul>
          </div>

          {/* Support + Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-base">
              Live Support?
            </h4>
            <a
              href="mailto:info@subhamdevelopers.com"
              className="hover:underline"
              rel="noopener noreferrer"
            >
              <p className="text-sm mb-5">info@subhamdevelopers.com</p>
            </a>

            <a
              href="tel:+919024195195"
              className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
            >
              
             <p className="text-sm mb-5"> +91 9024195 195</p>
            </a>

            <div className="flex items-center gap-4 text-white">
              <span className="text-sm">Follow Us</span>

              <a href="https://www.facebook.com/SubhamDevelopersJodhpur"  target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size={22}
                  className="text-xl cursor-pointer hover:text-[#d4af37] transition"
                />
              </a>
              <a href="https://www.instagram.com/subhamdeveloper/" target="_blank">
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  size={22}
                  className="text-xl cursor-pointer hover:text-[#d4af37] transition"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 py-5 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center  gap-4">
          <p className="text-center md:ml-[500px]">
            All rights reserved @ Subham Developers
          </p>
        </div>
      </div>
    </footer>
  );
}
