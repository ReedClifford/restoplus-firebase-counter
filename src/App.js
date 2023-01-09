import { useEffect, useState } from "react";
import { BiReset } from "react-icons/bi";
import { FiMinus } from "react-icons/fi";
import { IoAddSharp, IoLogoFirebase } from "react-icons/io5";
import Button from "./components/Buttons";
import Counter from "./components/Counter";
import {
  decrementValue,
  getCurrentCountData,
  incrementValue,
  resetValue,
} from "./utilities/firebaseUtils";

const App = () => {
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      const { currentCount } = await getCurrentCountData();
      setCount(currentCount);
      setIsLoading(!isLoading);
      console.log(count);
    };
    fetchedData();
  }, [count]);

  const decrementCountValue = async () => {
    const updatedValue = await decrementValue();
    setCount(updatedValue);
  };
  const incrementCountValue = async () => {
    const updatedValue = await incrementValue();
    setCount(updatedValue);
  };
  const resetedCountValue = async () => {
    const updatedValue = await resetValue();
    setCount(updatedValue);
  };

  return (
    <section className="main-container">
      <div className="counter-container">
        <h4 className="header">
          FireBase Counter <IoLogoFirebase className="text-2xl" />
        </h4>
        <Counter currentCount={count} isLoading={isLoading} />
        <div>
          <Button className="buttons " onClick={() => decrementCountValue()}>
            <FiMinus />
          </Button>
          <Button className="buttons " onClick={() => resetedCountValue()}>
            <BiReset />
          </Button>
          <Button className="buttons " onClick={() => incrementCountValue()}>
            <IoAddSharp />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default App;
