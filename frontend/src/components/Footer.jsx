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
   <footer className="bg-[#1a1a1a] text-gray-300 pt-10 pb-6">
  {/* TOP SECTION */}
  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    
    {/* LINKS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

      {/* Logo Section */}
      <div className="flex justify-center md:justify-start">
        <img
          src={footerlogo}
          className="w-[120px] h-[55px]"
          alt="logo"
        />
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold text-white mb-3 text-base">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li
            onClick={() => navigate("/contact")}
            className="cursor-pointer hover:text-[#d4af37] transition"
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Projects */}
      <div>
        <h4 className="font-semibold text-white mb-3 text-base">Projects</h4>
        <ul className="space-y-2 text-sm">
          <li
            onClick={() => navigate("/Shubham-Paradise")}
            className="cursor-pointer hover:text-[#d4af37] transition"
          >
            Shubham Paradise
          </li>
          <li
            onClick={() => navigate("/the-fort-jodhpur")}
            className="cursor-pointer hover:text-[#d4af37] transition"
          >
            The Fort Jodhpur
          </li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="font-semibold text-white mb-3 text-base">Live Support</h4>

        <a href="mailto:info@subhamdevelopers.com" className="hover:text-[#d4af37] transition">
          <p className="text-sm mb-3">info@subhamdevelopers.com</p>
        </a>

        <a href="tel:+919024195195" className="hover:text-[#d4af37] transition">
          <p className="text-sm mb-5">+91 9024195 195</p>
        </a>

        <div className="flex items-center gap-4 text-white">
          <span className="text-sm">Follow Us</span>
          <a href="https://www.facebook.com/SubhamDevelopersJodhpur" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-[#d4af37] transition" />
          </a>
          <a href="https://www.instagram.com/subhamdeveloper/" target="_blank">
            <FontAwesomeIcon icon={faSquareInstagram} className="text-xl hover:text-[#d4af37] transition" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-gray-700 mt-10 py-4 text-center text-xs text-gray-400">
    <p>All rights reserved © Subham Developers</p>
  </div>
</footer>

  );
}
