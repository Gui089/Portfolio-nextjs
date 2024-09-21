import { Banner } from "./Components/Banner/Banner";
import { Info } from "./Components/Info/Info";
import { Section } from "./Components/Section/Section";


export default function Home() {
  return (
    <div className="bg-background">

      <div className="flex flex-col sm:flex-row items-center justify-between p-9 sm:p-5">
        <Info />
        <Banner />
      </div>

      <div>
        <Section />
      </div>
    </div>
  );
}
