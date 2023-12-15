import { twMerge } from "tailwind-merge"

function CaseTitle ({ title, color }) {
  return (
    <div className=" h-24 w-auto flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold mb-2">{title}</h3>  
      <div className={twMerge(" h-2 w-96 rounded-3xl", color)}></div>
    </div>
  )
}

export default CaseTitle