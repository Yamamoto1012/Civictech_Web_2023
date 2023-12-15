import Image from "next/image"

function CasePicture({picture}) {
  return (
    <div className="h-[493px] w-[581px] relative shadow-lg rounded-md">
      <Image 
        src={picture} 
        alt="case" 
        fill
        className="object-contain"
        />
    </div>
  )
}

export default CasePicture