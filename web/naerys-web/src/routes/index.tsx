import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "flowbite-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex bg-main-bg-image w-auto h-screen flex-col justify-center gap-3 border-none">
      <div className="flex flex-col justify-center gap-3 border-none bg-black bg-opacity-75 w-auto h-screen items-center">
        <h1 className="text-7xl font-poppins font-extrabold text-orange-200">
          Naerys Knight
        </h1>
        <p className="text-2xl font-cormorand-garamond text-gray-100">
          A Game of Thrones Character Viewer and AO3 Pairing Redirect
        </p>
        <div className="flex gap-4 pt-2">
          <Link to="/characters">
            <Button gradientMonochrome="lime" pill className="font-poppins">
              Characters
            </Button>
          </Link>
          <Link to="/peyrie">
            <Button gradientMonochrome="pink" pill className="font-poppins">
              Pairing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
