import Hero from "../../components/Hero/hero";
import "./Home.css";
import Content from "../../components/Content/Content";
import Phones from "../../components/Phones/Phones";
import FormBlock from "../../components/FormBlock/FormBlock";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Phones />
        <Content />
        <FormBlock />
      </main>
    </>
  );
}

export default Home;
