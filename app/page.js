import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Page2 from "@/components/Home/Page2";
import Page3 from "@/components/Home/Page3";
import Page4 from "@/components/Home/Page4";
import Page5 from "@/components/Home/Page5";
import Page6 from "@/components/Home/Page6";
import Page7 from "@/components/Home/Page7";
import HomeSec from "@/components/HomeSec";

export default function Home() {
  return (
    <div className="bg-[#FBFDFF] min-h-screen">
      <Header />
      <HomeSec />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Footer />
    </div>
  );
}
