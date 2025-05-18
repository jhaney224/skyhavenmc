import * as motion from "motion/react-client";

export default function TeamMemberCard({ name, role, bio, avatar }) {
  return (
    <motion.div className="card shadow-lg p-4" whileHover={{ y: -10 }}>
      <img src={avatar} alt={`${name} Avatar`} />
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{bio}</p>
    </motion.div>
  );
}