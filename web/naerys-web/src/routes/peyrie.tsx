import { createFileRoute } from "@tanstack/react-router";
import { Avatar, Button, Tooltip } from "flowbite-react";
import { usePairingPageStore } from "../utils/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { MdDelete } from "react-icons/md";
import {
  CharacterObject,
  CharactersApiOutput,
  PairingApiOutput,
} from "../utils/constants";
import { HiOutlineArrowRight } from "react-icons/hi2";
import LinkClipboard from "../components/LinkClipboard";

export const Route = createFileRoute("/peyrie")({
  component: Peyrie,
});

function Peyrie() {
  const maxCount = usePairingPageStore((state) => state.maxSelection);
  const pairing = usePairingPageStore((state) => state.pairing);
  const charactersAvailable = usePairingPageStore(
    (state) => state.availableCharacters
  );
  const charactersSelected = usePairingPageStore(
    (state) => state.selectedCharacter
  );
  const setAvailable = usePairingPageStore((state) => state.setAvailable);
  const setSelected = usePairingPageStore((state) => state.setSelected);
  const setDeselect = usePairingPageStore((state) => state.setDeselect);
  const resetStates = usePairingPageStore((state) => state.reset);

  const { mutate, data: pairRequestOutput } = useMutation({
    mutationFn: async () => {
      const response = await fetch("http://localhost:3000/pairing/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pairing),
      });

      const result: PairingApiOutput = await response.json();
      return result.pairing_url;
    },
    onSuccess: (data) => {
      window.open(data, "_blank");
    },
  });

  const { isError, isFetching, isPending, error } = useQuery({
    queryKey: ["pairing", "peyrie"],
    queryFn: async () => {
      resetStates();
      const response = await fetch(
        `http://localhost:3000/characters?limit=${100}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );

      const output: CharactersApiOutput = await response.json();
      setAvailable(output.characters);
      return output;
    },
  });

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex align-middle justify-center items-center pt-10">
      <div className="flex flex-col w-1/2 bg-gray-100 rounded-lg border shadow-lg p-10 align-middle justify-center text-center mb-5">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
          Pairing Generator
        </h1>
        <div className="flex flex-wrap align-middle justify-center mt-5 gap-10">
          {charactersSelected.map((selection) => (
            <Tooltip
              content={selection.fullName}
              placement="bottom"
              key={selection.id}
            >
              <div className="relative w-24 h-24">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src={selection.imageUrl}
                  alt={selection.image}
                />
                <MdDelete
                  className="absolute top-0 right-0 text-red-500 w-6 h-6 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    setDeselect(selection);
                  }}
                />
              </div>
            </Tooltip>
          ))}
          {maxCount ? (
            <Avatar rounded size="lg" title="Choose from characters below!" />
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-row justify-center align-middle mt-7">
          <Button
            gradientDuoTone="redToYellow"
            onClick={() => {
              mutate();
            }}
          >
            Generate Link
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <LinkClipboard urlString={pairRequestOutput || "undefined"} />
        </div>
        <span className="relative flex justify-center mt-4">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span className="relative z-10 bg-gray-100 px-6">
            Choose Your Characters ({maxCount} left)
          </span>
        </span>
        {isFetching || isPending ? (
          <div className="mt-10">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-4 w-full bg-gray-50 rounded-lg border shadow-lg p-10 align-middle justify-center text-center mt-3 gap-4 justify-items-center">
            {charactersAvailable.map((character: CharacterObject) => (
              <Tooltip content={character.fullName} key={character.id}>
                <img
                  className={`w-20 h-20 rounded-full object-cover ${maxCount === 0 ? "grayscale" : "cursor-pointer"}`}
                  src={character.imageUrl}
                  alt={character.image}
                  onClick={() => {
                    if (maxCount > 0) setSelected(character);
                  }}
                />
              </Tooltip>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
