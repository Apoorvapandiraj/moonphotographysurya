import { motion } from 'framer-motion';
import FadeInAnimation from '../components/FadeInAnimation';
import { FaAward, FaUserAstronaut, FaCameraRetro } from 'react-icons/fa';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <FadeInAnimation>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">
              About Moon Photography
            </h1>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <FadeInAnimation direction="left">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold gradient-text">
                  Moon Photography was founded with a deep love for capturing timeless moments of love and togetherness.
                </h2>
               <p className="text-gray-300 leading-relaxed">
  Moon Photography was founded with a deep love for capturing timeless moments of love and togetherness. 
  We specialize in elegant wedding and pre-wedding photoshoots, turning every emotion, smile, and glance 
  into a beautiful visual story. Our team blends creativity with passion to ensure your most cherished 
  memories are preserved with artistic perfection and a touch of cinematic magic.
</p>
                <p className="text-gray-300 leading-relaxed">
                   Our team blends creativity with passion to ensure your most cherished 
  memories are preserved with artistic perfection and a touch of cinematic magic.
                </p>
              </div>
            </FadeInAnimation>

            <FadeInAnimation direction="right">
              <div className="relative">
                <img
                  src="/about-image.jpg"
                  alt="Lunar Photography Setup"
                  className="rounded-lg shadow-xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-moon-blue rounded-full opacity-50 blur-xl"
                />
              </div>
            </FadeInAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-moon-gray/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <FadeInAnimation key={index} delay={index * 0.2}>
                <div className="text-center">
                  <stat.icon className="w-12 h-12 mx-auto text-moon-silver mb-4" />
                  <motion.span
                    className="text-4xl font-bold gradient-text block mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.span>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </FadeInAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <FadeInAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Meet Our Team
            </h2>
          </FadeInAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <FadeInAnimation key={index} delay={index * 0.2}>
                <div className="bg-moon-gray/30 rounded-lg p-6 text-center hover:transform hover:-translate-y-1 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-moon-silver mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </FadeInAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const stats = [
  {
    icon: FaCameraRetro,
    value: "1000+",
    label: "Lunar Photos Taken"
  },
  {
    icon: FaUserAstronaut,
    value: "200+",
    label: "Happy Clients"
  },
  {
    icon: FaAward,
    value: "15+",
    label: "Awards Won"
  }
];

const team = [
  {
    name: "David Moon",
    role: "Lead Photographer",
    image: "./team-1.jpg",
    bio: "With 15 years of experience in astronomical photography, David leads our creative vision."
  },
  {
    name: "Sarah Star",
    role: "Technical Director",
    image: "./team-2.jpg",
    bio: "Expert in advanced photography equipment and astronomical timing."
  },
  {
    name: "Michael Nova",
    role: "Creative Director",
    image: "./team-3.jpg",
    bio: "Specializes in composition and artistic direction for unique lunar captures."
  }
];

export default About;