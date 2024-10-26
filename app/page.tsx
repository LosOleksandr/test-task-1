import Welcome from "./components/welcome";

export default function Home() {
  return (
    <main className="text-primary">
      <div className="grid grid-cols-[30%_minmax(0,_1fr)] h-screen">
        <div className="bg-background_secondary"></div>
        <div className="flex justify-center items-center bg-background-image bg-repeat bg-contain">
          <Welcome />
        </div>
      </div>
    </main>
  );
}
