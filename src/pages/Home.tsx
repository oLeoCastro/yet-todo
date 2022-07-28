import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-zinc-500">
      <Header />
      <Main />
    </div>
  );
}
