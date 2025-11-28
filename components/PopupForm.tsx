"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ButtonFill from "./Button";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES_LIST = [
  "SEO",
  "SMM",
  "Performance Marketing",
  "Content Marketing",
  "Website Development",
  "Email Marketing",
  "SMO",
  "Graphic & Video",
  "Affiliate Marketing",
  "Influencer Marketing",
  "ORM",
];

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [closing, setClosing] = useState(false);

  const [step, setStep] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[],
  });

  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        services: [],
      });
      setSelectedServices([]);
      setOtp("");
      setStatusMessage("");
      setStep("form");
    }, 600);
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/send-otp",
        { ...formData, services: selectedServices }
      );

      setStatusMessage("OTP sent successfully!");
      setStep("otp");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setStatusMessage(err.response?.data?.message || "Error sending OTP.");
      } else {
        setStatusMessage("Error sending OTP.");
      }
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

      setStatusMessage("Lead Saved Successfully!");
      setTimeout(handleClose, 2000);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setStatusMessage(err.response?.data?.message || "Invalid OTP.");
      } else {
        setStatusMessage("Invalid OTP.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-start p-0"
      onClick={handleClose}
    >
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[var(--color1)] overflow-y-scroll p-3 md:p-4 rounded-b-2xl shadow-xl 
          ${closing ? "popup-close" : "popup-open"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Center Close Button */}
        <div className="w-full flex justify-center mb-4">
          <button
            onClick={handleClose}
            className="text-black bg-gradient-to-bl from-[var(--color4)] via-[var(--color3)] t0-[var(--color5)] px-4 py-1 rounded-full text-lg font-bold shadow-sm hover:bg-gray-300 transition"
          >
            ✕
          </button>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[var(--color4)]">
          Let&#39;s Grow Together 🚀
        </h2>
        <p className="text-center text-gray-200 mb-6">
          Tell us what you need — we’ll connect you instantly.
        </p>

        {step === "form" ? (
          <div className="space-y-5 w-full md:w-2/3 mx-auto text-white">
            <div className="flex gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <PhoneInput
              country="in"
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="!w-full py-6 px-2 rounded-lg"
            />

            {/* SERVICES SECTION */}
            <div>
              <p className="font-semibold mb-2">Select Services You Need:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {SERVICES_LIST.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer "
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => toggleService(service)}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Explain your requirements"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows={3}
              required
            ></textarea>

            <ButtonFill
              onClick={() => handleSendOtp}
              className="w-full"
              text={loading ? "Sending OTP..." : "Submit & Send OTP"}
            />
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleVerifyOtp}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className=" text-white w-full py-3 rounded-full font-semibold"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        {statusMessage && (
          <p className="text-center text-sm mt-4">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
