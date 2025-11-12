import legitScript from "@/assets/icon/legitscript.png";
import visaIcon from "@/assets/icon/visa.png";
import discoverIcon from "@/assets/icon/discover.png";
import masterIcon from "@/assets/icon/master.png";
import amexIcon from "@/assets/icon/americanexpress.png";
import jcbIcon from "@/assets/icon/jcb.png";
import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#067d8e] text-white py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Brand and contact */}
          <div className="space-y-5 md:space-y-0 md:flex md:items-start md:gap-8">
            <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-3">
              <a href="https://www.legitscript.com/websites/?checker_keywords=elevatemycare.com" target="_blank" rel="noopener noreferrer">
                <img src={legitScript} alt="LegitScript Certified" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
              </a>
            </div>
            <div className="space-y-3 text-sm md:text-base md:min-w-[320px]">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-[#1e3a8a]" />
                </span>
                <span className="opacity-90">Med excellence united LLC</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#1e3a8a]" />
                </span>
                <span className="opacity-90">1530 11th ST Manhattan Beach, CA 90266</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#1e3a8a]" />
                </span>
                <a href="tel:+18889968639" className="opacity-90 underline underline-offset-2 hover:text-[#39C187]">tel: 888 996 8639</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#1e3a8a]" />
                </span>
                <a href="mailto:support@elevatemycare.com" className="opacity-90 underline underline-offset-2 hover:text-[#39C187]">email: support@elevatemycare.com</a>
              </div>
            </div>
          </div>

          {/* Right - Legal first, payment icons at bottom */}
          <div className="flex flex-col justify-between md:justify-end text-left md:text-right items-start md:items-end">
            <div style={{ paddingRight: '5rem' }}>
              <h4 className="text-[#02275f] font-bold mb-2 text-left md:text-left">Legal</h4>
              <div className="h-[2px] w-24 bg-white/20 mb-4"></div>
              <ul className="space-y-3 text-sm md:text-base text-left md:text-left">
                <li>
                  <Link to={"/returnsandrefund"} className="hover:underline">Returns & Refund</Link>
                </li>
                <li>
                  <Link to={"/termsofservice"} className="hover:underline">Terms Of Service</Link>
                </li>
                <li>
                  <Link to={"/privacypolicy"} className="hover:underline">Privacy Policy</Link>
                  
                </li>
                <li>
                  <Link to={"/ccpa"} className="hover:underline">CCPA Opt-Out</Link>
                  {/* <a href="https://www.elevatemycare.com/ccpa/" target="_blank" className="hover:underline">CCPA Opt-Out</a> */}
                </li>
                <li>
                  <Link to={"/telehealthconsent"} className="hover:underline">Telehealth Consent</Link>
                  {/* <a href="https://www.elevatemycare.com/telehealth-consent/" target="_blank" className="hover:underline">Telehealth Consent</a> */}
                </li>
              </ul>
            </div>
            <div className="mt-8 flex items-center gap-3 self-start md:self-end">
              <img src={visaIcon} alt="Visa" className="h-8 w-12 object-contain" />
              <img src={masterIcon} alt="Mastercard" className="h-8 w-12 object-contain" />
              <img src={discoverIcon} alt="Discover" className="h-8 w-12 object-contain" />
              <img src={amexIcon} alt="American Express" className="h-8 w-12 object-contain" />
              <img src={jcbIcon} alt="JCB" className="h-8 w-12 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-xs md:text-sm opacity-80">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-3">
            <p className="text-center md:text-left">© Med excellence united LLC. All Rights Reserved.</p>
            <div className="flex items-center gap-6 text-white">
              {/* <a href="https://www.elevatemycare.com/faq/" target="_blank" className="hover:underline">FAQ</a> */}
              {/* <a href="https://www.elevatemycare.com/contact-us/" target="_blank" className="hover:underline">Contact us</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
