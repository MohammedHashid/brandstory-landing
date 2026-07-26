const LINKS = [
  "Digital Marketing Agency Abu Dhabi",
  "Digital Marketing Agency Sharjah",
  "Digital Marketing Agency in Dubai",
  "SEO Agency in Dubai",
  "Digital Marketing Agency Ajman",
  "PR Agency in Dubai",
  "B2B Company in Dubai",
  "Content Writing Company in Dubai"
];

const SERVICES = [
  "Digital Marketing Company Dubai",
  "UI UX Design Services Dubai",
  "Web Design Company in Dubai",
  "SEO Company in Dubai",
  "Social Media Marketing in Dubai",
  "Mobile App Marketing Services",
  "Email Marketing Services in Dubai",
  "PPC Agency in Dubai"
];

const SOCIAL_LINKS = [
  { name: "Linkedin", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z" },
  { name: "Youtube", icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" },
  { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { name: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A5 5 0 0122.5 12v11a5 5 0 01-5 5h-11a5 5 0 01-5-5V12a5 5 0 015-5z" },
  { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" }
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#111115] text-[#a1a1aa] border-t border-white/5">
      
      
      <div 
        className="flex w-full flex-col lg:flex-row lg:justify-between" 
        style={{ gap: '64px', padding: '100px 8% 80px 8%', margin: '0 auto' }}
      >
        
        
        <div className="flex flex-col lg:w-[25%] pr-4">
          <h3 className="text-[24px] font-bold text-white tracking-widest" style={{ marginBottom: '32px' }}>
            BRANDSTORY
          </h3>
          <p className="text-[14px] leading-relaxed" style={{ marginBottom: '40px' }}>
            The BrandStory team has industry expertise and cutting-edge digital capabilities to help clients connect with their audiences in complex environments. We can't wait for you join us on this journey!
          </p>
          <div>
            <button className="rounded-full bg-[#27272a] text-white text-[13px] font-medium transition-colors hover:bg-[#3f3f46]" style={{ padding: '10px 28px', marginBottom: '48px' }}>
              Contact Sales
            </button>
          </div>
          <div>
            <h4 className="text-[14px] font-semibold text-white" style={{ marginBottom: '16px' }}>Head Office:</h4>
            <p className="text-[13px] leading-relaxed">
              Villa No 1, Westar Les<br/>
              Maisonettes,District 10, Street 5<br/>
              ,Jumeirah Village Circle, Dubai, United<br/>
              Arab Emirates.
            </p>
          </div>
        </div>

        
        <div className="flex flex-col">
          <h4 className="text-[15px] font-semibold text-white" style={{ marginBottom: '40px' }}>Our Links</h4>
          <ul className="flex flex-col" style={{ gap: '20px' }}>
            {LINKS.map((link, idx) => (
              <li key={idx}>
                <a href="#" className="text-[13px] hover:text-[#863bff] transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex flex-col">
          <h4 className="text-[15px] font-semibold text-white" style={{ marginBottom: '40px' }}>Services</h4>
          <ul className="flex flex-col" style={{ gap: '20px' }}>
            {SERVICES.map((service, idx) => (
              <li key={idx}>
                <a href="#" className="text-[13px] hover:text-[#863bff] transition-colors">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex flex-col">
          <h4 className="text-[15px] font-semibold text-white" style={{ marginBottom: '40px' }}>Contact</h4>
          <ul className="flex flex-col" style={{ gap: '24px' }}>
            <li className="flex flex-col gap-1">
              <span className="text-[13px]">Phone:</span>
              <a href="tel:+971522831655" className="text-[13px] text-white hover:text-[#863bff] transition-colors">+971 52 283 1655</a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[13px]">Email:</span>
              <a href="mailto:info@brandstory.ae" className="text-[13px] text-white hover:text-[#863bff] transition-colors">info@brandstory.ae</a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[13px]">Address:</span>
              <span className="text-[13px] leading-relaxed">
                G5, Al Meheri Plaza, opp<br/>
                DBC Building, Al<br/>
                Khabaisi Area, Deira<br/>
                Dubai - 81577, United<br/>
                Arab Emirates
              </span>
            </li>
          </ul>
        </div>

        
        <div className="flex flex-col">
          <h4 className="text-[15px] font-semibold text-white" style={{ marginBottom: '40px' }}>Follow us</h4>
          <ul className="flex flex-col" style={{ gap: '20px' }}>
            {SOCIAL_LINKS.map((social, idx) => (
              <li key={idx}>
                <a href="#" className="flex items-center gap-3 text-[13px] hover:text-[#863bff] transition-colors group">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#863bff] transition-colors">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </div>
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <div className="border-t border-white/10">
        <div className="flex w-full justify-center text-center" style={{ padding: '32px 5%', margin: '0 auto' }}>
          <p className="text-[12px] text-[#71717a]">
            Copyright © Brandstory, All Rights Reserved 2025 | <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a> | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>

      
      <div style={{ width: '100%', backgroundColor: 'white', padding: '16px 5%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <img src="/images/partners.png" alt="Partner Logos" style={{ height: '40px', width: 'auto', objectFit: 'contain', maxWidth: '90%', margin: '0 auto', display: 'block' }} />
      </div>

    </footer>
  );
}