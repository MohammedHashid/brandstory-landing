const STATS_DATA = [
  { value: "350+", label: "Campaigns Executed" },
  { value: "180+", label: "Satisfied Clients" },
  { value: "10+", label: "Satisfied Clients" },
  { value: "600+", label: "Cups of Coffee" }
];

export default function Statistics() {
  return (
    <section 
      id="statistics" 
      className="relative flex w-full justify-center bg-[#09090b]"
      style={{ paddingBottom: '120px' }}
    >
      <div className="flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-16">
        
        
        <div className="relative flex w-full flex-col items-center">
          
          
          <div className="w-full overflow-hidden rounded-[32px]">
            <img 
              src="/images/statistics.png" 
              alt="BrandStory Statistics Background"
              className="h-[320px] w-full object-cover md:h-[400px]"
            />
          </div>

          
          <div className="absolute top-12 flex w-full justify-center md:top-16">
            <h2 className="text-[28px] font-semibold text-[#09090b] sm:text-[36px]">
              Our Statistics
            </h2>
          </div>

          
          <div 
            className="flex flex-wrap justify-center"
            style={{ width: '100%', maxWidth: '92%', marginTop: '-140px', gap: '24px' }}
          >
            {STATS_DATA.map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center rounded-[24px] bg-white text-center shadow-2xl"
                style={{ 
                  flex: '1 1 200px', 
                  padding: '64px 24px',
                }}
              >
                <h3 
                  className="text-[44px] tracking-tight text-[#863bff] sm:text-[52px]" 
                  style={{ fontWeight: '400' }}
                >
                  {stat.value}
                </h3>
                <p 
                  className="text-[15px] text-[#3f3f46]" 
                  style={{ marginTop: '16px' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
}