import { createFileRoute } from "@tanstack/react-router";
import { Avatar } from "flowbite-react";

export const Route = createFileRoute("/peyrie")({
  component: Peyrie,
});

function Peyrie() {
  return (
    <div className="flex align-middle justify-center items-center pt-10">
      <div className="flex flex-col w-1/2 bg-gray-100 rounded-lg border shadow-lg p-10 align-middle justify-center text-center mb-5">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
          Pairing Generator
        </h1>
        <div className="flex flex-wrap align-middle justify-center mt-5 gap-10">
          <Avatar rounded size="lg" className="cursor-pointer" />
          <Avatar rounded size="lg" className="cursor-pointer" />
          <Avatar rounded size="lg" className="cursor-pointer" />
          <Avatar rounded size="lg" className="cursor-pointer" />
        </div>
        <span className="relative flex justify-center mt-8">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span className="relative z-10 bg-gray-100 px-6">
            Choose Your Characters
          </span>
        </span>
        <div className="grid grid-cols-4 w-full bg-gray-50 rounded-lg border shadow-lg p-10 align-middle justify-center text-center mt-3 gap-4">
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
          <Avatar rounded size="md" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
