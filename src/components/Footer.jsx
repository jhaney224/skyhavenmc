import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {  
  return (
    <footer className="flex items-center justify-between mt-5">
      <p style={{ fontWeight: 'bolder' }}>&copy; {new Date().getFullYear()} SkyHavenMC</p>

      <div id="socials" className="flex gap-8">
        <a href="https://facebook.com/skyhavenmc" target="_blank" rel="noreferrer"><FaFacebook/></a>
        <a href="https://x.com/skyhavenmc" target="_blank" rel="noreferrer"><FaSquareXTwitter/></a>
        <a href="https://instagram.com/skyhavenmc" target="_blank" rel="noreferrer"><FaInstagram/></a>
      </div>
    </footer>
  );
}