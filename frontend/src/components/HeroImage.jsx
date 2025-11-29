// components/HeroImage.jsx
import hero1 from "../assets/Screenshot.png";

export default function HeroImage() {
  return (
    <section className="w-full">
      <img
        src={hero1}
        alt="Subham Developers"
        className="w-full h-[170px] lg:h-auto"
      />
    </section>
  );
}
