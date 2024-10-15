import { create } from "zustand";
import { CharacterObject, PairingApiRequestBody } from "./constants";

type CharactersPageStore = {
  page: number;
  limit: number;
  sort: string;
  order: string;
  search: string;

  setPage: (reqPage: number) => void;
  setLimit: (reqLimit: number) => void;
  setSort: (reqSort: string) => void;
  setOrder: (reqOrder: string) => void;
  setSearch: (reqSearch: string) => void;
};

type PairingPageStore = {
  referenceCharacters: Array<CharacterObject>;
  availableCharacters: Array<CharacterObject>;
  selectedCharacter: Array<CharacterObject>;
  pairing: Array<PairingApiRequestBody>;
  maxSelection: number;

  setAvailable: (characters: Array<CharacterObject>) => void;
  setSelected: (character: CharacterObject) => void;
  setDeselect: (character: CharacterObject) => void;
  reset: () => void;
};

export const useCharactersPageStore = create<CharactersPageStore>((set) => ({
  page: 1,
  limit: 10,
  sort: "fullName",
  order: "asc",
  search: "",

  setPage: (reqPage: number) => {
    set({ page: reqPage });
  },

  setLimit: (reqLimit: number) => {
    set({ limit: reqLimit });
  },

  setSort: (reqSort: string) => {
    set({ sort: reqSort });
  },

  setOrder: (reqOrder: string) => {
    set({ order: reqOrder });
  },

  setSearch: (reqSearch: string) => {
    set({ search: reqSearch });
  },
}));

export const usePairingPageStore = create<PairingPageStore>((set) => ({
  referenceCharacters: [],
  availableCharacters: [],
  selectedCharacter: [],
  pairing: [],
  maxSelection: 4,

  setAvailable: (characters: Array<CharacterObject>) => {
    set(() => ({
      referenceCharacters: characters,
      availableCharacters: characters,
    }));
  },
  setSelected: (character: CharacterObject) => {
    set((state) => ({
      selectedCharacter: [...state.selectedCharacter, character],
      pairing: [...state.pairing, { name: character.fullName }],
      maxSelection: state.maxSelection - 1,
      availableCharacters: state.referenceCharacters.filter(
        (char) =>
          !state.selectedCharacter.includes(char) && char.id !== character.id
      ),
    }));
  },
  setDeselect: (character: CharacterObject) => {
    set((state) => ({
      availableCharacters: state.referenceCharacters.filter(
        (char) =>
          !state.selectedCharacter
            .filter((selected) => selected.id !== character.id)
            .map((selected) => selected.id)
            .includes(char.id)
      ),
      maxSelection: state.maxSelection + 1,
      pairing: state.pairing.filter(
        (relation) => relation.name !== character.fullName
      ),
      selectedCharacter: state.selectedCharacter.filter(
        (char) => char.id !== character.id
      ),
    }));
  },
  reset: () => {
    set(() => ({
      referenceCharacters: [],
      availableCharacters: [],
      selectedCharacter: [],
      pairing: [],
      maxSelection: 4,
    }));
  },
}));
