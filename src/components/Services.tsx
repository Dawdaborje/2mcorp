import { BarChart3, ClipboardList, Code, Cloud, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Data Analytics & Business Intelligence',
    description: 'Transform raw data into actionable insights for informed decision-making that drives growth and efficiency.',
  },
  {
    icon: ClipboardList,
    title: 'Survey Management & Data Collection',
    description: 'End-to-end survey design, smartphone-based field data collection, and real-time monitoring solutions.',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Build robust, user-friendly, and scalable software systems tailored to your specific organizational needs.',
  },
  {
    icon: Cloud,
    title: 'Microsoft 365 & Cloud Integration',
    description: 'Support digital transformation and secure collaboration through cloud technologies and enterprise solutions.',
  },
  {
    icon: Database,
    title: 'Information Management Systems',
    description: 'Digital platforms for health, education, finance, and government institutions that enhance service delivery.',
  },
  {
    icon: Zap,
    title: 'Technology Consulting',
    description: 'Strategic guidance on digital transformation, open-source technology adoption, and system optimization.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We design and implement technology solutions that solve real-world problems across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-xl hover:shadow-lg transition hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-4 inline-block p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition">
                  <Icon className="text-blue-600 group-hover:text-white transition" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
