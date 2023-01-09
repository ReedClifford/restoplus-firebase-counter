import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Counter = ({ currentCount, isLoading }) => {
  return (
    <div>
      <h2 className="text-2xl">Current Count</h2>
      <h3 className="text-center text-8xl">
        {isLoading ? (
          <AiOutlineLoading3Quarters className="text-7xl mx-auto" />
        ) : (
          currentCount
        )}
      </h3>
    </div>
  );
};

export default Counter;
