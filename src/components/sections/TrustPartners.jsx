const CARDS_DATA = [
  {
    title: "We Understand The Landscape",
    content: "With deep local digital marketing expertise in Abu Dhabi, we provide sharp Abu Dhabi market insights into cultural nuances, affluent consumer behaviors, multilingual demands, and regulatory challenges. This insider knowledge helps us navigate the emirate’s dynamic ecosystem from Hub71 startups to ADGM enterprises for authentic, impactful brand connections.",
    image: "/images/Frame 1707483070.png",
    alt: "Lightbulb - Understanding the landscape"
  },
  {
    title: "Tailored Strategies for Success",
    content: "We craft fully customized digital strategies that address Abu Dhabi’s unique digital marketing challenges, including intense competition, cultural diversity, and evolving trends. Blending global best practices with hyper-local insights, our approach delivers sustainable visibility, higher engagement, and measurable growth turning your brand into a preferred choice across the UAE.",
    image: "/images/Frame 1707483071.png",
    alt: "Dartboard - Tailored strategies"
  },
  {
    title: "Overcoming Market Challenges",
    content: "Our team excels in tackling Abu Dhabi’s specific digital marketing challenges, from multilingual audience targeting and rapid trend shifts to strict regulations and high expectations. Through data-driven, culturally attuned solutions, we create robust, adaptable strategies that ensure long-term success, strong ROI, and lasting brand preference in the competitive UAE landscape.",
    image: "/images/Frame 1707483072.png",
    alt: "Trophy - Overcoming challenges"
  }
];

export default function TrustPartners() {
  return (
    <section 
      id="trust-partners" 
      className="relative flex w-full justify-center bg-[#09090b]"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      
      <style>{`
        .trust-card {
          transition: all 0.4s ease-in-out;
        }
        .trust-card:hover {
          background: linear-gradient(180deg, #f5f0ff 0%, #ffffff 100%) !important;
          box-shadow: 0 20px 40px rgba(134, 59, 255, 0.15);
          transform: translateY(-4px);
        }
        .trust-card h3, .trust-card p {
          transition: color 0.4s ease-in-out;
        }
        .trust-card:hover h3 {
          color: #863bff !important;
        }
        .trust-card:hover p {
          color: #18181b !important;
        }
        .trust-card img {
          filter: grayscale(100%) opacity(0.8);
          transition: all 0.4s ease-in-out;
        }
        .trust-card:hover img {
          filter: grayscale(0%) opacity(1);
          transform: translateY(-8px) scale(1.05);
        }
      `}</style>

      <div className="flex w-11/12 flex-col items-center px-4 sm:px-6 lg:px-16">
        
        
        <div className="flex w-11/12 flex-col items-center text-center" style={{ marginBottom: '64px' }}>
          <h2 
            className="font-bold leading-[1.2] text-white"
            style={{ fontSize: '36px', marginBottom: '24px' }}
          >
            Your Trusted Digital Marketing Partner in Abu Dhabi
          </h2>
          <p className="text-[15px] leading-relaxed text-[#a1a1aa] sm:text-base">
            Selecting the right digital marketing partner in Abu Dhabi is essential to ensure your brand connects with the right audience, maximizes ROI, and achieves sustainable growth in a competitive market.
          </p>
        </div>

        
        <div 
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS_DATA.map((card, index) => (
            <div 
              key={index}
              className="trust-card flex flex-col rounded-[24px] bg-[#1a1a24] transition-all duration-400"
              style={{ padding: '40px 32px' }}
            >
              
              <div className="flex w-full justify-center" style={{ marginBottom: '32px' }}>
                <img 
                  src={card.image} 
                  alt={card.alt} 
                  className="h-32 w-auto object-contain sm:h-40"
                  loading="lazy"
                />
              </div>

              
              <h3 
                className="text-[20px] font-semibold tracking-wide text-white"
                style={{ marginBottom: '16px' }}
              >
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.8] text-[#a1a1aa] sm:text-[15px]">
                {card.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
