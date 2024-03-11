import Contact from "@/components/contact/index";
import Experiments from "@/components/experients/index";
import Home from "@/components/home/index";
import Navbar from "@/components/navbar/index";
import Partner from "@/components/partner/index";
import Review from "@/components/review/index";
import VerticleRod from "@/components/shared/verticle-rod";

export default function page() {
  return (
    <div className="w-full">
      <Home />
      <VerticleRod />
      <Partner />
      <VerticleRod />
      <Experiments />
      <VerticleRod />
      <Review />
      <VerticleRod />
      <Contact />
    </div>
  );
}
