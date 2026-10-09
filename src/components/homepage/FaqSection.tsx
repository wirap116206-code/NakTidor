const faqs = [
  {
    question: "Do i need to wear any special devices?",
    answer:
      "No, Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi. ",
  },
  {
    question: "Is my sleep data private and secure?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
  },
  {
    question: "Can i use RestMetrics with my smartwatch?",
    answer:
      "Yes, Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
  },
  {
    question: "Is there a free version available?",
    answer:
      "Yes, Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-fuchsia-500">Questions</span>
          </h2>
          <p className="text-md text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about RestMetrics and how it can
            help you achieve better sleep.
          </p>
        </div>
        <div className="space-y-6 ">
          {faqs.map((faq, index) => {
            return (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <h3 className="text-xl font-semibold text-white  mb-3 flex items-center">
                  <span className="text-fuchsia-500 mr-3 ">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-400 ml-8">
                  <span className="text-fuchsia-500 mr-2 font-semibold">
                    A:
                  </span>
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <div className="bg-linear-to-r from-slate-800 to-purple-900/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Cant fint the answer youre looking for? Please chat with our
              friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-gray-600 hover:border-fuchsia-500 hover:text-fuchsia-500 text-gray-300  px-8 py-3 rounded-full font-semibold transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
