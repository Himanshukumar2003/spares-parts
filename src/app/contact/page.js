"use client";

import { Button } from "@/components/ui/button";
import BreadcrumbHeader from "@/componets/breadcrumbHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaTwitter, FaInstagram, FaWhatsapp, FaBehance } from "react-icons/fa";

export default function ContactSection() {
  return (
    <>
      <BreadcrumbHeader title={"Contact us"}></BreadcrumbHeader>
      <section className="w-full bg-white section">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
          {/* Left: Contact Details */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold italic mb-6">
              CONTACT DETAILS
            </h2>

            <div className="space-y-6 text-lg text-gray-800">
              <div>
                <p className="font-bold uppercase text-black">Address</p>
                <p>8331 Indian Spring Street Ames, IA 30010</p>
                <hr className="my-2 border-gray-300" />
              </div>

              <div>
                <p className="font-bold uppercase text-black">Phone</p>
                <p>330-239-0506</p>
                <hr className="my-2 border-gray-300" />
              </div>

              <div>
                <p className="font-bold uppercase text-black">Email</p>
                <p>support@bellet.com</p>
                <hr className="my-2 border-gray-300" />
              </div>

              <div>
                <p className="font-bold uppercase text-black">Opening Time</p>
                <p>8:00Am – 10:00Pm, Sunday Close</p>
                <hr className="my-2 border-gray-300" />
              </div>

              <div>
                <p className="font-bold uppercase text-black mb-2">
                  Follow Us On
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="bg-[var(--accent)] text-white p-2 rounded"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--accent)] text-white p-2 rounded"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--accent)] text-white p-2 rounded"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <Button type="submit" className="btn">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      {/* Map */}
      <div className="w-full aspect-video  overflow-hidden  max-h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0789380094553!2d144.9560543153164!3d-37.817209979751716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d505a74eacd%3A0x1dbd0fb7c9f4e1e!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1691317598451!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
