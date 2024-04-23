import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-[calc(100vh-220px)] flex flex-1 justify-center items-center">
      <Circles
        height="150"
        width="150"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
