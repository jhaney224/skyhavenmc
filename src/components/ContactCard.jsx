import * as motion from "motion/react-client";

export default function ContactCard({ icon: Icon, label, link, linkText }) {
  return (
    <motion.div className="card shadow-lg p-4" whileHover={{ y: -10 }}>
      <Icon />
      <h4>{label}</h4>
      <a href={link}>{linkText}</a>
    </motion.div>
  );
}
