import * as motion from "motion/react-client";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div className="card shadow-lg p-4" whileHover={{ y: -10 }}>
      <Icon className="text-2xl" />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}