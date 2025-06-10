import Title from "@/components/title";
import Banner from "./_components/banner";
import HowToWork from "./_components/how-to-work";
import PopularServices from "./_components/popular-services";
import Testimonials from "./_components/testimonials";

const Home = () => {
  return (
    <>
      <Title>Home</Title>
      <Banner/>
      <PopularServices/>
      <Testimonials/>
      <HowToWork/>
    </>
  );
}

export default Home