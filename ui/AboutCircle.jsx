import { twMerge } from 'tailwind-merge'

export default function AboutCircle({ title, text, color }) {
  return (
    <div className={twMerge(
      "h-[350px] w-[350px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] rounded-full flex flex-col items-center justify-center p-8 text-center shadow-xl duration-300 ease-in-out transform hover:scale-105",
      color
    )}>
      <h4 className=" text-5xl drop-shadow-3xl font-bold text-white mb-4">{title}</h4>
      <p className="text-white drop-shadow-2xl font-normal text-3xl md:text-base lg:text-lg">{text}</p>
    </div>
  );
}