import Link from "next/link";
import LinkButton from "./LinkButton";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <Link href="/">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">CivicTechWeb</h1>
      </Link>
      <div className="flex gap-2 md:gap-4">
        <LinkButton text="シビックテックについて" href="/about" icon={<LibraryBooksOutlinedIcon />}/>
        <LinkButton text="事例" href="/case" icon={<ComputerOutlinedIcon />} />
      </div>
    </header>
  );
}
