import Header from "@/components/Header";
import Page2 from "@/components/Home/Page2";
import Page3 from "@/components/Home/Page3";
import Page4 from "@/components/Home/Page4";
import HomeSec from "@/components/HomeSec";

export default function Home() {
  return (
    <div className="bg-[#FBFDFF] min-h-screen">
      <Header />
      <HomeSec />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
}
