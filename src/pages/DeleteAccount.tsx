import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Shield, Download } from "lucide-react";
import handyman from "@/assets/handyman.png";

const reasons = [
  "No longer need home services",
  "Found alternative service provider",
  "Privacy concerns",
  "Account security issues",
  "Poor service experience",
  "Moving to unsupported area",
  "Other (please specify below)"
];

export default function DeleteAccount() {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [confirmText, setConfirmText] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // --- In a real app, you'd get user_id + email from auth context ---
  const user_id = email; // replace with real logged-in user id
  const user_email = email;

  const handleReasonChange = (reason: string, checked: boolean) => {
    if (checked) setSelectedReasons([...selectedReasons, reason]);
    else setSelectedReasons(selectedReasons.filter((r) => r !== reason));
  };

  const isDeleteEnabled =
    confirmText === "DELETE MY ACCOUNT" && isConfirmed && selectedReasons.length > 0 && email.trim() !== "";

  const getSomaliaTime = (): string => {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const somaliaTime = new Date(utc + 3 * 3600000); // UTC+3

    const pad = (n: number) => n.toString().padStart(2, '0');

    return `${somaliaTime.getFullYear()}-${pad(somaliaTime.getMonth() + 1)}-${pad(somaliaTime.getDate())} ` +
      `${pad(somaliaTime.getHours())}:${pad(somaliaTime.getMinutes())}:${pad(somaliaTime.getSeconds())}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const created_at = getSomaliaTime();

    setStatus("loading");
    setMessage("");

    const finalReason = selectedReasons.includes("Other (please specify below)")
      ? [...selectedReasons.filter((r) => r !== "Other (please specify below)"), otherReason].join(", ")
      : selectedReasons.join(", ");


    const body = {
      user_id,
      user_email,
      reason: finalReason,
      confirmation_text: confirmText,
      status: "Pending",
      processed_by: "null",
      processed_at: "null",
      created_at: created_at,
    };

    try {
      const response = await fetch("https://back-end-for-xirfadsan.onrender.com/api/account_delete/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details);
      }

      setStatus("success");
      setMessage("Your account deletion request was submitted successfully.");
      setSelectedReasons([]);
      setConfirmText("");
      setIsConfirmed(false);
      setFeedback("");
      setOtherReason("");
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Something went wrong while submitting the form.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
              Delete Account
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
              We're sorry to see you go. Please read the information below carefully before proceeding.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Alert className="mb-8 border-warning bg-warning/10">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <AlertDescription className="text-warning-foreground">
                <strong>Important:</strong> Account deletion is permanent and cannot be undone.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-x-3 text-xl">
                    <Shield className="h-5 w-5 text-primary" />
                    What Will Be Deleted
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Your profile, bookings, and preferences</li>
                    <li>• Saved payment and communication data</li>
                    <li>• Any stored media or uploaded files</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-x-3 text-xl">
                    <Download className="h-5 w-5 text-primary" />
                    What We Keep
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Financial & legal records (7 years)</li>
                    <li>• Warranty and service logs</li>
                    <li>• Anonymized analytics data</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Deletion Form */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Card className="bg-gradient-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Account Deletion Request</CardTitle>
                <CardDescription className="text-center">
                  Please complete this form to confirm your account deletion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Reasons */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">
                      Why are you deleting your account? (Select all that apply)
                    </Label>
                    <div className="space-y-3">
                      {reasons.map((reason) => (
                        <div key={reason} className="flex items-center space-x-2">
                          <Checkbox
                            id={reason}
                            checked={selectedReasons.includes(reason)}
                            onCheckedChange={(checked) => handleReasonChange(reason, checked as boolean)}
                          />
                          <Label htmlFor={reason} className="text-sm">
                            {reason}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedReasons.includes("Other (please specify below)") && (
                    <div className="space-y-2">
                      <Label htmlFor="otherReason">Please specify:</Label>
                      <Textarea
                        id="otherReason"
                        value={otherReason}
                        onChange={(e) => setOtherReason(e.target.value)}
                        placeholder="Tell us more..."
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="feedback">Additional feedback (optional)</Label>
                    <Textarea
                      id="feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Help us improve..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmText">Type "DELETE MY ACCOUNT" to confirm:</Label>
                    <Input
                      id="confirmText"
                      value={confirmText}
                      onChange={(e) => setConfirmText(e.target.value)}
                      placeholder="DELETE MY ACCOUNT"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="finalConfirm"
                      checked={isConfirmed}
                      onCheckedChange={(checked) => setIsConfirmed(checked as boolean)}
                    />
                    <Label htmlFor="finalConfirm" className="text-sm">
                      I understand this action is permanent and irreversible.
                    </Label>
                  </div>

                  {/* Status messages */}
                  {status === "success" && (
                    <p className="text-green-600 text-center">{message}</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 text-center">{message}</p>
                  )}

                  <div className="pt-6 border-t space-y-4">
                    <Button
                      type="submit"
                      variant="destructive"
                      size="lg"
                      className="w-full"
                      disabled={!isDeleteEnabled || status === "loading"}
                    >
                      {status === "loading" ? "Submitting..." : "Delete My Account Permanently"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={() => window.history.back()}
                    >
                      Cancel and Go Back
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Account deletion requests are processed within 30 days. You will receive
                    a confirmation email once completed.
                  </p>
                </form>
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
              <h2 className="text-3xl sm:text-4xl font-bold py-10 mb-2 md:mb-6 text-center md:text-left">
                Your Reliable Trusted <br /> Handyman is Just One <br /> Call Away!
              </h2>
              <div className="flex justify-center md:justify-start">
                <button className="px-6 py-3 bg-white text-[#FF5B22] font-semibold rounded-full shadow hover:bg-white/90 transition">
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