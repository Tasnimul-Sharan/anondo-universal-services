"use client";
import Image from "next/image";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiXCircle } from "react-icons/fi";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const buttonRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        form.append(key, value)
      );

      const res = await fetch("https://formspree.io/f/xpwlnqjv", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section className="relative py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left side with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-between rounded"
        >
          <div>
            <p className="uppercase text-primary tracking-[0.15em] mb-3 font-medium">
              Get in Touch
            </p>
            <h2 className="md:text-4xl text-3xl font-bold text-secondary mb-4 leading-snug">
              Visit Anondo Baari <br /> or reach out to us anytime
            </h2>
            <p className="text-gray-500 mb-10 max-w-md">
              We are here to answer your questions and guide you through our
              senior wellness & living facilities. Feel free to connect with us.
            </p>
          </div>

          <div className="bg-primary/90 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-white bg-primary p-3 rounded-full text-xl">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="font-semibold">Our Address</h4>
                  <p className="text-sm opacity-90">
                    Anondo Baari, Printers’ Building, 5 RAJUK Avenue, Dilkusha,
                    Dhaka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-white bg-primary p-3 rounded-full text-xl">
                  <FiPhoneCall />
                </div>
                <div>
                  <h4 className="font-semibold">Our Phone</h4>
                  <p className="text-sm opacity-90">+880 1313775333</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-white bg-primary p-3 rounded-full text-xl">
                  <FiMail />
                </div>
                <div>
                  <h4 className="font-semibold">Our Email</h4>
                  <p className="text-sm opacity-90">info@anondobari.com</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side (form) with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white border rounded-lg px-6 py-12 flex flex-col justify-between"
        >
          <form onSubmit={handleSubmit} className="space-y-6 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Your message*
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                required
              />
            </div>
            <button
              ref={buttonRef}
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary/80 text-white font-semibold rounded-md px-6 py-3 w-full transition-all transform duration-500 flex items-center justify-center gap-2"
            >
              <FaRegPaperPlane className="text-lg" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success / Error Messages */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-center gap-2 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md transition-all max-w-2xl mx-auto"
        >
          <AiFillCheckCircle className="w-5 h-5" />
          <span>Your message has been sent successfully!</span>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-center gap-2 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md transition-all max-w-2xl mx-auto"
        >
          <FiXCircle className="w-5 h-5" />
          <span>Oops! Something went wrong. Please try again.</span>
        </motion.div>
      )}
    </section>
  );
}

// "use client";
// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
// import { FaRegPaperPlane } from "react-icons/fa";
// import { AiFillCheckCircle } from "react-icons/ai";
// import { FiXCircle } from "react-icons/fi";

// export default function ContactSection() {
//   const buttonRef = useRef(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [status, setStatus] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus(null);

//     try {
//       const form = new FormData();
//       Object.entries(formData).forEach(([key, value]) =>
//         form.append(key, value)
//       );

//       const res = await fetch("https://formspree.io/f/xpwlnqjv", {
//         method: "POST",
//         headers: { Accept: "application/json" },
//         body: form,
//       });

//       if (res.ok) {
//         setStatus("success");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         throw new Error("Submission failed");
//       }
//     } catch (err) {
//       setStatus("error");
//     } finally {
//       setLoading(false);
//       setTimeout(() => setStatus(null), 6000);
//     }
//   };

//   return (
//     <section className="relative py-20 bg-primary/5">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
//         {/* Left Side */}
//         <motion.div
//           className="flex flex-col justify-between rounded"
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <div>
//             <p className="uppercase text-primary tracking-[0.15em] mb-3 font-medium">
//               Get in Touch
//             </p>
//             <h2 className="md:text-4xl text-3xl font-bold text-secondary mb-4 leading-snug">
//               Visit Anondo Baari <br /> or reach out to us anytime
//             </h2>
//             <p className="text-gray-500 mb-10 max-w-md">
//               We are here to answer your questions and guide you through our
//               senior wellness & living facilities. Feel free to connect with us.
//             </p>
//           </div>

//           <div className="bg-primary/90 rounded-lg p-8 text-white relative overflow-hidden">
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="text-white bg-primary p-3 rounded-full text-xl">
//                   <FiMapPin />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Our Address</h4>
//                   <p className="text-sm opacity-90">
//                     Anondo Baari, Printers’ Building, 5 RAJUK Avenue, Dilkusha,
//                     Dhaka
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="text-white bg-primary p-3 rounded-full text-xl">
//                   <FiPhoneCall />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Our Phone</h4>
//                   <p className="text-sm opacity-90">+880 1313775333</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="text-white bg-primary p-3 rounded-full text-xl">
//                   <FiMail />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Our Email</h4>
//                   <p className="text-sm opacity-90">info@anondobari.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Side Form */}
//         <motion.div
//           className="bg-white border rounded-lg px-6 py-12 flex flex-col justify-between"
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <form onSubmit={handleSubmit} className="space-y-6 flex-1">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium mb-2">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Full Name"
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Your message*
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message"
//                 rows={4}
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                 required
//               />
//             </div>
//             <button
//               ref={buttonRef}
//               type="submit"
//               disabled={loading}
//               className="bg-primary hover:bg-primary/80 text-white font-semibold rounded-md px-6 py-3 w-full transition-all transform duration-500 flex items-center justify-center gap-2"
//             >
//               <FaRegPaperPlane className="text-lg" />
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </motion.div>
//       </div>

//       {/* Success/Error Message */}
//       {status === "success" && (
//         <motion.div
//           className="mt-6 flex items-center gap-2 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <AiFillCheckCircle className="w-5 h-5" />
//           <span>Your message has been sent successfully!</span>
//         </motion.div>
//       )}

//       {status === "error" && (
//         <motion.div
//           className="mt-6 flex items-center gap-2 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <FiXCircle className="w-5 h-5" />
//           <span>Oops! Something went wrong. Please try again.</span>
//         </motion.div>
//       )}
//     </section>
//   );
// }
