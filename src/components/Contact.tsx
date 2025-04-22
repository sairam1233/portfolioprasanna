import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Play  } from 'lucide-react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    emailjs.send(
      'service_1nqawlm', // 🔁 Replace with your actual Service ID
      'template_ldlv0pu', // 🔁 Replace with your actual Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      },
      'PR30abEjz_7XF8C-z' // 🔁 Replace with your actual Public Key
    )
    .then(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setFormStatus('idle');
      }, 3000);
    })
    .catch(() => {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    });
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to capture your special moments? Get in touch with us to discuss your photography needs.
          </p>
        </div>

        <div className="glass-card max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div data-aos="fade-right" className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

              {formStatus === 'success' ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center animate-fadeIn">
                  <p className="text-white font-medium mb-2">Thank you for your message!</p>
                  <p className="text-gray-300">We'll get back to you as soon as possible.</p>
                </div>
              ) : formStatus === 'error' ? (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 text-center animate-fadeIn">
                  <p className="text-white font-medium mb-2">Oops! Something went wrong.</p>
                  <p className="text-gray-300">Please try again later.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-800  border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="service" className="block text-white text-sm font-medium mb-2">Interested In</label>
                    <div className="relative  w-full">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full appearance-none bg-gray-800 text-white border border-white/20 rounded-xl px-5 py-3 pr-10 shadow-sm placeholder-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="portrait">Portrait Session</option>
                      <option value="fashion">Fashion Photography</option>
                      <option value="product">Product Photography</option>
                      <option value="event">Event Coverage</option>
                      <option value="other">Other Services</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full  bg-gray-800 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      placeholder="Tell us about your project or event..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] ${
                      formStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            <div data-aos="fade-left" className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-8 md:p-12 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6 mb-10">
                <a
                  href="https://maps.app.goo.gl/JW3jvow6z5PnkdqYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <div className="flex items-start cursor-pointer hover:opacity-90">
                    <MapPin className="text-purple-400 mt-1 mr-4 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-white font-medium">Studio Location</p>
                      <p className="text-gray-300">Airplane building opposite street main road</p>
                      <p className="text-gray-300">Tadiparru, 534227</p>
                    </div>
                  </div>
                </a>
                <div className="flex items-start">
                  <Mail className="text-purple-400 mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <a href="mailto:prasannababuphotography@gmail.com
                    " className="text-gray-300 hover:text-white transition">
                    prasannababuphotography@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-purple-400 mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <a href="tel:+9618629730" className="text-gray-300 hover:text-white transition">
                     9618629730
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-grow">
                <h4 className="text-xl font-bold text-white mb-4">Studio Hours</h4>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white">By Appointment</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/epic_by_surendra/profilecard/?igsh=MW82M24ycmp1MTk5dw==" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Instagram">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Facebook">
                      <Facebook size={20} />
                    </a>
                    <a
                    href="https://youtube.com/yourchannel" // replace with your actual YouTube URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    aria-label="YouTube"
                  >
                    <Play size={20} />
                  </a>
                    <a
                    href="https://wa.me/+919618629730" // replace with your number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <Phone size={20} />
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
