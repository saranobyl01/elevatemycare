import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Mail, FileText, UserCheck } from "lucide-react";
import elevatemycare_logo from "@/assets/elevatemycare_logo.png";

const ThankYou = () => {
  const location = useLocation();
  const email = location.state?.email || "your email";
  const orderNumber =
    location.state?.orderId ||
    Math.random().toString(36).substring(2, 10).toUpperCase();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white py-6 md:py-12 px-0 md:px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-2xl relative z-10 px-0 md:px-4">
        {/* Logo */}
        <div className="flex justify-center mb-6 md:mb-10 animate-fade-in px-4 md:px-0">
          {/* <img 
            src="https://www.elevatemycare.com/wp-content/uploads/2024/12/TideMedix-Logo-with-TM-1.png" 
            alt="elevatemycare Logo" 
            className="h-10 md:h-12"
          /> */}
          <img
            src={elevatemycare_logo}
            alt="elevatemycare Logo"
            className="h-7 md:h-7 object-contain"
          />
        </div>

        {/* Thank You Card */}
        <Card className="p-6 md:p-12 shadow-2xl border-y-2 md:border-2 border-x-0 md:border-x-2 border-primary/30 backdrop-blur-xl bg-secondary/50 animate-scale-in rounded-none md:rounded-xl mx-0 md:mx-4">
          {/* Success Icon */}
          <div
            className="flex justify-center mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse" />
              <div className="relative rounded-full bg-gradient-to-br from-primary/30 to-primary/20 p-5">
                <CheckCircle2
                  className="w-16 h-16 text-primary"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div
            className="text-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Thank You for Your Order!
            </h1>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full border border-primary/30">
              <span className="text-sm text-gray-600">Order Number:</span>
              <span className="text-lg font-bold text-primary">
                #{orderNumber}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              A confirmation email has been sent to{" "}
              <span className="text-primary font-semibold">{email}</span>
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div
              className="group animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 transition-all duration-300 md:hover:shadow-lg md:hover:border-primary/50 md:hover:-translate-y-1">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-black flex items-center justify-center font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-gray-900">
                      Credentials Emailed
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Your member portal credentials have been sent to:
                  </p>
                  <p className="font-semibold text-primary text-sm">{email}</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="group animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "both" }}
            >
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 transition-all duration-300 md:hover:shadow-lg md:hover:border-primary/50 md:hover:-translate-y-1">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-black flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-gray-900">
                      Complete Medical Intake
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Login to your member portal and complete your medical intake
                    form.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className="group animate-fade-in"
              style={{ animationDelay: "0.5s", animationFillMode: "both" }}
            >
              <div className="flex gap-4 items-start p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 transition-all duration-300 md:hover:shadow-lg md:hover:border-primary/50 md:hover:-translate-y-1">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-black flex items-center justify-center font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-center gap-2 mb-2">
                    <UserCheck className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-gray-900">
                      Approval in 24 Hours
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your case will be submitted to your doctor and approved
                    within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div
            className="mt-10 pt-8 border-t border-primary/30 text-center animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            <p className="text-sm text-gray-600">
              Questions? Our support team is here to help.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
