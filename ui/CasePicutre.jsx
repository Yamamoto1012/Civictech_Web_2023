import Image from "next/image"

function CasePicture({ picture }) {
  return (
    <div className="w-full max-w-[581px] md:w-[40%] h-[493px] relative shadow-lg rounded-md">
      <Image 
        src={picture} 
        alt="case" 
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}

export default CasePicture