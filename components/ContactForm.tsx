"use client";
import { useState } from "react";
import axios from "axios";
import ButtonFill from "./Button";

const SERVICES_LIST = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Performance Marketing",
  "Content Marketing",
  "Website Development",
  "Social Media Optimization",
  "Email Marketing",
  "Graphic Designing",
  "Influencer Marketing",
  "Affiliate Marketing",
  "Online Reputation Management",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [] as string[], // 🔥 NEW field
  });

  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"form" | "otp" | "done">("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔥 NEW — toggle selected services
  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(service);

      return {
        ...prev,
        services: alreadySelected
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/send-otp",
        formData
      );
      setStep("otp");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          setError(
            "This email is already registered. Please use a different one."
          );
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "https://bigwigdigitalbackend.onrender.com/api/lead/verify-otp",
        {
          email: formData.email,
          otp,
        }
      );
      setStep("done");
    } catch (err: unknown) {
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md lg:max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">
        {step === "done" ? "Thank You!" : "Get in Touch"}
      </h3>

      {/* ---------------- FORM STEP ---------------- */}
      {step === "form" && (
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white placeholder-white/70"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white placeholder-white/70"
          />
          <div className="flex gap-3">
            <select
              className="p-3 border border-white/30 rounded-lg   w-32  bg-[var(--color3)] "
              value={formData.phone.split(" ")[0] || "+91"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: `${e.target.value} ${
                    formData.phone.split(" ")[1] || ""
                  }`,
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
            </select>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-white/30 rounded-lg text-white"
              value={formData.phone.split(" ")[1] || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: `${formData.phone.split(" ")[0] || "+91"} ${
                    e.target.value
                  }`,
                })
              }
              required
            />
          </div>

          {/* SERVICE SELECT (COLLAPSIBLE) */}
          <div className="space-y-2">
            <details className="bg-white/5 border border-white/20 rounded-lg p-3 open:bg-white/10 transition-all">
              <summary className="cursor-pointer text-white select-none">
                {formData.services.length > 0
                  ? `${formData.services.length} Selected`
                  : "Select Services"}
              </summary>

              {/* 2 COLUMN GRID INSIDE DROPDOWN */}
              <div className="mt-3 grid grid-cols-2 gap-2 max-h-32 overflow-y-auto pr-1">
                {SERVICES_LIST.map((service) => {
                  const selected = formData.services.includes(service);

                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => handleServiceToggle(service)}
                      className={`w-full text-left px-3 py-2 rounded border text-sm
              ${
                selected
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-white/40 hover:border-white"
              }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </details>
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white placeholder-white/70"
          ></textarea>

          <ButtonFill
            text={loading ? "Sending OTP to your mail..." : "Submit"}
            onClick={() => {}}
            className="w-full !py-3 !text-white"
          />
        </form>
      )}

      {/* ---------------- OTP STEP ---------------- */}
      {step === "otp" && (
        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 rounded border border-white/30 bg-transparent text-white placeholder-white/70"
          />

          <ButtonFill
            text={loading ? "Verifying..." : "Verify OTP"}
            onClick={() => {}}
            className="w-full !py-3"
          />
        </form>
      )}

      {/* ---------------- SUCCESS STEP ---------------- */}
      {step === "done" && (
        <p className="text-white text-center">
          Your message has been submitted successfully.
        </p>
      )}

      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
};

export default ContactForm;
