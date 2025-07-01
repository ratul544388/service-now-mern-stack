import Title from "@/components/title";
import Banner from "./_components/banner";
import HowToWork from "./_components/how-to-work";
import PopularServices from "./_components/popular-services";
import Testimonials from "./_components/testimonials";
import Faq from "./_components/faq";

const Home = () => {
  return (
    <>
      <Title>Home</Title>
      <Banner/>
      <PopularServices/>
      <Testimonials/>
      <HowToWork/>
      <Faq/>
    </>
  );
}

export default Home