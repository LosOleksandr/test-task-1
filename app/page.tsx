import ChadLogo from "./components/icons/chadLogo";
import IconEye from "./components/icons/iconEye";
import IconEyeOff from "./components/icons/iconEyeOff";
import IconSuccess from "./components/icons/iconSuccess";

export default function Home() {
  return (
    <main className="text-primary">
      <div className="grid grid-cols-[30%_minmax(0,_1fr)] h-screen">
        <div className="bg-background_secondary"></div>
        <div className="bg-background-image bg-repeat bg-contain">
          <p>
            <ChadLogo />
            <IconEye />
            <IconEyeOff />
            <IconSuccess />
          </p>
        </div>
      </div>
    </main>
  );
}
