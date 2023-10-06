import Link from "next/link";

import Logo from "@/icons/logo";
import SearchBar from "./search-form";

export default function SearchContainer({children}: {children: React.JSX.Element}) {
  return (
    <section className="flex flex-col gap-10 max-w-6xl w-full items-center p-4">
      <header className="flex gap-2 items-center">
        <Link href="/" className="w-24 h-24 flex items-center">
          <Logo />
        </Link>
        <SearchBar />
      </header>
      {children}
    </section>
  );
}
