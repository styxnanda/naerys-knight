import { Spinner } from "flowbite-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner aria-label="Center-aligned spinner example" size="xl"></Spinner>
    </div>
  );
};

export default Loader;
