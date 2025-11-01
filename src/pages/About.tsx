import React, { useEffect, useState } from "react";
import { CheckCircle, ArrowUpRight, Linkedin, Clock, Star, Shield, Wrench, Zap, Sparkles, Home, Paintbrush, Award, TreePine, Leaf, Package, Icon } from "lucide-react";
// import { FaLinkedin } from "react-icons/fa";
import Solution from "@/assets/Solution.png";
import handyman from "@/assets/handyman.png";
import hub1 from "@/assets/hub1.png";
import hub2 from "@/assets/hub2.png";
import hub3 from "@/assets/hub3.png";
import material from "@/assets/material.png";
import light from "@/assets/light.png";
import energy from "@/assets/energy.png";
import tm1 from "@/assets/tm1.png";
import tm2 from "@/assets/tm2.png";
import tm3 from "@/assets/tm3.png";
import tm4 from "@/assets/tm4.png";
import tm5 from "@/assets/tm5.png";
import tm6 from "@/assets/tm6.png";



// const serviceCategories = [
//   {
//     id: "plumbing",
//     name: "Plumbing Services",
//     description: "Complete plumbing solutions for residential and commercial properties",
//     icon: Wrench,
//     pricing: "Starting at $89",
//     services: [
//       "Emergency leak repairs",
//       "Drain cleaning & unclogging",
//       "Water heater installation",
//       "Pipe replacement & repair",
//       "Bathroom & kitchen plumbing",
//       "Sewer line services"
//     ]
//   },
//   {
//     id: "electrical",
//     name: "Electrical Services",
//     description: "Licensed electrical work for safety and efficiency",
//     icon: Zap,
//     pricing: "Starting at $95",
//     services: [
//       "Electrical panel upgrades",
//       "Outlet & switch installation",
//       "Lighting fixture installation",
//       "Electrical safety inspections",
//       "Circuit breaker repairs",
//       "Smart home wiring"
//     ]
//   },
//   {
//     id: "cleaning",
//     name: "House Cleaning",
//     description: "Professional cleaning services for pristine homes",
//     icon: Sparkles,
//     pricing: "Starting at $120",
//     services: [
//       "Regular house cleaning",
//       "Deep cleaning services",
//       "Move-in/move-out cleaning",
//       "Post-construction cleanup",
//       "Window washing",
//       "Carpet & upholstery cleaning"
//     ]
//   },
//   {
//     id: "handyman",
//     name: "Handyman Services",
//     description: "General home repairs and maintenance solutions",
//     icon: Home,
//     pricing: "Starting at $75",
//     services: [
//       "Furniture assembly",
//       "Drywall repair & painting",
//       "Door & window installation",
//       "Shelf & cabinet mounting",
//       "Pressure washing",
//       "Minor home repairs"
//     ]
//   },
//   {
//     id: "painting",
//     name: "Painting Services",
//     description: "Interior and exterior painting by skilled professionals",
//     icon: Paintbrush,
//     pricing: "Starting at $200",
//     services: [
//       "Interior wall painting",
//       "Exterior house painting",
//       "Cabinet refinishing",
//       "Pressure washing prep",
//       "Color consultation",
//       "Wallpaper removal"
//     ]
//   },
//   {
//     id: "landscaping",
//     name: "Landscaping",
//     description: "Beautiful outdoor spaces and garden maintenance",
//     icon: TreePine,
//     pricing: "Starting at $85",
//     services: [
//       "Lawn mowing & maintenance",
//       "Garden design & installation",
//       "Tree trimming & removal",
//       "Irrigation system setup",
//       "Seasonal cleanup",
//       "Hardscape installation"
//     ]
//   }
// ];


const highlights = [
  "Home repair experience.",
  "Licensed, insured, expert pros.",
  "Committed to quality.",
];


const benefits = [
  {
    title: "Reliability & Trust",
    description: "Looking for a dependable handyman? We arrive on time and do the job right.",
    icon: Shield,
  },
  {
    title: "Quality Workmanship",
    description: "Our skilled technicians excel in various home repairs, using only top-quality materials.",
    icon: Award,
  },
  {
    title: "Fair & Transparent Pricing",
    description: "No surprises here! We offer clear quotes and fair pricing for quality work.",
    icon: CheckCircle,
  },
];


const items = [
  {
    title: "Environmentally Friendly Solutions",
    description:
      "Signs to look out for, such as unusually high water bills, water stains, or the sound of running water when no fixtures are in use.",
    icon: light,
    image:
      hub1, // replace with your 1st image
  },
  {
    title: "Energy Efficient Practices",
    description:
      "Signs to look out for, such as unusually high water bills, water stains, or the sound of running water when no fixtures are in use.",
    icon: energy,
    image:
      hub2, // replace with your 2nd image
  },
  {
    title: "Sustainable Materials",
    description:
      "Signs to look out for, such as unusually high water bills, water stains, or the sound of running water when no fixtures are in use.",
    icon: material,
    image:
      hub3, // replace with your 3rd image
  },
];


const whyChooseUs = [
  {
    title: "Instant Booking",
    description: "Book services online or via phone with real-time availability",
    icon: Clock
  },
  {
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all completed work",
    icon: CheckCircle
  },
  {
    title: "Trusted Professionals",
    description: "Background-checked, insured, and highly-rated service providers",
    icon: Star
  }
];


// const TeamMember = [
//   {
//     name: "Martin Garrix",
//     role: "Product Manager",
//     image: tm1,
//     linkedin: "#",
//   },
//   {
//     name: "Anna Smith",
//     role: "Operations Specialist",
//     image: tm2,
//     linkedin: "#",
//   },
//   {
//     name: "Jessica Brown",
//     role: "Pest Control Expert",
//     image: tm3,
//     linkedin: "#",
//   },
//   {
//     name: "David Johnson",
//     role: "Field Technician",
//     image: tm4,
//     linkedin: "#",
//   },
//   {
//     name: "Michael Lee",
//     role: "Senior Exterminator",
//     image: tm5,
//     linkedin: "#",
//   },
//   {
//     name: "Sophia Chen",
//     role: "Customer Support",
//     image: tm6,
//     linkedin: "#",
//   },
// ];





export default function Services() {
  const [active, setActive] = useState(0);
  const [TeamMember, setTeamMember] = useState([]);
  const [oading, setLoading] = useState(true);

  // ✅ Fetch blogs from backend

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://back-end-for-xirfadsan.onrender.com/api/member/allNew");
        if (!response.ok) throw new Error("Failed to load services");
        const data = await response.json();
        setTeamMember(data);
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
      <section className="md:h-[250px] h-fitt md:mb-[180px] mb:[50px]  relative bg-primary py-16 md:px-10 px-8 overflow-visible">
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
        {/* <div className="relative mt-10 flex justify-center animate-slide-up">
          <div className="w-full max-w-5xl rounded-xl overflow-hidden">
            <iframe
              className="w-full md:h-[550px] h-[300px]"
              // style={{ height: "550px" }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="HandGrid Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}
      </section>

      {/* Solution Section */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={Solution}
                alt="Professional handyman service"
                className="aspect-square rounded-2xl object-cover"
              />

            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Your Ultimate One-Stop Home Solution
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From leaky faucets to major renovations, we handle it with care. Our skilled team ensures every detail is addressed, giving you peace of mind.
              </p>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-xl  gap-x-8 gap-y-12 lg:max-w-none ">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="bg-background rounded-xl p-6 flex flex-col animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Complete Home Service Hub */}
      <section className="bg-muted/30 py-16 sm:py-32">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center px-6 md:px-10">
          {/* Left Side */}
          <div className="relative flex flex-col justify-center items-start">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 text-left">
              The Complete Home <br />Service Hub
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-left">
              From a dripping tap to a remodel, we’ve got you. Our crew{" "}
              <br className="hidden sm:block" />
              ensures every detail is attended to.
            </p>

            <div className="space-y-3 w-full max-w-xl">
              {items.map((item, index) => {
                const isActive = active === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActive(index)}
                    className={`p-4 sm:p-5 rounded-lg cursor-pointer transition border ${isActive
                      ? "bg-primary text-white border-transparent"
                      : "bg-gray-50 text-gray-900 border-gray-200"
                      }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <img
                        src={item.icon}
                        alt="icon"
                        className="w-6 h-6 sm:w-8 sm:h-8 object-cover"
                      />
                      <div className="flex-1 flex flex-col gap-2">
                        <h3
                          className={`font-semibold text-sm sm:text-base ${isActive ? "text-white" : "text-gray-900"
                            }`}
                        >
                          {item.title}
                        </h3>
                        {isActive && (
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Dynamic Image */}
          <div className="flex justify-center items-center">
            <div className="w-full md:max-w-[600px] bg-[#FFF6F4] rounded-2xl flex justify-center items-center p-4 sm:p-6 md:p-10">
              <img
                src={items[active].image}
                alt={items[active].title}
                className="w-full h-full md:h-[460px] rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introducing Our Skilled Exterminators Team */}
      <section className="bg-muted/30 py-16 ">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            Introducing Our Skilled <br /> Exterminators Team
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {TeamMember.map((member, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden "
              >
                {/* Background image */}
                <div
                  className="transition-transform duration-300 group-hover:scale-110 h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${'https://back-end-for-xirfadsan.onrender.com/api/member/image/'+member.id})` }}
                ></div>

                {/* Overlay info (hidden until hover) */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-left text-white font-semibold text-lg">
                        {member.name}
                      </h3>
                      <p className="text-gray-200 text-sm">{member.role}</p>
                    </div>
                    {member.linkedin_profile && (
                      <a
                        href={member.linkedin_profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-md text-blue-600 hover:bg-blue-50"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
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


