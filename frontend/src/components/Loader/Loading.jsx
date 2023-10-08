import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <BounceLoader color="#0067FF" />
    </div>
  );
};

export default Loading;
