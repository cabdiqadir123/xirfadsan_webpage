import React, { useState, useEffect } from "react";
import { CheckCircle, Calendar } from "lucide-react";
import handyman from "@/assets/handyman.png";
import pestcontrol from "@/assets/pest-control.png";
import { Card } from "@/components/ui/card";

export default function Service() {
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl animate-fade-in">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90 animate-slide-up">
              Discover our handyman services to maintain your home. From repairs to renovations, we have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {loading && (
            <p className="text-center text-gray-600 text-lg">Loading services...</p>
          )}
          {error && (
            <p className="text-center text-red-500 text-lg">Error: {error}</p>
          )}

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
                    style={{ backgroundImage: `url(${'https://back-end-for-xirfadsan.onrender.com/api/services/secondry_image/'+service.service_id})` }}
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
        </div>
      </section>

      {/* How HandGrid Works Section */}
      <section className="bg-muted/30 py-16">
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
                Building trust with clients by being transparent, honest, and reliable in all.
              </p>
            </Card>
            <Card className="text-center p-8 border-[1.5px]">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Select Your Date</h3>
              <p className="text-muted-foreground">
                Choose a convenient time and date for our professional team to visit.
              </p>
            </Card>
            <Card className="text-center p-8 border-[1.5px]">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Confirm and Relax</h3>
              <p className="text-muted-foreground">
                Sit back and relax while our trusted experts take care of your home.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Request a Free Pest Control Quote */}
    
      {/* CTA Section */}
      <section className="bg-muted/30 flex items-end overflow-hidden pt-[20px] md:pt-[240px] pb-[50px] h-fit">
        <div className="flex items-end w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative w-full bg-[#FF5B22] rounded-lg flex flex-col md:flex-row items-end justify-between px-6 md:px-12 py-22 md:py-24">
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

            <div className="md:absolute mt-10 md:mt-0 bottom-0 right-[20px] md:right-[20px] z-20">
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