import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";
import handyman from "@/assets/handyman.png";


const sections = [
  {
    id: "information-collection",
    title: "Information We Collect",
    icon: FileText,
    content: [
      "Personal information you provide when creating an account (name, email, phone number, address)",
      "Service requests and booking details",
      "Payment information (processed securely through encrypted payment processors)",
      "Communication records between you and our service providers",
      "Device information and usage data when you visit our website or use our app",
      "Location data when you enable location services for service booking"
    ]
  },
  {
    id: "information-use",
    title: "How We Use Your Information",
    icon: Users,
    content: [
      "To provide and improve our home service platform",
      "To match you with qualified service professionals in your area",
      "To process payments and manage your account",
      "To communicate with you about services, bookings, and updates",
      "To ensure the safety and security of our platform",
      "To analyze usage patterns and improve our services",
      "To comply with legal obligations and prevent fraud"
    ]
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    icon: Shield,
    content: [
      "With service professionals when you book a service (limited to necessary contact and job details)",
      "With payment processors to handle transactions securely",
      "With third-party service providers who help us operate our platform",
      "When required by law or to protect our rights and safety",
      "In connection with a business transfer or acquisition",
      "We never sell your personal information to third parties for marketing purposes"
    ]
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: Lock,
    content: [
      "We use industry-standard encryption to protect your data in transit and at rest",
      "Regular security audits and vulnerability assessments",
      "Secure payment processing through PCI-compliant providers",
      "Limited access to personal information on a need-to-know basis",
      "Regular employee training on data protection and privacy practices",
      "Incident response procedures in case of any security events"
    ]
  },
  {
    id: "your-rights",
    title: "Your Rights and Choices",
    icon: Eye,
    content: [
      "Access: Request a copy of the personal information we have about you",
      "Correction: Request correction of inaccurate or incomplete information",
      "Deletion: Request deletion of your personal information (subject to legal requirements)",
      "Portability: Request a copy of your data in a machine-readable format",
      "Opt-out: Unsubscribe from marketing communications at any time",
      "Account deletion: Close your account and delete associated data"
    ]
  },
  {
    id: "contact-privacy",
    title: "Privacy Contact Information",
    icon: Mail,
    content: [
      "For privacy-related questions or requests, contact us at:",
      "Email: privacy@homeservepro.com",
      "Phone: 1-800-HOME-PRO (press 3 for privacy inquiries)",
      "Mail: HomeServe Pro Privacy Team, 123 Business Ave, Suite 500, New York, NY 10001",
      "We will respond to all privacy requests within 30 days"
    ]
  }
];

export default function Privacy() {
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
            <div className="mt-8 flex items-center justify-center gap-x-4 text-sm text-primary-foreground/90">
              <span>Last updated: March 15, 2024</span>
              <span>•</span>
              <span>Effective: March 15, 2024</span>
            </div>
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
            {sections.map((section, index) => (
              <Card key={section.id} className="bg-gradient-card border-0 shadow-md animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-x-3 text-xl">
                    <section.icon className="h-5 w-5 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground leading-7">
                        {item.includes(':') ? (
                          <span>
                            <strong className="text-foreground">{item.split(':')[0]}:</strong>
                            {item.split(':').slice(1).join(':')}
                          </span>
                        ) : (
                          <span>• {item}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-7">
                  We retain your personal information only as long as necessary to provide our services
                  and comply with legal obligations:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• <strong className="text-foreground">Account Information:</strong> Retained while your account is active and for 3 years after closure</li>
                  <li>• <strong className="text-foreground">Service Records:</strong> Kept for 7 years for warranty and legal purposes</li>
                  <li>• <strong className="text-foreground">Payment Information:</strong> Processed data is not stored; transaction records kept for 7 years</li>
                  <li>• <strong className="text-foreground">Communication Records:</strong> Retained for 2 years for quality assurance</li>
                  <li>• <strong className="text-foreground">Marketing Data:</strong> Deleted immediately upon opting out</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* International Users */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="bg-gradient-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">International Users</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-7">
                  HomeServe Pro is based in the United States. If you are accessing our services
                  from outside the US, please note:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Your information may be transferred to and processed in the United States</li>
                  <li>• We comply with applicable international privacy laws, including GDPR for EU residents</li>
                  <li>• EU residents have additional rights under GDPR, including the right to data portability</li>
                  <li>• We use appropriate safeguards for international data transfers</li>
                  <li>• Contact our privacy team for region-specific privacy information</li>
                </ul>
              </CardContent>
            </Card>
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
      </section>


    </div>
  );
}