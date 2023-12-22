"use client";
import Link from "next/link";
import LinkButton from "./LinkButton";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <Link href="/">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          CivicTechWeb
        </h1>
      </Link>
      <div className="hidden md:flex gap-4">
        <LinkButton
          text="シビックテックについて"
          href="/about"
          icon={<LibraryBooksOutlinedIcon />}
        />
        <LinkButton text="事例" href="/case" icon={<ComputerOutlinedIcon />} />
      </div>

      {/* ハンバーガーメニューアイコン */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuOutlinedIcon className="h-6 w-6" />
        </button>
      </div>

      {/* ナビゲーションメニュー */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-white shadow-lg p-4 z-50 md:hidden`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <CloseOutlinedIcon className="h-6 w-6" />
        </button>
        <div className="flex-col flex mt-10">
          <LinkButton
            text="シビックテックについて"
            href="/about"
            icon={<LibraryBooksOutlinedIcon />}
          />
          <LinkButton
            text="事例"
            href="/case"
            icon={<ComputerOutlinedIcon />}
          />
        </div>
      </div>
    </header>
  );
}
