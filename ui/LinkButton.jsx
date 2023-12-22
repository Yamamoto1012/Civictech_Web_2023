import Link from "next/link";

export default function LinkButton({ text, href, icon }) {
  return (
    <Link href={href}>
      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {<span className="mr-2">{icon}</span>}
        {text}
      </button>
    </Link>
  );
}
