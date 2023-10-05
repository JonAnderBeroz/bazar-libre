import SearchBar from "./search-form";

export default function SearchContainer({children}: {children: React.JSX.Element}) {
  return (
    <section className="flex flex-col gap-10 max-w-6xl w-full items-center p-4 ">
      <header>
        <SearchBar />
      </header>
      {children}
    </section>
  );
}
