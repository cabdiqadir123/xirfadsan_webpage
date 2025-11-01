import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowUpRight, Linkedin, Clock, Star, Shield, Wrench, Zap, Sparkles, Home, Paintbrush, Award, TreePine, Leaf, Package, Icon, Calendar } from "lucide-react";
import handyman from "@/assets/handyman.png";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch blogs from backend

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://back-end-for-xirfadsan.onrender.com/api/blog/all");
        if (!response.ok) throw new Error("Failed to load services");
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-6xl">
            Our Blog
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90">
            Have a question or need a quote? We're here to help with your handyman needs.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {loading ? (
            <p className="text-center text-gray-500">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-center text-gray-500">No blogs available.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="h-[505px] w-full relative aspect-video bg-cover bg-center rounded-[16px] overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${'https://back-end-for-xirfadsan.onrender.com/api/blog/image/' + blog.id})` }}
                  ></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white w-[90%] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {blog.title}
                    </h3>
                    <p className="text-[#908C8C] mb-4 text-sm">
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0D0100] hover:text-[#FF4B01] cursor-pointer">
                        Learn More
                      </span>
                      <div className="text-xs text-[#524E4E] px-4 py-2 border-2 border-[#524E4E] rounded-full">
                        {new Date(blog.created_at).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 flex items-end overflow-hidden pt-[20px] md:pt-[240px] pb-[50px]">
        <div className="flex items-end w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative w-full bg-[#FF5B22] rounded-lg flex flex-col md:flex-row items-end justify-between px-6 md:px-12 py-22 md:py-24">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold py-10 mb-6 text-center md:text-left">
                Your Reliable Trusted <br /> Handyman is Just One <br /> Call Away!
              </h2>
              <div className="flex justify-center md:justify-start">
                <button className="px-6 py-3 bg-white text-[#FF5B22] font-semibold rounded-full hover:bg-white/90 transition">
                  Explore Our Services
                </button>
              </div>
            </div>
            <div className="md:absolute mt-10 md:mt-0 bottom-0 right-[20px] md:right-[20px] z-20">
              <img
                src={handyman}
                alt="Handyman CTA"
                className="w-[563px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}