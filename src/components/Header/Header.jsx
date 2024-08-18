import Navigator from "./Navigator/Navigator";
import Image from "./Image";
import Hero from "./Hero";

export default function Header() {
  return (
    <div className="bg-gradient-light">
      <Navigator />
      <p className="pt-10 text-green text-2xl font-bold">pelin</p>
      <Image />
      <Hero />
    </div>
  );
}
