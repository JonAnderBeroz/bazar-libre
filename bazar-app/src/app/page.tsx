import SearchForm from "@/components/search-form";
import Logo from "@/icons/logo";

export default function Home() {
  return (
    <section className="text-center place-self-center">
      <Logo />
      <h1 className="text-3xl font-semibold mb-4">Bazar Online</h1>
      <SearchForm showButton={true} />
    </section>
  );
}
