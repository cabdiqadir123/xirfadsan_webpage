import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";
import handyman from "@/assets/handyman.png";

interface PrivacySection {
  id: string;
  section_title: string;
  section_content: string;
  section_order: number;
  last_updated: string;
  effective_date: string;
  created_at: string;
  updated_at: string;
}

const icons = [FileText, Users, Shield, Lock, Eye, Mail];

export default function Privacy() {
  const [sections, setSections] = useState<PrivacySection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrivacy = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://back-end-for-xirfadsan.onrender.com/api/privacy/all");
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        setSections(data);
      } catch (err) {
        console.error("❌ Error fetching privacy policy:", err);
        setError("Failed to load privacy policy.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacy();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading Privacy Policy...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl animate-fade-in">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90 animate-slide-up">
              Your privacy is important to us. This policy explains how we collect, use,
              and protect your personal information when you use HomeServe Pro.
            </p>
            {sections.length > 0 && (
              <div className="mt-8 flex items-center justify-center gap-x-4 text-sm text-primary-foreground/90">
                <span>Last updated: {sections[0].last_updated}</span>
                <span>•</span>
                <span>Effective: {sections[0].effective_date}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-3 text-2xl">
                  <Shield className="h-6 w-6 text-primary" />
                  Privacy at a Glance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What We Collect</h3>
                    <p className="text-sm text-muted-foreground">
                      Only information necessary to provide our services: contact details,
                      service requests, and payment information.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How We Use It</h3>
                    <p className="text-sm text-muted-foreground">
                      To connect you with service providers, process payments, and improve
                      our platform. We never sell your data.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Your Control</h3>
                    <p className="text-sm text-muted-foreground">
                      You can access, update, or delete your information at any time.
                      Opt out of communications easily.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Industry-standard encryption, secure payment processing, and regular
                      security audits protect your data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            {sections.map((section, index) => {
              const Icon = icons[index % icons.length];
              const lines = section.section_content
                .split("\n")
                .filter((line) => line.trim() !== "");

              return (
                <Card
                  key={section.id}
                  className="bg-gradient-card border-0 shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-x-3 text-xl">
                      <Icon className="h-5 w-5 text-primary" />
                      {section.section_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {lines.map((line, i) => {
                        const [beforeColon, afterColon] = line.split(/:(.+)/); // split at first :
                        const hasColon = line.includes(":");

                        return (
                          <li key={i} className="text-muted-foreground leading-7">
                            {hasColon ? (
                              <>
                                <span className="font-bold text-white">
                                  {beforeColon}:
                                </span>{" "}
                                {afterColon?.trim()}
                              </>
                            ) : (
                              <span>• {line}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-7">
                  We may update this privacy policy from time to time to reflect changes in our
                  practices or legal requirements. When we make changes:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• We will post the updated policy on this page with a new "Last updated" date</li>
                  <li>• For significant changes, we will notify you by email or through our platform</li>
                  <li>• We encourage you to review this policy periodically</li>
                  <li>• Continued use of our services after changes constitutes acceptance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 flex items-end overflow-hidden pt-[20px] md:pt-[240px] pb-[50px] h-fit">
        <div className="flex items-end w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative w-full bg-[#FF5B22] rounded-lg flex flex-col md:flex-row items-end justify-between px-6 md:px-12 py-22 md:py-24">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold py-10 mb-6 text-center md:text-left">
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