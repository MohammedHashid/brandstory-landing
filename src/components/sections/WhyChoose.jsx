import { useState } from "react";

const ACCORDION_DATA = [
  {
    title: "Human-Driven & AI-Enabled Strategy",
    content: "We blend cutting-edge AI for data analysis, trend prediction, and optimization with human creativity, storytelling, and Abu Dhabi cultural insight. This ethical, balanced approach delivers innovative, emotionally resonant campaigns that ensure lasting engagement and strong ROI."
  },
  {
    title: "Transparency & Collaboration",
    content: "We believe in complete transparency. Our team works closely with you to ensure you are always informed and involved in every step of the campaign."
  },
  {
    title: "Tailored, Results-Driven Innovation",
    content: "Every strategy is custom-built to match your unique business goals, leveraging innovative tactics that prioritize tangible results over vanity metrics."
  },
  {
    title: "Growth Engineering Expertise",
    content: "We don't just market; we engineer growth through data-backed methodologies, continuous testing, and scalable performance frameworks."
  }
];

export default function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      id="why-choose" 
      className="relative flex w-full justify-center bg-[#09090b]"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-16">
        
        
        <div className="w-full max-w-4xl text-center" style={{ marginBottom: '56px' }}>
          <h2 className="text-[28px] font-semibold leading-[1.3] text-white sm:text-[34px]">
            What Sets Us Apart as a Leading Digital Marketing<br className="hidden lg:block" />
            Agency in Abu Dhabi
          </h2>
        </div>

        
        <div 
          className="flex w-full flex-col items-center lg:flex-row lg:items-start"
          style={{ gap: '48px' }}
        >
          
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/images/marketing-woman.png" 
              alt="Digital Marketing Expert"
              className="h-auto w-full object-cover rounded-[32px]"
              loading="lazy"
              style={{ maxWidth: '90%' }}
            />
          </div>

          
          <div className="w-full lg:w-1/2 flex flex-col" style={{ gap: '20px' }}>
            {ACCORDION_DATA.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index}
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className={`cursor-pointer overflow-hidden rounded-[20px] transition-all duration-300 ${isOpen ? 'bg-white' : 'bg-[#16161a]'}`}
                  style={{ padding: '18px 24px' }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-[16px] font-semibold tracking-wide ${isOpen ? 'text-[#863bff]' : 'text-white'}`}>
                      {item.title}
                    </h3>
                    
                    <div 
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#863bff]' : 'bg-white'}`}
                    >
                      <svg 
                        className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-[#09090b]'}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-[15px] leading-[1.7] text-[#3f3f46]" style={{ marginTop: '16px' }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}