// HeroContainer.js
import Image from "next/image";

export function HeroContainer() {
  return (
    <div className="relative h-40 md:h-64 w-full fadeIn">
      <Image
        src="/hero.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <h2 className="absolute [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ml-4 md:ml-9 text-2xl md:text-4xl font-semibold z-10 slideUp scaleUp">
        私たちの街、私たちの未来
      </h2>
    </div>
  );
}
