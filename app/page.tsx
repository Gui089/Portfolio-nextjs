import { Banner } from "./Components/Banner/Banner";
import { Info } from "./Components/Info/Info";
import { NavBar } from "./Components/NavBar/NavBar";


export default function Home() {
  return (
    <div className="bg-background">
      <NavBar />

      <div className="flex items-center justify-between p-3">
        <Info />
        <Banner />
      </div>

    </div>
  );
}
