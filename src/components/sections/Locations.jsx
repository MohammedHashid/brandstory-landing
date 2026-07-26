const LOCATIONS = [
  "Digital Marketing Agency in Dubai",
  "Digital Marketing Agency in Sharjah",
  "Digital Marketing Agency in Abu Dhabi",
  "Digital Marketing Agency in Ajman",
  "PPC Agency in Dubai",
  "Digital Marketing Agency in Al Ain",
  "Digital Marketing Agency in Fujairah",
  "Digital Marketing Agency in Ras Al Khaimah",
  "Digital Marketing Agency in Bahrain",
  "SEO Dubai",
  "Digital Marketing Agency in Qatar",
  "Digital Marketing Agency in Kuwait",
  "PR Agency in Dubai",
  "Social Media Marketing Agency in Dubai",
  "Content Writers in Dubai"
];

export default function Locations() {
  return (
    <section 
      className="relative flex w-full justify-center bg-[#09090b]" 
      style={{ 
        padding: '80px 5%',
        backgroundImage: 'url(\'/images/Other%20Location.png\')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      
      <div className="flex w-11/12 flex-col items-center">
        
        
        <h2 className="text-center text-[28px] font-bold text-white sm:text-[36px]" style={{ marginBottom: '64px' }}>
          Other Digital Marketing Services Location
        </h2>

        
        <div className="flex w-full flex-wrap justify-center" style={{ gap: '32px' }}>
          {LOCATIONS.map((loc, index) => (
            <div 
              key={index}
              className="flex items-center gap-3"
              style={{ flex: '1 1 300px', maxWidth: '380px' }}
            >
              
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-[#863bff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
              
              
              <a 
                href="#"
                className="text-[15px] font-medium text-white hover:text-[#863bff] transition-colors"
                style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                {loc}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
