import Image from "next/image"
import Link from "next/link";

function CasePicture({ picture, link }) {
  return (
    <div className="w-full max-w-[581px] md:w-[40%] h-[493px] relative shadow-lg rounded-lg transition-transform duration-150 ease-in-out transform hover:scale-105">
      <Link href={link}>
        <Image 
          src={picture} 
          alt="case" 
          layout="fill"
          objectFit="contain"
        />
      </Link>
    </div>
  );
}

export default CasePicture