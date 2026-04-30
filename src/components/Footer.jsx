import React from "react";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Grid */}
        <div className=" lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold">
              Qurbani<span className="text-black">HAT</span>
            </h2>

            <p className="mt-4 text-green-100 leading-relaxed">
              A trusted platform to explore and book healthy animals for
              Qurbani. Simple, fast, and reliable for everyone.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

            <div className="space-y-3 text-green-100">
              <p className="flex items-center gap-2">
                <IoLocationOutline />
                Mirpur-2, Dhaka, Bangladesh
              </p>

              <p className="flex items-center gap-2">
                <IoIosCall />
                +880 1234-567890
              </p>

              <p className="flex items-center gap-2">
                <MdEmail />
                support@qurbanihat.com
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end ">
            <div>
              <h3 className="text-lg font-semibold mb-4 md:text-center">
                Follow Us
              </h3>

              <div className="flex flex-row gap-2 text-green-100">
                <a className="hover:text-white transition">Facebook</a>
                <a className="hover:text-white transition">Instagram</a>
                <a className="hover:text-white transition">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-600 mt-10 pt-6 text-center text-green-100 text-sm">
          © {new Date().getFullYear()} QurbaniHat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
