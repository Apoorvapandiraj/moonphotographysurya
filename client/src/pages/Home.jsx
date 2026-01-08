import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeInAnimation from '../components/FadeInAnimation';
import { FaMoon, FaCamera, FaStar, FaImage } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('./moon-bg.jpg')] bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
          }}
        />

        {/* Animated moon icon */}
       <motion.div
  animate={{
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
  }}
  className="absolute top-1/4 right-1/4 opacity-90"
  style={{
    background: 'linear-gradient(90deg, #031210ff, #0b1506ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0 25px #e5c8f1ff)',
  }}
>
  <FaMoon className="w-32 h-32 md:w-48 md:h-48" />
  
</motion.div>


        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="relative inline-block text-center">
  {/* Premium Font with Gold Gradient */}
  <h1
    className="text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display'] tracking-wide font-bold mb-6 
    bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-300 bg-clip-text text-transparent drop-shadow-lg"
  >
    Moon Photography
  </h1>

  {/* Constant Glitter Dust (No Fade Out) */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <span className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-80 blur-[2px] animate-bounce top-8 left-1/2"></span>
    <span className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full opacity-80 blur-[1px] animate-bounce delay-150 top-1/3 right-1/3"></span>
    <span className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-80 blur-[1px] animate-bounce delay-300 bottom-1/4 left-1/4"></span>
    <span className="absolute w-2 h-2 bg-yellow-500 rounded-full opacity-80 blur-[2px] animate-bounce delay-500 top-1/2 right-1/4"></span>
  </div>
</div>

          <FadeInAnimation delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
             Moon Photography was founded with a deep love for capturing timeless moments of love and togetherness. 
  We specialize in elegant wedding and pre-wedding photoshoots, turning every emotion, smile, and glance 
  into a beautiful visual story.
            </p>
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <div className="flex justify-center gap-4">
              <Link
                to="/works"
                className="btn-primary flex items-center gap-2"
              >
                <FaImage /> View Gallery
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 border border-moon-silver text-moon-silver hover:bg-moon-silver hover:text-black rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <FaCamera /> Book Session
              </Link>
            </div>
          </FadeInAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Why Choose Moon Photography?
            </h2>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeInAnimation key={index} delay={index * 0.2}>
                <div className="p-6 rounded-lg bg-moon-gray/30 backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-moon-silver mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </FadeInAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-moon-gray/50 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
             “Ready for a Photoshoot That Tells Your Story?”
            </h2>
          </FadeInAnimation>

          <FadeInAnimation delay={0.2}>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something magical together under the moonlight.
            </p>
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <Link
              to="/packages"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaStar /> View Our Packages
            </Link>
          </FadeInAnimation>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: FaMoon,
    title: "Cinematic Weddings",
description: "Expertly crafting cinematic wedding and pre-wedding moments with artistic lighting, composition, and storytelling that make your memories truly unforgettable.",
  },
  {
    icon: FaCamera,
    title: "Premium Gear & Lighting",
description: "Equipped with professional-grade cameras and cinematic lighting setups to create breathtaking visuals that bring your love story to life.",
  },
  {
    icon: FaStar,
    title: "Creative Vision",
description: "Blending art and emotion to create stunning, story-driven wedding and pre-wedding visuals that reflect your unique journey together.",
  }
];

export default Home;