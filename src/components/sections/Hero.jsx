// ─── Logo data — 12 unique files, no -1 duplicates ───────────────────────────
const LOGOS = [
    { src: "/images/logo-carousel/Frame 1707482849.png", alt: "Prema Consulting" },
    { src: "/images/logo-carousel/cropped-shreemeralogo-Photoroom 1.png", alt: "Shreemera" },
    { src: "/images/logo-carousel/g7ebupwX_400x400-Photoroom 1.png", alt: "Partner" },
    { src: "/images/logo-carousel/image 19.png", alt: "WeSure" },
    { src: "/images/logo-carousel/image 20-Photoroom 1.png", alt: "Charter Finance" },
    { src: "/images/logo-carousel/image 21 1-Photoroom 1.png", alt: "Client" },
    { src: "/images/logo-carousel/image 23.png", alt: "SISA" },
    { src: "/images/logo-carousel/image 24.png", alt: "iHarbour" },
    { src: "/images/logo-carousel/image 26.png", alt: "Origin" },
    { src: "/images/logo-carousel/images (11)-Photoroom 1.png", alt: "Aurora Developer" },
    { src: "/images/logo-carousel/images (3)-Photoroom 1.png", alt: "Partner" },
    { src: "/images/logo-carousel/wintrust_logo.png.png", alt: "Wintrust Legal" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="relative flex w-full flex-col items-center overflow-hidden"
            style={{ paddingTop: '320px', paddingBottom: '128px' }}
        >
            
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                <img
                    src="/images/hero.png"
                    alt=""
                    role="presentation"
                    fetchpriority="high"
                    className="h-full w-full object-cover object-center"
                />
                
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#09090b] to-transparent" />
            </div>

            
            <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-16">
                
                
                <h1
                    id="hero-heading"
                    className="w-full text-[36px] font-bold leading-tight text-white sm:text-5xl lg:text-[48px] px-4"
                >
                    Digital Marketing Agency In Abu Dhabi
                </h1>

                
                <p className="max-w-4xl text-[15px] leading-relaxed text-white/70 sm:text-base px-4" style={{ marginTop: '32px' }}>
                    Looking for a digital marketing agency in Abu Dhabi? With 12+ years
                    of expertise, BrandStory delivers culturally intelligent,
                    data-driven strategies that connect your brand with high-intent UAE
                    audiences.
                </p>

                
                <div style={{ marginTop: '56px' }}>
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2.5 rounded-full bg-[#16161a] text-[15px] font-medium tracking-wide text-white ring-[1.5px] ring-[#863bff]/70 transition-all duration-300 hover:bg-[#863bff]/10 hover:ring-[#863bff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#863bff]"
                        style={{ padding: '14px 36px' }}
                    >
                        <svg className="h-[18px] w-[18px] text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        Get in Touch
                    </a>
                </div>
            </div>

            
            <div className="relative z-10 w-full" style={{ marginTop: '192px' }}>
                
                
                <p className="mb-10` text-center text-[24px] font-semibold text-white/80">
                    Trusted by Top Brands Across Industries
                </p>

                
                <div className="w-full max-w-[100vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                    <div className="flex flex-nowrap animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
                        
                        
                        <ul
                            role="list"
                            aria-label="Brands that trust BrandStory"
                            className="grid w-full flex-shrink-0 grid-cols-3 sm:grid-cols-4 md:grid-cols-6"
                        >
                            {LOGOS.map(({ src, alt }) => (
                                <li
                                    key={src}
                                    className="flex h-28 flex-shrink-0 items-center justify-center border border-white/5 px-6"
                                >
                                    <img
                                        src={src}
                                        alt={alt}
                                        loading="lazy"
                                        className="h-10 w-auto max-w-[110px] object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                                    />
                                </li>
                            ))}
                        </ul>

                        
                        <ul
                            aria-hidden="true"
                            className="grid w-full flex-shrink-0 grid-cols-3 sm:grid-cols-4 md:grid-cols-6"
                        >
                            {LOGOS.map(({ src, alt }) => (
                                <li
                                    key={`${src}-dup`}
                                    className="flex h-28 flex-shrink-0 items-center justify-center border border-white/5 px-6"
                                >
                                    <img
                                        src={src}
                                        alt={alt}
                                        loading="lazy"
                                        className="h-10 w-auto max-w-[110px] object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}