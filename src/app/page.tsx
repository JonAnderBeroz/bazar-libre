import SearchForm from "@/components/search-form";

export default function Home() {
  return (
    <section className="text-center place-self-center">
      <h1 className="text-3xl font-semibold mb-4">Bazar Online</h1>
      <SearchForm showButton={true} />
    </section>
  );
}
