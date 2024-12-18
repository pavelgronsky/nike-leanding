import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="max-container flex min-h-screen w-full flex-col justify-center gap-10 border-2 border-red-500 p-2 xl:flex-row">
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p>Our summer Collection</p>
        <h1>
          <span>The new Arrival </span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconUrl={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
