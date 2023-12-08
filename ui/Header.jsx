import Link from "next/link";
import LinkButton from "./LinkButton";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <Link href="/">
        <h1 className="text-3xl font-bold text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">CivicTechWeb</h1>
      </Link>
      <div className="flex gap-4">
        <LinkButton text="シビックテックについて" href="/about" />
        <LinkButton text="事例" href="/case" />
      </div>
    </header>
  );
}
