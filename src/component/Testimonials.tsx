import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    review:
      "Amazing quality bikes! The service was exceptional, and delivery was super fast.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Sarah Smith",
    review:
      "Fantastic experience! The ordering process was seamless, and the bike exceeded my expectations.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Michael Brown",
    review:
      "Highly recommended! The customer support team was very helpful and guided me through the purchase.",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-6 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-blue-500"
              />
              <p className="text-gray-600 italic mb-4">
                "{testimonial.review}"
              </p>
              <h3 className="text-lg font-semibold text-gray-800">
                - {testimonial.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
