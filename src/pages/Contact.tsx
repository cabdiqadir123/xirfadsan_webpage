import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import handyman from "@/assets/handyman.png";

interface ServiceType {
  service_id: string;
  name: string;
}

export default function Services() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Services state
  const [services, setServices] = useState<ServiceType[]>([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState<string | null>(null);

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("https://back-end-for-xirfadsan.onrender.com/api/services/allNew");
        if (!res.ok) throw new Error("Failed to load services");
        const data = await res.json();
        setServices(data);
      } catch (err: any) {
        setServicesError(err.message);
      } finally {
        setServicesLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const getSomaliaTime = (): string => {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const somaliaTime = new Date(utc + 3 * 3600000); // UTC+3
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${somaliaTime.getFullYear()}-${pad(somaliaTime.getMonth() + 1)}-${pad(somaliaTime.getDate())} ` +
           `${pad(somaliaTime.getHours())}:${pad(somaliaTime.getMinutes())}:${pad(somaliaTime.getSeconds())}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const created_at = getSomaliaTime();

    try {
      const res = await fetch("https://back-end-for-xirfadsan.onrender.com/api/contact/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.service,
          message: formData.message,
          is_read: 0,
          replied_at: created_at,
          created_at: created_at
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");

      setSuccess("Your message has been sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", service: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="md:h-[550px] h-fit relative bg-primary py-16 md:px-10 px-8 overflow-visible mb-72">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
            About Xirfadsan
          </h2>
          <p className="mt-4 sm:text-base text-white/90 text-xl mb-8 animate-slide-up">
            We are skilled handymen dedicated to quality service, <br />
            helping maintain and improve your home.
          </p>
        </div>

        {/* Contact Form */}
        <div className="relative mt-10 flex justify-center animate-slide-up">
          <div className="w-full max-w-5xl rounded-xl overflow-hidden">
            <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-md border-t-4 border-[#FDD867] p-6 md:p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Type your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-2 bg-[#F8F6F5] border border-gray-300 rounded-lg text-gray-700"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Type your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 bg-[#F8F6F5] border border-gray-300 rounded-lg text-gray-700"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="061-0-000000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 bg-[#F8F6F5] border border-gray-300 rounded-lg text-gray-700"
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div>
                  <Label htmlFor="service" className="text-sm font-medium text-gray-700">Required Service</Label>
                  {servicesLoading ? (
                    <p className="text-gray-500 mt-2">Loading services...</p>
                  ) : servicesError ? (
                    <p className="text-red-500 mt-2">{servicesError}</p>
                  ) : (
                    <Select value={formData.service} onValueChange={handleServiceChange}>
                      <SelectTrigger
                        id="service"
                        className="mt-2 bg-[#F8F6F5] border border-gray-300 rounded-lg text-gray-700"
                      >
                        <SelectValue placeholder="Select your required service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.service_id} value={s.name}>{s.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 bg-[#F8F6F5] border border-gray-300 rounded-lg text-gray-700 w-full h-24 p-3 resize-none"
                  />
                </div>

                {/* Success / Error */}
                {success && <p className="text-green-600">{success}</p>}
                {error && <p className="text-red-600">{error}</p>}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-[#FF4B01] to-[#FF6B00] text-white font-semibold rounded-full px-8 py-5 hover:opacity-90 transition w-full md:w-auto"
                >
                  {loading ? "Sending..." : "Get in Touch"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 flex items-end overflow-hidden pt-[20px] md:pt-[240px] pb-[50px] h-fit">
        <div className="flex items-end w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative w-full bg-[#FF5B22] rounded-lg flex flex-col md:flex-row items-end justify-between px-6 md:px-12 py-22 md:py-24">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold py-10 mb-6 text-center md:text-left">
                Your Reliable Trusted <br />Handyman is Just One <br />Call Away!
              </h2>
              <div className="flex justify-center md:justify-start">
                <button className="px-6 py-3 bg-white text-[#FF5B22] font-semibold rounded-full hover:bg-white/90 transition">
                  Explore Our Services
                </button>
              </div>
            </div>

            <div className="md:absolute mt-10 md:mt-0 bottom-0 right-[20px] z-20">
              <img
                src={handyman}
                alt="Handyman CTA"
                className="w-[563.333px] md:w-[563.4px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}