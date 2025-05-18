import { FaDiscord } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { MdEmail, MdCastle, MdCurrencyExchange } from "react-icons/md";
import { LuSwords } from "react-icons/lu";
import * as motion from "motion/react-client";
import './assets/index.css';
import Navbar from './components/Navbar';
import TeamMemberCard from "./components/TeamMemberCard";
import GalleryItem from "./components/GalleryItem";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import FeatureCard from "./components/FeatureCard";
import PlayNowButton from "./components/PlayButtonButton";

// The page of the website itself.
function App() {
  return (
    <>
      <Navbar/>

      <main className="rubik-font pt-20">
        {/* Hero Section */}
        <section className='animate-fade-up'>
          <h1>Welcome to SkyHavenMC</h1>
          <h2>A fantasy world awaits...</h2>

          <PlayNowButton/>
          <button className='button'>
            <a href="https://discord.gg/skyhavenmc">Join Our Discord</a>
          </button>
        </section>

        {/* Why Play On SkyHavenMC? */}
        <motion.section id='features' initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true, amount: 0.3 }}>
          <h2>Why Play on SkyHavenMC?</h2>

          <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={MdCastle} title={"Custom Sky Islands"} 
            description={"Explore a world suspended in the sky with hand-crafted biomes, secrets, and dungeons."}/>

            <FeatureCard icon={LuSwords} title={"Unique RPG Mechanics"} 
            description={"Level up your skills, unlock special perks, and shape your own path through an evolving storyline."}/>

            <FeatureCard icon={MdCurrencyExchange} title={"Player-Driven Economy"} 
            description={"Trade, build empires, and create your own shops in a thriving economy system."}/>

            <FeatureCard icon={FaHandshake} title={"Tight-Knit Community"} 
            description={"We value kindness, creativity, and collaboration. Whether you're solo or with friends, you’ll feel right at home."}/>
          </div>
        </motion.section>

        {/* Meet The Team */}
        <section id="meet-the-team">
          <h2>Meet The Team</h2>

          <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 lg:grid-cols-3">
            <TeamMemberCard name={"Arin"} role={"Founder/Developer"} avatar={"https://minotar.net/helm/Arin/100.png"} 
            bio={"Visionary builder of SkyHaven’s systems and lore. Responsible for plugin magic and custom mechanics."}/>

            <TeamMemberCard name={"Lexi"} role={"Community Manager"} avatar={"https://minotar.net/helm/Lexi/100.png"} 
            bio={"Your go-to for events, support, and making sure every player feels heard and valued."}/>

            <TeamMemberCard name={"Kai"} role={"Builder"} avatar={"https://minotar.net/helm/Kai/100.png"} 
            bio={"Architect of the skies. Designs our floating isles, cities, and dungeons."}/>

            <TeamMemberCard name={"Mike"} role={"Resource Pack & Art Designer"} avatar={"https://minotar.net/helm/Mike/100.png"} 
            bio={"Handles all visuals, textures, and custom art for our immersive experience."}/>

            <TeamMemberCard name={"Blitz"} role={"Moderator"} avatar={"https://minotar.net/helm/Blitz/100.png"} 
            bio={"Keeps the peace and ensures rules are followed with fairness and respect."}/>
          </div>
        </section>

        {/* Server Gallery */}
        <section id="gallery">
          <h2>Server Gallery</h2>

          <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 lg:grid-cols-3">
            <GalleryItem src={"/arkenfallCitadel.png"} alt={"The Citadel of Arkenfall"} 
            caption={"A towering stronghold resting above the clouds, surrounded by elemental sky bridges."}/>

            <GalleryItem src={"/mystwoodIsles.png"} alt={"Mystwood Isles"} 
            caption={"Enchanted biomes filled with magical wildlife, mysterious ruins, and hidden treasure."}/>

            <GalleryItem src={"/eventArena.png"} alt={"Event Arena"} 
            caption={"A gravity-defying battleground where PvP events and challenges take place."}/>
          </div>
        </section>

        {/* Get In Touch */}
        <section id="contact">
          <h2>Get in Touch</h2>

          <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
            <ContactCard icon={FaDiscord} label={"Discord"} link={"https://discord.gg/skyhavenmc"} linkText={"https://discord.gg/skyhavenmc"}/>
            <ContactCard icon={MdEmail} label={"Email"} link={"mailto:contact@skyhavenmc.com"} linkText={"contact@skyhavenmc.com"}/>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
}

export default App
