import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Star, Wrench, Zap, Sparkles, Users, Award, Calendar } from "lucide-react";
import handymanHero from "@/assets/handyman-hero.jpg";
import Solution from "@/assets/Solution.png";
import handyman from "@/assets/handyman.png";
import i1 from "@/assets/i1.png";
import i2 from "@/assets/i2.png";
import i3 from "@/assets/i3.png";
import b1 from "@/assets/b1.png";
import b2 from "@/assets/b2.png";
import b3 from "@/assets/b3.png";
import b4 from "@/assets/b4.png";
import b5 from "@/assets/b5.png";
import b6 from "@/assets/b6.png";
import bl1 from "@/assets/bl1.png";
import bl2 from "@/assets/bl2.png";
import bl3 from "@/assets/bl3.png";
import appImage from "@/assets/app-mockup.png";
import playIcon from "@/assets/playstore-icon.png";
import appleIcon from "@/assets/appstore-icon.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";






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

const highlights = [
  "Home repair experience.",
  "Licensed, insured, expert pros.",
  "Committed to quality.",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setIndex((prev) => (prev + itemsPerPage) % testimonial.length);
  };

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://back-end-for-xirfadsan.onrender.com/api/services/allNew");
        if (!response.ok) throw new Error("Failed to load services");
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const [blogs, setBlogs] = useState([]);
  const [bl_loading, setbl_Loading] = useState(true);

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
        setbl_Loading(false);
      }
    };

    fetchServices();
  }, []);


  const [testimonial, settestimonial] = useState([]);
  const [t_loading, sett_Loading] = useState(true);

  // ✅ Fetch blogs from backend

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://back-end-for-xirfadsan.onrender.com/api/testimonial/all");
        if (!response.ok) throw new Error("Failed to load services");
        const data = await response.json();
        settestimonial(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        sett_Loading(false);
      }
    };

    fetchServices();
  }, []);

  const currentTestimonials = testimonial.slice(index, index + itemsPerPage);


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-10 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={handymanHero}
            alt="Professional handyman service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight ">
                Get Fastest
                <br />
                Handyman Service
                <br />
                <span className="text-white/90">in Somalia.</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg">
                From leaky faucets to full renovations, we handle it all with expertise and care. Your home is in good hands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-semibold">
                    Call us: +252 614057904
                  </Button>
                </Link>
                <Link to="/blog" className="hover:text-foreground transition-colors">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-foreground backdrop-blur-sm">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-orange border-2 border-white flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-success border-2 border-white flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-white">
                  <p className="text-sm font-medium">Trusted by 46,250+</p>
                  <p className="text-xs text-white/80">Marketers & Complains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >


      {/* Benefits Section */}
      < section className="py-16 bg-muted/30" >
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
      </section >

      {/* Solution Section */}
      < section className="bg-muted/30 py-24 sm:py-32" >
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
            {/* <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                <Wrench className="h-24 w-24 text-muted-foreground" />
              </div>
            </div> */}
          </div>
        </div>
      </section >

      {/* Stats Section */}
      < section className="bg-muted/30 py-16" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-start">
            {/* Left Column */}
            <div className="w-full lg:w-auto">
              {/* <h2 className="text-3xl font-bold text-foreground mb-4">
                <span className="block lg:block">Our track record</span>
                <span className="block lg:block sm:inline">speaks for itself</span>
              </h2> */}
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our track record
                <span className="block lg:inline"> speaks for itself</span>
              </h2>

            </div>

            {/* Right Column */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="w-full text-center bg-background rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-foreground mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div className="w-full text-center bg-background rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-foreground mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="w-full text-center bg-background rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-foreground mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Ratings</div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Customer Satisfaction Section */}
      {/* < section className="bg-muted/30 py-16" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center" style={{ backgroundColor: '#FDD867' }}>
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Customer Satisfaction
                <br />
                is Our Priority
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span className="text-black">Professional and experienced team</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span className="text-black">Quality materials and tools</span>
                </div>
              </div>
              <Link to="/service" className="hover:text-foreground transition-colors">
                <Button className="bg-orange hover:bg-red-700 text-white border-0 rounded-full">
                  Explore Our Services
                </Button>
              </Link>
            </div>
            <div className="relative group">
              <div className="aspect-square rounded-2xl  bg-white/10 relative">
                <img
                  src={handymanHero}
                  alt="Professional handyman working"
                  className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:rotate-3"
                />
                <div className="absolute -top-4 -right-4 w-[150px] h-[150px] rounded-xl overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 group-hover:-rotate-6">
                  <img
                    src={handymanHero}
                    alt="Detail work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 group-hover:rotate-12">
                  <img
                    src={handymanHero}
                    alt="Tool detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section > */}

      {/* Services Grid Section */}
      < section className="py-16 bg-muted/30" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Handyman Services</h2>
          </div>
          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="h-[346px] w-full relative aspect-video rounded-lg overflow-hidden group hover:shadow-lg"
                >
                  {/* Zoom effect on hover for background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${'https://back-end-for-xirfadsan.onrender.com/api/services/secondry_image/' + service.service_id})` }}
                  ></div>

                  {/* Content card */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-muted w-[90%] p-6 rounded-lg flex flex-col justify-end transition-colors duration-300 group-hover:bg-[#FF4B01]">
                    <h3 className="font-semibold text-mute mb-2 transition-colors duration-300 group-hover:text-white">
                      {service.name}
                    </h3>
                    <p className="text-sm text-mute/30 transition-colors duration-300 group-hover:text-white">
                      {service.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center">
            <Link to="/service" className="hover:text-foreground transition-colors">
              <Button className="rounded-full px-5 bg-orange hover:bg-secondary text-white">Load More</Button>
            </Link>
          </div>
        </div>
      </section >

      {/* How HandGrid Works Section */}
      < section className="bg-muted/30 py-16" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How HandGrid works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-[1.5px]">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-red-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Pick Your Service</h3>
              <p className="text-muted-foreground">
                Building trust with clients by being
                transparent, honest, and reliable in
                all
              </p>
            </Card>
            <Card className="text-center p-8 border-[1.5px]">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Select Your Date</h3>
              <p className="text-muted-foreground">
                Building trust with clients by being
                transparent, honest, and reliable in
                all
              </p>
            </Card>
            <Card className="text-center p-8 border-[1.5]">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Confirm and Relax</h3>
              <p className="text-muted-foreground">
                Building trust with clients by being
                transparent, honest, and reliable in
                all
              </p>
            </Card>
          </div>
        </div>
      </section >


      {/* Testimonials Section */}
      < section className="bg-muted/30 py-24 sm:py-32 overflow-hidden" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Customer Satisfaction is Our Priority
            </h2>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
              >
                {currentTestimonials.map((t, i) => (
                  <div
                    key={i}
                    className="bg-background rounded-xl shadow-md p-8 flex flex-col justify-between"
                  >
                    <div className="mb-4">
                      <img
                        src="src/assets/Quatos.png"
                        alt="quote"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {t.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-6">
                        {t.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-x-3">
                      <img
                        src={t.image}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">
                          {t.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-10 gap-3">
            <button
              onClick={nextSlide}
              className="w-3 h-3 bg-gray-400 rounded-full hover:bg-orange-500 transition"
            ></button>
            <button
              onClick={nextSlide}
              className="w-3 h-3 bg-gray-300 rounded-full hover:bg-orange-400 transition"
            ></button>
            <button
              onClick={nextSlide}
              className="w-3 h-3 bg-gray-300 rounded-full hover:bg-orange-300 transition"
            ></button>
          </div>
        </div>
      </section >


      {/* Blog Section */}
      < section className="py-16 bg-muted/30" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest from our blog</h2>
          </div>

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
                      <Link to={`/blog/${blog.id}`} className="hover:text-foreground transition-colors">
                        <span className="text-[#0D0100] hover:text-[#FF4B01] cursor-pointer">
                          Learn More
                        </span>
                      </Link>
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

          <div className="text-center">
            <Button className=" bg-orange hover:bg-secondary text-white rounded-full">
              Load More
            </Button>
          </div>
        </div>
      </section >


      {/* Download our application Section */}
      < section className="relative overflow-hidden bg-background py-16 md:py-24 flex flex-col items-center text-center px-4 sm:px-8 md:px-16" >
        {/* Text Section */}
        < div className="max-w-2xl" >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Simplify Your <span className="text-primary">Home Services</span> <br className="hidden sm:block" />
            with the Xirfadsan App
          </h1>

          <p className="text-muted-foreground mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Book trusted professionals for cleaning, painting, air conditioner installation, and more —
            all from your phone in just a few taps.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.xirfadsan.service"
              className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full 
                   hover:scale-105 transition-transform duration-200 w-full sm:w-auto"
            >
              <img src={playIcon} alt="Play Store" width={25} height={25} />
              <span className="text-sm font-medium">Google Play</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full 
                   hover:scale-105 transition-transform duration-200 w-full sm:w-auto"
            >
              <img src={appleIcon} alt="App Store" width={25} height={25} />
              <span className="text-sm font-medium">App Store</span>
            </a>
          </div>
        </div >
      </section >


      {/* CTA Section */}
      < section className="bg-muted/30 flex items-end overflow-hidden pt-[20px] md:pt-[240px]  pb-[50px] h-fit" >
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
                <button className="px-6 py-3 bg-white text-[#FF5B22] font-semibold rounded-full shadow hover:bg-white/90 transition">
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
      </section >



    </div >
  );
}