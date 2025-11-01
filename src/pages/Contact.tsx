import React, { useState } from "react";
import { CheckCircle, ArrowUpRight, Linkedin, Clock, Star, Shield, Wrench, Zap, Sparkles, Home, Paintbrush, Award, TreePine, Leaf, Package, Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import handyman from "@/assets/handyman.png";
import { Button } from "@/components/ui/button";



export default function Services() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="md:h-[550px] h-fitt md:mb-[180px] mb:[50px]  relative bg-primary py-16 md:px-10 px-8 overflow-visible">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          {/* Title & Subtitle */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
            About Xirfadsan
          </h2>
          <p className="mt-4  sm:text-base text-white/90 text-xl  mb-8 animate-slide-up">
            We are skilled handymen dedicated to quality service, <br />
            helping maintain and improve your home.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative mt-10 flex justify-center animate-slide-up">
          <div className="w-full max-w-5xl rounded-xl overflow-hidden">
            <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-md border-t-4 border-[#FDD867] p-6 md:p-8">
      <form className="space-y-6">
        {/* Full Name */}
        <div>
          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
            Full Name
          </Label>
          <Input
            id="fullName"
            placeholder="Jane Smith"
            className="mt-2 bg-[#F8F6F5] border border-gray-300 rounded-lg text-gray-700"
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Type your mail address"
              className="mt-2 bg-[#F8F6F5] border border-gray-300 rounded-lg text-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (123) 456-7890"
              className="mt-2 bg-[#F8F6F5] border border-gray-300 rounded-lg text-gray-700"
            />
          </div>
        </div>

        {/* Service Select */}
        <div>
          <Label htmlFor="service" className="text-sm font-medium text-gray-700">
            Required Service
          </Label>
          <Select>
            <SelectTrigger
              id="service"
              className="mt-2 bg-[#F8F6F5] border border-gray-300 rounded-lg text-gray-700"
            >
              <SelectValue placeholder="Select your required services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="cleaning">Cleaning</SelectItem>
              <SelectItem value="painting">Painting</SelectItem>
              <SelectItem value="handyman">Handyman</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-gradient-to-r from-[#FF4B01] to-[#FF6B00] text-white font-semibold rounded-full px-8 py-5 hover:opacity-90 transition w-full md:w-auto"
        >
          Get in Touch
        </Button>
      </form>
    </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="bg-muted/30 flex items-end overflow-hidden pt-[20px] md:pt-[240px]  pb-[50px] h-fit">
        <div className="flex items-end w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative w-full bg-[#FF5B22] rounded-lg flex flex-col md:flex-row items-end justify-between px-6 md:px-12 py-22 md:py-24">

            {/* Left: Text Content */}
            <div className="text-white max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold leading-aung py-10 mb-2 md:mb-6 text-center md:text-left">
                Your Reliable Trusted <br />
                Handyman is Just One <br />
                Call Away!
              </h2>
              <div className="flex justify-center md:justify-start">
                <button className="px-6 py-3 bg-white text-[#FF5B22] font-semibold rounded-full hover:bg-white/90 transition">
                  Explore Our Services
                </button>
              </div>
            </div>

            {/* Right: Handyman Image */}
            <div className="md:absolute  mt-10 md:mt-0 bottom-0 right-[20px] md:right-[20px] z-20">
              <img
                src={handyman}
                alt="Handyman CTA"
                className="w-[563.333px] md:w-[563.4px]  h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

    </div >
  );
}