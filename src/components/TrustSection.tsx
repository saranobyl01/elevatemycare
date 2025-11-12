import Group19 from "@/assets/1.png";
import Group20 from "@/assets/2.png";
import Group21 from "@/assets/3.png";
import Group22 from "@/assets/4.png";

const TrustSection = () => {
  return (
    <section
      className="py-8 md:py-12 lg:py-16 border-y border-gray-200"
      style={{
        background: "linear-gradient(90deg, #FFFFFF 0%, #067d8e1A 50%, #FFFFFF 100%)", // very light gradient
      }}
    >
      <div className="container mx-auto px-4 md:px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#067d8e]/10 text-xs font-semibold mb-3">
            <span className="bg-gradient-to-r from-[#02275f] to-[#067d8e] bg-clip-text text-transparent">
              WHY CHOOSE elevatemycare ?
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Experience the difference with our{" "}
            <span className="bg-gradient-to-r from-[#02275f] to-[#067d8e] bg-clip-text text-transparent">
              clinically proven
            </span>{" "}
            approach
          </h2>

          {/* GRADIENT LINE UNDER HEADING */}
          <div className="flex justify-center mt-4">
            <span className="h-1 w-10 bg-gradient-to-r from-[#02275f] to-[#067d8e] rounded-full"></span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {[
            {
              img: Group19,
              title: "Up to 21%",
              subtitle: "body weight loss*",
            },
            {
              img: Group20,
              title: "Expert Clinical Support",
              subtitle:
                "Our clinicians provide personalized guidance and answers you need",
            },
            {
              img: Group21,
              title: "Targeted Results",
              subtitle: "Promotes fat reduction in resistant areas",
            },
            {
              img: Group22,
              title: "Health Benefits",
              subtitle:
                "Supports lower blood pressure and overall health",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-2xl border border-gray-200/50 bg-white/40 shadow-md backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-base md:text-lg font-semibold text-center text-gray-900 mb-1">
                {card.title}
              </p>
              <p className="text-sm md:text-base text-center text-gray-700">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
