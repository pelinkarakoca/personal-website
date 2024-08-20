import NavigatorContainer from "./Navigator/NavigatorContainer";
import Image from "./Image";
import Hero from "./Hero";

export default function Main() {
  return (
    <div className="bg-bgGradient">
      <NavigatorContainer />
      <p className="pt-10 text-customGreen text-2xl font-bold">pelin</p>
      <Image />
      <Hero />
    </div>
  );
}
