import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and subtitle
      gsap.from(['.contact-title', '.contact-subtitle'], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
        },
      });

      // Animate form with a bounce effect
      gsap.from('.contact-form', {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        delay: 0.4,
        ease: 'elastic.out(1, 0.8)',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
        },
      });

      // Animate form elements
      gsap.from('form div', {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section id="contact" ref={contactRef} className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="contact-title text-3xl md:text-4xl font-bold mb-4 text-primary text-center">
            Get in Touch
          </h2>
          <p className="contact-subtitle text-center text-foreground/70 mb-12 max-w-md mx-auto">
            Feel free to reach out. I"d love to hear from you!
          </p>
          <form className="contact-form max-w-lg mx-auto space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-foreground/90 mb-2 font-medium">
                Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FiUser size={18} />
                </span>
                <input
                  type="text"
                  id="name"
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 bg-white border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-foreground/90 mb-2 font-medium">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FiMail size={18} />
                </span>
                <input
                  type="email"
                  id="email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border text-gray-800 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-foreground/90 mb-2 font-medium">
                Message
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">
                  <FiMessageSquare size={18} />
                </span>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border text-gray-800 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>Send Message</span>
              <FiSend className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;