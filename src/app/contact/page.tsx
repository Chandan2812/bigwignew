"use client";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Phone, MapPin, Clock } from "lucide-react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    message: "",
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"form" | "otp">("form");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateInputs = () => {
    const newErrors: typeof errors = {};
    if (!formData.email.includes("@"))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.phone || formData.phone.length < 10)
      newErrors.phone = "Please enter a valid phone number.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("");
    if (!validateInputs()) return;
    setLoading(true);

    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/send-otp",
        {
          name: formData.fullName,
          email: formData.email,
          phone: `${formData.countryCode}${formData.phone}`,
          message: formData.message,
        }
      );
      setStep("otp");
      setStatusMessage("OTP sent! Please check your email.");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setStatusMessage(
        error.response?.data?.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/verify-otp",
        {
          email: formData.email,
          otp,
        }
      );
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 2500);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        countryCode: "",
      });
      setOtp("");
      setStep("form");
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setStatusMessage(error.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white">
      <Nav />

      {/* FULL BACKGROUND SECTION */}
      <div
        className="w-full min-h-screen bg-cover bg-center relative py-20"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764323168/kaitlyn-baker-vZJdYl5JVXY-unsplash_skfolb.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-14">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-5xl font-bold mb-13">CONTACT US</h1>

            {/* Call */}
            <div className="flex items-start gap-4 mb-10">
              <Phone size={32} className="text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold">Call Us</h3>
                <p className="opacity-80">+91 96858 92813</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 mb-10">
              <MapPin size={32} className="text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p className="opacity-80 max-w-xs">
                  Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 mb-10">
              <Clock size={32} className="text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold">Business Hours</h3>
                <p className="opacity-80">
                  Mon – Sat: 10:30 am – 7 pm <br />
                  Sat: 2nd & 4th, Sun: Closed
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="w-full">
            {step === "form" ? (
              <form onSubmit={handleSendOtp} className="space-y-10">
                {/* EMAIL */}
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-yellow-400"
                    placeholder="Enter a valid email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                {/* NAME */}
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-yellow-400"
                    placeholder="Enter your Name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                  />
                </div>

                {/* PHONE INPUT */}
                {/* PHONE FIELD (Country Code + Number) */}
                <div>
                  <label className="text-white">Phone</label>

                  <div className="flex gap-3 items-center mt-2">
                    {/* COUNTRY CODE DROPDOWN */}
                    <select
                      className=" p-3 rounded-md"
                      value={formData.countryCode || "+91"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          countryCode: e.target.value,
                        })
                      }
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+64">🇳🇿 +64</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+49">🇩🇪 +49</option>
                      {/* Add more if needed */}
                    </select>

                    {/* PHONE NUMBER INPUT */}
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="bg-transparent border-b border-gray-400 p-2 flex-1 outline-none focus:border-yellow-400 text-white"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label>Message</label>
                  <textarea
                    rows={3}
                    name="message"
                    className="w-full bg-transparent border-b border-gray-400 p-2 outline-none focus:border-yellow-400"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 rounded-full transition"
                >
                  {loading ? "Sending OTP..." : "SUBMIT"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-10">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-400 p-2 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full"
                >
                  {loading ? "Verifying..." : "VERIFY OTP"}
                </button>
              </form>
            )}

            {statusMessage && (
              <p className="text-yellow-300 mt-3">{statusMessage}</p>
            )}
          </div>
        </div>
        {/* MAP UNDER SAME BACKGROUND */}
        <div className="relative w-11/12 md:w-10/12 mx-auto mt-16 pb-16 z-[999]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.322121979646!2d77.19070767529064!3d28.673932275642237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03586419b693%3A0x627bb399c7e86209!2sBigwig%20Media%20Digital%20-%20Digital%20Marketing%20Company!5e1!3m2!1sen!2in!4v1763114888587!5m2!1sen!2in"
            className="w-full h-[350px] rounded-lg shadow-xl"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-green-600">Thank You!</h3>
            <p>Your response has been submitted.</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
