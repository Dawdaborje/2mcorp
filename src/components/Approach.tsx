import { Lightbulb, Users, Zap, Target } from 'lucide-react';

const approaches = [
  {
    icon: Lightbulb,
    title: 'Open-Source First',
    description: 'We build on proven open-source technologies, reducing development time and cost while ensuring flexibility, sustainability, and future-proof solutions.',
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description: 'Our developers, analysts, and project managers work closely with you to understand your unique environment and challenges.',
  },
  {
    icon: Zap,
    title: 'Efficiency & Empowerment',
    description: 'We design efficient systems that empower your teams with tools and insights that enhance productivity and enable data-driven decisions.',
  },
  {
    icon: Target,
    title: 'Locally Relevant Solutions',
    description: 'Every solution is tailored to local contexts while maintaining global competitiveness and industry best practices.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovation doesn't have to start from scratch. We combine proven methodologies with local expertise to deliver solutions that truly work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {approaches.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-blue-600">
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 md:p-12 border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe that technology should be a bridge, not a barrier. By combining open-source innovation with deep local understanding, we create solutions that are both cutting-edge and culturally relevant. Our commitment is to help African organizations collect, manage, and use data to deliver better services to their communities.
          </p>
        </div>
      </div>
    </section>
  );
}
