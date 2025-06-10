import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "./container";
import Logo from "./header/logo";

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground mt-20 border-t border-gray-200 dark:border-gray-800">
      <Container className="grid max-w-7xl grid-cols-1 gap-8 py-10 md:grid-cols-3">
        <div>
          <Logo size="sm" className="mb-3" />
          <p className="text-sm">
            Helping you care for your plants effortlessly. Track watering
            schedules, monitor plant health, and grow your green space.
          </p>
        </div>
        {/* Navigation Links */}
        <div>
          <h4 className="text-primary mb-3 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="/plants" className="hover:text-primary">
                My Plants
              </a>
            </li>
            <li>
              <a href="/add" className="hover:text-primary">
                Add New Plant
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-primary mb-3 font-semibold">Connect With Us</h4>
          <div className="flex items-center space-x-4 text-xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:contact@plantcare.com"
              className="hover:text-primary"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="mt-3 text-xs">contact@plantcare.com</p>
        </div>
      </Container>

      <div className="border-t py-4 text-center text-xs">
        &copy; {new Date().getFullYear()} PlantCare Tracker. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
