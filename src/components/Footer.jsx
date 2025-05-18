import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between mt-5">
      <p style={{ fontWeight: 'bolder' }}>&copy; 2025 SkyHavenMC</p>

      <div id="socials" className="flex gap-8">
        <a href="https://facebook.com/skyhavenmc" target='_blank'><FaFacebook/></a>
        <a href="https://x.com/skyhavenmc" target='_blank'><FaSquareXTwitter/></a>
        <a href="https://instagram.com/skyhavenmc" target='_blank'><FaInstagram/></a>
      </div>
    </footer>
  );
}