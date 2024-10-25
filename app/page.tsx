import Button from "./components/ui/button";

export default function Home() {
  return (
    <main className="text-primary">
      <div className="grid grid-cols-[30%_minmax(0,_1fr)] h-screen">
        <div className="bg-background_secondary"></div>
        <div className="bg-background-image bg-repeat bg-contain">
          <p>
            <Button variant="ghost">
              Button
            </Button>
          </p>
        </div>
      </div>
    </main>
  );
}
