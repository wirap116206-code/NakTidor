import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

const contactMethods = [
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    details: "support@restmetrics.com",
    description: "Send us an email anytime",
  },
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    details: "+62 (888) 123-456",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    details: "123 Sleep Street, Dream City",
    description: "Feel free to visit our office",
  },
  {
    icon: <Clock size={24} />,
    title: "Support Hours",
    details: "24/7 Available",
    description: "We're here to help anytime",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-fuchsia-500">Touch</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* ================= LEFT ================= */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="
                    bg-slate-800
                    rounded-xl
                    p-6
                    hover:bg-slate-700
                    transition-colors
                  "
                >
                  {/* Icon */}
                  <div className="text-fuchsia-500 mb-4">{method.icon}</div>

                  {/* Title */}
                  <h4 className="text-white font-semibold mb-2">
                    {method.title}
                  </h4>

                  {/* Details */}
                  <p className="font-medium text-fuchsia-400 mb-1">
                    {method.details}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </div>
              ))}
            </div>

            {/* Why Choose */}
            <div
              className="
                bg-gradient-to-r
                from-slate-800
                to-purple-900/30
                rounded-3xl
                p-6
              "
            >
              <h4 className="text-white font-semibold mb-3">
                Why Choose RestMetrics
              </h4>

              <ul className="text-gray-300 space-y-2">
                <li>24/7 Customer Support</li>
                <li>Sleep Experts Available</li>
                <li>Quick Response Time</li>
                <li>Personalized Assistance</li>
              </ul>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="
              bg-slate-800
              rounded-3xl
              p-8
              lg:min-h-full
            "
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Send us a Message
            </h3>

            <form className="space-y-6">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-gray-300 block mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="
                      w-full
                      bg-slate-700
                      border border-slate-600
                      rounded-lg
                      px-4 py-3
                      text-white
                      placeholder-gray-400
                      focus:outline-none
                      focus:border-fuchsia-500
                      transition-colors
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-gray-300 block mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="
                      w-full
                      bg-slate-700
                      border border-slate-600
                      rounded-lg
                      px-4 py-3
                      text-white
                      placeholder-gray-400
                      focus:outline-none
                      focus:border-fuchsia-500
                      transition-colors
                    "
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="text-gray-300 block mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="
                    w-full
                    bg-slate-700
                    border border-slate-600
                    rounded-lg
                    px-4 py-3
                    text-white
                    placeholder-gray-400
                    focus:outline-none
                    focus:border-fuchsia-500
                    transition-colors
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-gray-300 block mb-2">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder="Write your message..."
                  className="
                    w-full
                    bg-slate-700
                    border border-slate-600
                    rounded-lg
                    px-4 py-3
                    text-white
                    placeholder-gray-400
                    focus:outline-none
                    focus:border-fuchsia-500
                    transition-colors
                    resize-none
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
    w-full
    bg-fuchsia-500
    hover:bg-fuchsia-600
    text-white
    font-semibold
    py-3
    px-6
    rounded-lg
    transition-colors
    flex
    items-center
    justify-center
    gap-2
  "
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
