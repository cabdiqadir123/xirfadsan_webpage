import { Link } from "react-router-dom";
import logo from "@/assets/Xirfadsan-logo.png";

export default function Footer() {
  return (
    <footer className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Grid Section */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Xirfadsan Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-foreground">
                Xirfadsan
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Window Replacement</li>
              <li>Interior Painting</li>
              <li>Flooring Installation</li>
              <li>Plumbing Repairs</li>
              <li>Landscaping Design</li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/Delete-Account" className="hover:text-foreground transition-colors">
                  Account Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-border pt-6">
          <div className="flex space-x-4 text-muted-foreground text-sm">
            <a href="https://facebook.com" target="_blank" className="hover:text-foreground">
              Facebook
            </a>
            <span>›</span>
            <a href="https://instagram.com" target="_blank" className="hover:text-foreground">
              Instagram
            </a>
            <span>›</span>
            <a href="https://threads.net" target="_blank" className="hover:text-foreground">
              Thread
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            All Rights Reserved © Xirfadsan - 2025
          </p>
        </div>
      </div>
    </footer>
  );
}




// import { NavLink } from "react-router-dom";
// import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

// const footerNavigation = {
//   services: [
//     { name: "Plumbing", },
//     { name: "Electrical", },
//     { name: "Cleaning",},
//     { name: "Handyman",  },
//   ],
//   company: [
//     { name: "About", href: "/about" },
//     { name: "Blog", href: "/blog" },
//     { name: "Contact", href: "/contact" },
//   ],
//   legal: [
//     { name: "Privacy Policy", href: "/privacy" },
//     { name: "Delete Account", href: "/delete-account" },
//   ],
//   social: [
//     {
//       name: "Facebook",
//       href: "#",
//       icon: Facebook,
//     },
//     {
//       name: "Instagram",
//       href: "#",
//       icon: Instagram,
//     },
//     {
//       name: "Twitter",
//       href: "#",
//       icon: Twitter,
//     },
//     {
//       name: "LinkedIn",
//       href: "#",
//       icon: Linkedin,
//     },
//   ],
// };

// export function Footer() {
//   return (
//     <footer className="bg-muted" aria-labelledby="footer-heading">
//       <h2 id="footer-heading" className="sr-only">
//         Footer
//       </h2>
//       <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
//         <div className="xl:grid xl:grid-cols-3 xl:gap-8">
//           <div className="space-y-8">
//             <div>
//               <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
//                 HomeServe Pro
//               </span>
//               <p className="mt-4 text-sm leading-6 text-muted-foreground">
//                 Professional on-demand home services you can trust. Available 24/7 for all your home maintenance needs.
//               </p>
//             </div>
//             <div className="space-y-3">
//               <div className="flex items-center gap-x-3 text-sm text-muted-foreground">
//                 <Phone className="h-4 w-4" />
//                 <span>1-800-HOME-PRO</span>
//               </div>
//               <div className="flex items-center gap-x-3 text-sm text-muted-foreground">
//                 <Mail className="h-4 w-4" />
//                 <span>contact@homeservepro.com</span>
//               </div>
//               <div className="flex items-center gap-x-3 text-sm text-muted-foreground">
//                 <MapPin className="h-4 w-4" />
//                 <span>Available Nationwide</span>
//               </div>
//             </div>
//             <div className="flex space-x-6">
//               {footerNavigation.social.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md p-1"
//                 >
//                   <span className="sr-only">{item.name}</span>
//                   <item.icon className="h-5 w-5" aria-hidden="true" />
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
//             <div className="md:grid md:grid-cols-2 md:gap-8">
//               <div>
//                 <h3 className="text-sm font-semibold leading-6 text-foreground">Services</h3>
//                 <ul role="list" className="mt-6 space-y-4">
//                   {footerNavigation.services.map((item) => (
//                     <li key={item.name}>
//                       <a
//                         href={item.href}
//                         className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
//                       >
//                         {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="mt-10 md:mt-0">
//                 <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
//                 <ul role="list" className="mt-6 space-y-4">
//                   {footerNavigation.company.map((item) => (
//                     <li key={item.name}>
//                       <NavLink
//                         to={item.href}
//                         className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
//                       >
//                         {item.name}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="md:grid md:grid-cols-2 md:gap-8">
//               <div>
//                 <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
//                 <ul role="list" className="mt-6 space-y-4">
//                   {footerNavigation.legal.map((item) => (
//                     <li key={item.name}>
//                       <NavLink
//                         to={item.href}
//                         className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-md"
//                       >
//                         {item.name}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
//           <p className="text-xs leading-5 text-muted-foreground text-center">
//             &copy; 2024 HomeServe Pro. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }