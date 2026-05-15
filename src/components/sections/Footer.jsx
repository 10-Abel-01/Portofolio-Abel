import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer" className="border-t border-border pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-14">
                    <div>
                        <h2 className="font-light text-xl font-semi-bold mb-4">Abel Saferyan</h2>
                        <p className="font-light text-gray-400 text-muted-foreground text-sm">
                            Partner teknologi terpercaya untuk bisnis Anda. Jangan ragu untuk menghubungi saya untuk kebutuhan pengembangan web dan mobile Anda. Saya siap membantu Anda mencapai tujuan bisnis dengan solusi teknologi terbaik.
                        </p>
                    </div>

                    <div>
                        <p className="font-light text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                            Social Media
                        </p>
                        <div className="flex gap-3">
                            {[
                                { href: "https://www.linkedin.com/in/abel-saferyan-03346120b", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
                                { href: "https://github.com/10-Abel-01/", icon: <FaGithub size={20} />, label: "GitHub" },
                                { href: "https://www.instagram.com/saferyan06", icon: <FaInstagram size={20} />, label: "Instagram" },
                                { href: "https://www.facebook.com/profile.php?id=100084011095830", icon: <FaFacebook size={20} />, label: "Facebook" },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    className="text-gray-400 font-light text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="font-light text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                            Contact
                        </p>
                        <ul className="space-y-3 text-gray-400 font-light">
                            <li className="flex items-start gap-2.5 text-muted-foreground text-sm">
                                <Mail size={15} className="mt-0.5 flex-shrink-0 text-primary/60" />
                                abel061001@gmail.com
                            </li>
                            <li className="flex items-start gap-2.5 text-muted-foreground text-sm">
                                <Phone size={15} className="mt-0.5 flex-shrink-0 text-primary/60" />
                                +62 859-730-5027
                            </li>
                            <li className="flex items-start gap-2.5 text-muted-foreground text-sm">
                                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-primary/60" />
                                Bekasi, Indonesia
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="text-center text-gray-500 text-sm border-t border-border pt-8">
                    &copy; 2026 Abel Saferyan. All rights reserved. Built with
                    <svg className="w-5 h-5 inline-block ml-1 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </div>
            </div>
        </footer>
    );
};

export default Footer;