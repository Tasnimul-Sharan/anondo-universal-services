"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiXCircle } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";

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

      form.append("access_key", "f5849607-42ce-47cc-a7c3-64e29f78badd");

      form.append(
        "subject",
        `New Contact Message from ${siteConfig.companyName}`,
      );

      // Form fields
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
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
        <motion.div
          className="flex flex-col justify-between rounded"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <p className="bg-primary/20 text-primary rounded-full text-xs font-semibold px-4 py-2 uppercase tracking-wide inline-block mb-4">
              Get in Touch
            </p>
            <h2 className="md:text-3xl text-3xl font-bold mb-4 leading-snug">
              Connect with{" "}
              <span className="text-primary"> {siteConfig.companyName} </span>{" "}
              <br /> for reliable protection anytime
            </h2>
            <p className="text-gray-500 mb-6 max-w-xl">
              We provide trusted security guard services for homes, offices, and
              businesses. Reach out to us anytime for dependable safety and
              professional support.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-1">
            {/* Address Card */}
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 text-gray-700">
              <div className="bg-primary p-3 rounded-full text-xl text-white">
                <FiMapPin />
              </div>
              <div>
                <h4 className="font-semibold">Our Address</h4>
                <p className="text-sm opacity-90">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-lg p-6 text-gray-700">
              <div className="bg-primary p-3 rounded-full text-xl text-white">
                <FiPhoneCall />
              </div>
              <div>
                <h4 className="font-semibold">Our Phone</h4>
                <div className="flex flex-col gap-1">
                  {[
                    {
                      phone: siteConfig.contact.phone,
                      phoneHref: siteConfig.contact.phoneHref,
                    },
                    ...siteConfig.contact.additionalPhones,
                  ].map(({ phone, phoneHref }) => (
                    <a
                      key={phone}
                      className="text-sm opacity-90 hover:text-primary"
                      href={phoneHref}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 text-gray-700">
              <div className="bg-primary p-3 rounded-full text-xl text-white">
                <FiMail />
              </div>
              <div>
                <h4 className="font-semibold">Our Email</h4>
                <a
                  className="text-sm opacity-90 hover:text-primary"
                  href={siteConfig.contact.emailHref}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-white border rounded-lg px-6 py-8 flex flex-col"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
            <div className="relative">
              <button
                ref={buttonRef}
                type="submit"
                disabled={loading}
                className="bg-primary hover:bg-secondary text-white font-semibold rounded-md px-6 py-3 w-full transition-colors duration-500 flex items-center justify-center gap-2 group"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                <FaRegPaperPlane className="text-lg transform transition-transform duration-500 group-hover:translate-x-2" />
              </button>

              {status === "success" && (
                <motion.div
                  className="mt-4 flex items-center gap-2 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <AiFillCheckCircle className="w-5 h-5" />
                  <span>Your message has been sent successfully!</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  className="mt-4 flex items-center gap-2 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <FiXCircle className="w-5 h-5" />
                  <span>Oops! Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
