export default function About() {
  return (
    <section 
      id="about" 
      className="relative flex w-full justify-center bg-[#09090b]"
      
    >
      <div 
        className="flex w-11/12 flex-col items-center px-4 sm:px-6 lg:flex-row lg:items-center lg:px-16"
        style={{ gap: '64px' }}
      >
        
        
        <div className="w-full lg:w-1/2">
          <img 
            src="/images/marketing-man.png" 
            alt="Digital Marketing Expert"
            className="h-auto w-full object-cover rounded-[32px]"
            loading="lazy"
            style={{ transform: 'scale(1.08)' }}
          />
        </div>

        
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left justify-center">
          <h2 
            className="max-w-lg text-[32px] font-semibold leading-[1.3] text-white sm:text-[38px]"
            style={{ marginBottom: '32px' }}
          >
            We are Digital Marketing Experts in Abu Dhabi
          </h2>

          <ul 
            className="flex flex-col text-[15px] leading-[1.7] text-[#a1a1aa] sm:text-base"
            style={{ gap: '24px' }}
          >
            <li className="flex flex-col items-center lg:flex-row lg:items-start" style={{ gap: '16px' }}>
              <span className="hidden h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40 lg:block" style={{ marginTop: '10px' }} aria-hidden="true" />
              <p>
                BrandStory has been delivering digital marketing and growth engineering services to clients across Dubai and the UAE since 2014. With an expert team of digital marketers, we power up global brands through search engine optimization, Google Ads and Bing Ads, Social Media, influencer marketing, website design and development services.
              </p>
            </li>
            <li className="flex flex-col items-center lg:flex-row lg:items-start" style={{ gap: '16px' }}>
              <span className="hidden h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40 lg:block" style={{ marginTop: '10px' }} aria-hidden="true" />
              <p>
                Our expertise spans SEO, PPC, social media marketing, online reputation management, content strategy, email marketing, branding, and website development. Our goal is improving your business visibility, increasing qualified traffic, and converting engagement into real business value. At BrandStory, we skip shortcuts and deeply study Abu Dhabi’s industry landscape, audience behavior, and competition to create digital campaigns that resonate locally.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}