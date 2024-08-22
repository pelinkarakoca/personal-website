import NavigatorContainer from "./Navigator/NavigatorContainer";
import Image from "./Image";
import Hero from "./Hero";

export default function Main() {
  return (
    <div className="bg-bgGradient">
      <NavigatorContainer />
      <div className="flex-col space-y-10 py-[3em] pl-[5em] pr-[8em]">
        <p className="pt-10 text-2xl font-bold text-customGreen">pelin</p>
        <div className="flex space-x-12">
          <Hero />
          <Image />
        </div>
      </div>
    </div>
  );
}
