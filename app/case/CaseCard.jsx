import Image from "next/image";
import Link from "next/link";

function CaseCard({ title, description, imageUrl, linkUrl }) {
  return (
    <Link
      href={linkUrl}
      className="bg-white shadow-lg rounded-lg p-6 duration-300 ease-in-out transform hover:scale-105"
    >
      <Image
        src={imageUrl}
        width={500}
        height={500}
        alt={`事例 ${title} の画像`}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </Link>
  );
}

export default CaseCard;
