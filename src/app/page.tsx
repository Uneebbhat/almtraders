import Container from "@/components/Container";
import HomeAbout from "@/components/Home/HomeAbout";
import MainSection from "@/components/Home/MainSection";
import NeedAssistance from "@/components/Home/NeedAssistance";
import SliderTwo from "@/components/Home/SliderTwo";

export default function Home() {
  return (
    <>
      <MainSection />
      <HomeAbout />
      <div className="py-[40px]">
        <Container>
          <h3 className="h3 md:h2 text-center mb-4">Our Featured Products</h3>
          <SliderTwo />
        </Container>
      </div>
      <NeedAssistance />
    </>
  );
}
