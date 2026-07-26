import { useRef } from "react";

const TEAM_IMAGES = [
  "/images/experts/Screenshot 2026-01-13 at 4.08.32 PM 1.png",
  "/images/experts/Screenshot 2026-01-13 at 4.08.32 PM 2.png",
  "/images/experts/Screenshot 2026-01-13 at 4.08.32 PM 3.png",
  "/images/experts/Screenshot 2026-01-13 at 4.08.32 PM 1.png",
  "/images/experts/Screenshot 2026-01-13 at 4.08.32 PM 2.png"
];

export default function Team() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="team" 
      className="relative flex w-full justify-center bg-[#09090b] overflow-hidden"
      style={{ paddingBottom: '120px' }}
    >
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="flex w-full flex-col items-center">
        
        
        <div 
          className="flex w-11/12 items-center justify-between px-4 sm:px-6 lg:px-16"
          style={{ marginBottom: '64px' }}
        >
          
          <div className="hidden lg:block lg:w-[120px]"></div>
          
          <h2 className="flex-grow text-center text-[28px] font-semibold text-white sm:text-[36px]">
            Meet Our Expert Team
          </h2>
          
          
          <div className="flex justify-end lg:w-[120px]" style={{ gap: '16px' }}>
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

        
        <div 
          className="w-full pl-4 sm:pl-6 lg:pl-16"
        >
          <div 
            ref={scrollRef}
            className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto"
            style={{ gap: '24px', paddingRight: '10vw' }}
          >
            {TEAM_IMAGES.map((src, index) => (
              <div 
                key={index} 
                className="snap-start flex-shrink-0"
                style={{ width: '360px', height: '260px' }}
              >
                <img 
                  src={src} 
                  alt={`Team Member ${index + 1}`}
                  className="h-full w-full rounded-[24px] object-cover shadow-xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}