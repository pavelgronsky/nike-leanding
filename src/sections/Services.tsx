import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      {services.map((serviceItem) => (
        <ServiceCard key={serviceItem.label} {...serviceItem} />
      ))}
    </section>
  );
};

export default Services;
