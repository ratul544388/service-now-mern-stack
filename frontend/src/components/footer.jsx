import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import Container from "./container";
import Logo from "./header/logo";

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground mt-20 border-t border-gray-200 dark:border-gray-800">
      <Container className="grid max-w-7xl grid-cols-1 gap-8 py-10 md:grid-cols-3">
        {/* Logo & Description */}
        <div>
          <Logo size="sm" className="mb-3" />
          <p className="text-sm">
            Simplifying service bookings for everyone. Discover providers,
            manage your appointments, and get things done effortlessly with
            ServiceNow.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-primary mb-3 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary">
                Browse Services
              </Link>
            </li>
            <li>
              <Link to="/my-bookings" className="hover:text-primary">
                My Bookings
              </Link>
            </li>
            <li>
              <Link to="/#" className="hover:text-primary">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-primary mb-3 font-semibold">Connect With Us</h4>
          <div className="flex items-center space-x-4 text-xl">
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="mailto:support@servicenow.com"
              className="hover:text-primary"
            >
              <FaEnvelope />
            </Link>
          </div>
          <p className="mt-3 text-xs">support@servicenow.com</p>
        </div>
      </Container>
      <div className="border-t py-4 text-center text-xs">
        &copy; {new Date().getFullYear()} ServiceNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
