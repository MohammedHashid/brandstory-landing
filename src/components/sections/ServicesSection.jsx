import ServiceCard from "../ui/ServiceCard";
import { servicesData } from "../../data/servicesData";

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative flex w-full justify-center bg-[#09090b]"
      style={{ paddingTop: '140px', paddingBottom: '160px' }}
    >
      <div className="flex w-full max-w-7xl flex-col items-center px-6 lg:px-16">
        <div className="flex w-full max-w-3xl flex-col items-center text-center" style={{ marginBottom: '56px' }}>
          <h2 className="text-center text-[28px] sm:text-[34px] font-semibold leading-[1.3] text-white">
            Results-Driven Digital Marketing Services<br className="hidden sm:block" />
            in Abu Dhabi, UAE
          </h2>
        </div>
        
        <div className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
