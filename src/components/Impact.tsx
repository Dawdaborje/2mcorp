import { Globe, Users, TrendingUp, Award } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    number: '20+',
    label: 'Countries Reached',
  },
  {
    icon: Users,
    number: '500K+',
    label: 'Data Points Collected',
  },
  {
    icon: TrendingUp,
    number: '50+',
    label: 'Organizations Served',
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years Combined Experience',
  },
];

const sectors = [
  'Healthcare',
  'Banking & Finance',
  'Social Protection',
  'Government & Justice',
  'Education',
  'International Development',
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From digitizing national agencies to supporting international development programs, we've partnered with leading organizations across Africa.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl border border-blue-100">
                <Icon className="text-blue-600 mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Sectors */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sectors We Serve</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white border-2 border-blue-200 rounded-full text-gray-700 font-medium hover:border-blue-600 transition"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8 md:p-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Digitizing National Systems</h3>
            <p className="mb-6 text-blue-50 leading-relaxed">
              We've successfully digitized data collection and management systems for government agencies, improving efficiency by up to 40% and enabling real-time monitoring and reporting across multiple regions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Real-time data collection and visualization</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Secure, scalable cloud infrastructure</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Mobile-first field data collection</span>
              </li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <div>
                <div className="text-4xl font-bold">40%</div>
                <p className="text-blue-100">Efficiency Improvement</p>
              </div>
              <div className="h-px bg-white opacity-30"></div>
              <div>
                <div className="text-4xl font-bold">100K+</div>
                <p className="text-blue-100">Data Records Managed</p>
              </div>
              <div className="h-px bg-white opacity-30"></div>
              <div>
                <div className="text-4xl font-bold">5</div>
                <p className="text-blue-100">Government Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
