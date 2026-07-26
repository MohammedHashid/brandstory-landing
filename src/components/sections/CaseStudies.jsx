import { useRef } from "react";

const CASE_STUDIES = [
  { category: "Website & Digital Marketing", title: "Wipro Infrastructure Engineering", image: "/images/case-studies/Rectangle 34624939.png" },
  { category: "Branding & Digital Marketing", title: "NanoPrecise Sci Corp", image: "/images/case-studies/Rectangle 34624939-1.png" },
  { category: "Digital Marketing", title: "Sherpa Communications", image: "/images/case-studies/Rectangle 34624939-2.png" },
  { category: "Branding & Digital Marketing", title: "Sand Dollar - Ecommerce", image: "/images/case-studies/Rectangle 34624939.png" },
  { category: "Digital Marketing", title: "TravelX", image: "/images/case-studies/Rectangle 34624939-1.png" },
  { category: "Digital Marketing", title: "Crystal Plaza", image: "/images/case-studies/Rectangle 34624939-2.png" },
  { category: "Digital Marketing", title: "NIMS School", image: "/images/case-studies/Rectangle 34624939.png" }
];

export default function CaseStudies() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="case-studies" 
      className="relative flex w-full justify-center bg-[#09090b] overflow-hidden"
      style={{ paddingBottom: '120px' }}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .case-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          cursor: pointer;
        }
        .case-card img {
          transition: transform 0.6s ease;
        }
        .case-card:hover img {
          transform: scale(1.05);
        }
        .case-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.4) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px 32px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s ease;
        }
        .case-card:hover .case-card-overlay {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="flex w-full flex-col items-center">
        
        
        <div 
          className="relative flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-16"
          style={{ marginBottom: '40px' }}
        >
          <div className="flex w-full justify-center">
            <h2 className="text-center text-[28px] font-semibold leading-[1.3] text-white sm:text-[36px]">
              Proven Digital Marketing Success Our<br />
              Abu Dhabi Case Studies
            </h2>
          </div>
          
          
          <div className="mt-8 flex w-full justify-end lg:absolute lg:bottom-0 lg:right-16 lg:mt-0" style={{ gap: '16px' }}>
            <button 
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#863bff] text-white transition-transform hover:scale-105"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        
        <div className="flex w-full max-w-7xl justify-center px-4 sm:px-6 lg:px-16">
          <div 
            ref={scrollRef}
            className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto"
            style={{ gap: '32px', paddingBottom: '20px' }}
          >
            {CASE_STUDIES.map((study, index) => (
              <div 
                key={index} 
                className="case-card snap-start flex-shrink-0 shadow-2xl"
                style={{ width: '380px', height: '520px' }}
              >
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                
                
                <div className="case-card-overlay">
                  <span className="text-[14px] font-semibold tracking-wider text-[#863bff] uppercase" style={{ marginBottom: '12px' }}>
                    {study.category}
                  </span>
                  <h3 className="text-[26px] font-bold leading-tight text-white" style={{ marginBottom: '32px' }}>
                    {study.title}
                  </h3>
                  <div>
                    <button className="inline-flex items-center gap-2 rounded-full bg-white text-[14px] font-bold text-[#09090b] transition-colors hover:bg-gray-200" style={{ padding: '12px 24px' }}>
                      View Case Study
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
