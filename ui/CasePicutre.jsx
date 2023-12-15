import Image from "next/image"

function CasePicture({picture}) {
  return (
    <div className="h-[493px] w-[581px] relative">
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