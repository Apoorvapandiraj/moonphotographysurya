import { motion } from 'framer-motion';
import FadeInAnimation from '../components/FadeInAnimation';
import { FaCheck, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Packages = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding text-center">
        <FadeInAnimation>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Photography Packages
          </h1>
        </FadeInAnimation>
        <FadeInAnimation delay={0.2}>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect package for your lunar photography needs. Each package
            is carefully crafted to deliver stunning celestial captures.
          </p>
        </FadeInAnimation>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <FadeInAnimation key={index} delay={index * 0.2}>
              <motion.div
                className={`rounded-lg p-8 ${
                  pkg.featured
                    ? 'bg-gradient-to-b from-moon-blue/20 to-black border border-moon-blue'
                    : 'bg-moon-gray/30'
                } hover:transform hover:-translate-y-2 transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
              >
                {pkg.featured && (
                  <div className="flex items-center justify-center gap-1 text-moon-blue mb-4">
                    <FaStar />
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                  <span className="text-gray-400">/session</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaCheck className="w-5 h-5 text-moon-blue flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-moon-blue hover:bg-blue-800 text-white'
                      : 'border border-moon-silver text-moon-silver hover:bg-moon-silver hover:text-black'
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            </FadeInAnimation>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-moon-gray/20 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInAnimation>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
              All Packages Include
            </h2>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedFeatures.map((feature, index) => (
              <FadeInAnimation key={index} delay={index * 0.1}>
                <div className="flex flex-col items-center">
                  <feature.icon className="w-8 h-8 text-moon-silver mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </FadeInAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const packages = [
  {
    name: "Basic Lunar",
    price: 299,
    features: [
      "2-hour photo session",
      "5 edited lunar photographs",
      "Digital delivery",
      "Basic post-processing",
      "1 location"
    ],
    featured: false
  },
  {
    name: "Premium Eclipse",
    price: 599,
    features: [
      "4-hour photo session",
      "15 edited photographs",
      "Advanced post-processing",
      "Multiple locations",
      "Time-lapse sequence",
      "Print-ready files"
    ],
    featured: true
  },
  {
    name: "Royal Celestial",
    price: 999,
    features: [
      "Full night session",
      "Unlimited photographs",
      "Professional editing",
      "Multiple locations",
      "Time-lapse videos",
      "Printed photo album",
      "Exhibition rights"
    ],
    featured: false
  }
];

const includedFeatures = [
  {
    icon: FaStar,
    title: "Professional Equipment",
    description: "Access to high-end telescopes and cameras"
  },
  {
    icon: FaCheck,
    title: "Expert Guidance",
    description: "Professional photographer assistance throughout"
  },
  {
    icon: FaStar,
    title: "Digital Gallery",
    description: "Online access to your photo collection"
  }
];

export default Packages;