import { Button } from "@/components/ui/button";
import elevatemycare_logo from "@/assets/elevatemycare_logo.png";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left - Logo and Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center">
              <img
                src={elevatemycare_logo}
                alt="elevatemycare Logo"
                className="h-10 md:h-7 object-contain"
              />
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#how-it-works"
                className="text-sm md:text-base font-medium text-gray-700 hover:text-primary transition-colors"
              >
                How it works
              </a>
              <a
                href="#pricing"
                className="text-sm md:text-base font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Right - Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                window.open("https://member.elevatemycare.com/", "_blank")
              }
              className="text-xs md:text-sm px-2 md:px-4 text-gray-700 hover:bg-gray-100"
            >
              Sign In
            </Button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => navigate("/questionnaire")}
              className="text-xs md:text-sm px-3 md:px-5 text-white font-semibold border-2 border-[#067d8e] hover:from-[#02275f]/90 hover:to-[#5772DE]/90"
            >
              Get Started
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" color="#067d8e" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
