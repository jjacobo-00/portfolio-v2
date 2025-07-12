import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const email = 'jacobojhay13@gmail.com';

const Footer = () => {
  return (
    <footer className="w-full border border-gray-200 px-4 sm:px-6 md:px-16 py-10 text-gray-700 font-mono transition-colors">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Contact Info */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-base font-semibold text-[#1261A0]">
            Contact Information
          </h3>
          <p>
            Email:{' '}
            <a href={`mailto:${email}`} className="hover:text-[#1261A0]">
              {email}
            </a>
          </p>
          <p>Location: Olongapo City, Zambales, Philippines</p>
        </div>

        {/* Social Links */}
        <div className="text-center space-y-2">
          <h3 className="text-base font-semibold text-[#1261A0]">
            Connect with me
          </h3>
          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/jjacobo-00"
              target="_blank"
              rel="noopener noreferrer"
              className="round-icon w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#1261A0]/10 hover:text-[#1261A0] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jefferson-jacobo-b5b92a259/"
              target="_blank"
              rel="noopener noreferrer"
              className="round-icon w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#1261A0]/10 hover:text-[#1261A0] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="round-icon w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-[#1261A0]/10 hover:text-[#1261A0] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Branding / Copyright */}
        <div className="text-center md:text-right space-y-2">
          <h3 className="text-base font-semibold text-[#1261A0]">
            Jefferson Jacobo
          </h3>
          <p>&copy; {new Date().getFullYear()} | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
