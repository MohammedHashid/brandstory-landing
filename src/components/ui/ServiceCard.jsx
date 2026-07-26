export default function ServiceCard({ icon, title, description }) {
  return (
    <article 
      className="group flex min-h-[420px] h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-[#863bff]/50 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[#863bff]/20"
      style={{ padding: '48px' }}
    >
      <div 
        className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-500 group-hover:scale-110"
        style={{ marginBottom: '32px' }}
      >
        <img 
          src={icon} 
          alt={`${title} icon`} 
          className="h-8 w-8 object-contain" 
          loading="lazy" 
        />
      </div>
      <h3 className="mb-4 text-[22px] font-semibold tracking-wide text-white">{title}</h3>
      <p className="mb-8 flex-1 text-[15px] leading-[1.7] text-[#a1a1aa]">
        {description}
      </p>
      <a
        href="#contact"
        className="inline-flex w-fit items-center gap-3 text-[13px] font-medium text-[#a855f7] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121214] rounded-sm"
        aria-label={`Know more about ${title}`}
      >
        Know more 
        <span className="text-[16px] transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
      </a>
    </article>
  );
}