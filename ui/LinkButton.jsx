import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Link from 'next/link';

export default function LinkButton({ text, href }) {
  return (
    <Link href={href}>
      <button className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
        <LibraryBooksOutlinedIcon className="text-gray-500 mr-2"/>
        {text}
      </button>
    </Link>
  );
}