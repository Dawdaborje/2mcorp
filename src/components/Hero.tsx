import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Africa Through Technology and Data Innovation
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We deliver intelligent, scalable, and locally tailored digital systems that transform data into actionable insights, helping organizations across the continent unlock their potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 justify-center sm:justify-start">
                Explore Our Services
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl opacity-90 flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <div className="text-5xl font-bold">2M</div>
                <div className="text-xl">Digital Innovation</div>
                <div className="text-sm opacity-90">Gambia • Senegal • Africa</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
