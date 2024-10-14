import { create } from "zustand";

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
