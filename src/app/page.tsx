import Container from "@/components/Container";
import HomeAbout from "@/components/Home/HomeAbout";
import MainSection from "@/components/Home/MainSection";
import NeedAssistance from "@/components/Home/NeedAssistance";
import Slider from "@/components/Home/Slider";
import Videos from "@/components/Home/Videos";

export default function Home() {
  return (
    <>
      <MainSection />
      <Container>
        <div className="py-[40px]">
          <Slider />
        </div>
      </Container>
      <Videos />
      <HomeAbout />
      <NeedAssistance />
    </>
  );
}
