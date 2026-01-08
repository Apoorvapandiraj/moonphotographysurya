import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeInAnimation from '../components/FadeInAnimation';
import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding text-center">
        <FadeInAnimation>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Contact Us
          </h1>
        </FadeInAnimation>
        <FadeInAnimation delay={0.2}>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about our lunar photography services? Get in touch with us
            and we'll get back to you as soon as possible.
          </p>
        </FadeInAnimation>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <FadeInAnimation direction="left">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold gradient-text mb-6">
                Get in Touch
              </h2>

              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-moon-gray/30 p-3 rounded-lg">
                    <info.icon className="w-6 h-6 text-moon-silver" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </div>
              ))}

              {/* Social Media Links */}
              <div className="pt-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-moon-gray/30 p-3 rounded-lg hover:bg-moon-gray/50 transition-colors duration-300"
                    >
                      <social.icon className="w-5 h-5 text-moon-silver" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeInAnimation>

          {/* Contact Form */}
          <FadeInAnimation direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-moon-gray/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-moon-blue"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-moon-gray/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-moon-blue"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-moon-gray/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-moon-blue"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-moon-gray/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-moon-blue"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <p className="text-green-500 text-center">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">
                  Error sending message. Please try again.
                </p>
              )}
            </form>
          </FadeInAnimation>
        </div>
      </section>
    </div>
  );
};

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    content: "contact@moonphotography.com"
  },
  {
    icon: FaPhone,
    title: "Phone",
    content: "+1 (555) 123-4567"
  },
  {
    icon: FaMapMarker,
    title: "Location",
    content: "123 Starlight Avenue, Lunar City, MC 12345"
  }
];

const socialLinks = [
  { icon: FaEnvelope, url: "#" },
  { icon: FaPhone, url: "#" },
  { icon: FaMapMarker, url: "#" }
];

export default Contact;