// HeroContainer.js
import Image from "next/image";

export function HeroContainer() {
  return (
    <div className="relative h-64 w-full fadeIn">
      <Image
        src="/hero.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="z-0" 
      />
      <h2 className="absolute drop-shadow-lg  top-1/2 left-1/5 transform -translate-x-1/2 -translate-y-1/2 text-white ml-9 text-4xl font-semibold z-10 slideUp scaleUp">
        私たちの街、私たちの未来
      </h2>
    </div>
  );
}
