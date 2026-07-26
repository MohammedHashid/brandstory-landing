import { useState, useEffect } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from a mock API endpoint to fulfill the API integration requirement
    fetch('/api/faq.json')
      .then(res => res.json())
      .then(data => {
        setFaqData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch FAQ data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section 
      id="faq" 
      className="relative flex w-full justify-center bg-[#09090b]"
      style={{ paddingBottom: '120px' }}
    >
      <div className="flex w-11/12 flex-col items-center px-4 sm:px-6">
        
        
        <h2 
          className="text-[32px] font-bold text-white sm:text-[40px]"
          style={{ marginBottom: '56px' }}
        >
          FAQ's
        </h2>

        
        <div className="flex w-full flex-col" style={{ gap: '16px' }}>
          {loading ? (
            <div className="flex justify-center py-10">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/20 border-t-[#863bff]"></div>
            </div>
          ) : (
            faqData.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index}
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="cursor-pointer overflow-hidden rounded-[16px] bg-[#27272a] transition-all duration-300 hover:bg-[#303036]"
                  style={{ padding: '24px 32px' }}
                >
                  <div className="flex items-center justify-between" style={{ gap: '24px' }}>
                    <h3 className="text-[16px] font-semibold text-white sm:text-[17px]">
                      {faq.question}
                    </h3>
                    
                    <div 
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#863bff]' : 'bg-[#09090b]'}`}
                    >
                      {isOpen ? (
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-[15px] leading-relaxed text-[#d4d4d8]" style={{ marginTop: '16px' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
      </div>
    </section>
  );
}