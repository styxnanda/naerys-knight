import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { useCharactersPageStore } from "../utils/store";
import { Dropdown, Pagination, TextInput } from "flowbite-react";
import Error from "../components/Error";
import { CharacterObject } from "../utils/constants";

export const Route = createFileRoute("/characters")({
  component: Characters,
});

function Characters() {
  const pageNumber = useCharactersPageStore((state) => state.page);
  const limitNumber = useCharactersPageStore((state) => state.limit);
  const sortType = useCharactersPageStore((state) => state.sort);
  const orderType = useCharactersPageStore((state) => state.order);
  const searchQuery = useCharactersPageStore((state) => state.search);
  const setPage = useCharactersPageStore((state) => state.setPage);
  const setLimit = useCharactersPageStore((state) => state.setLimit);
  const setSort = useCharactersPageStore((state) => state.setSort);
  const setOrder = useCharactersPageStore((state) => state.setOrder);
  const setSearch = useCharactersPageStore((state) => state.setSearch);

  const {
    isPending,
    isError,
    data: reqData = { totalPages: 1, characters: [] },
    error,
    isFetching,
  } = useQuery({
    queryKey: [
      "characters",
      pageNumber,
      limitNumber,
      sortType,
      orderType,
      setPage,
      setSort,
      setOrder,
      setLimit,
      searchQuery,
      setSearch,
    ],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/characters?page=${pageNumber}&limit=${limitNumber}&sort=${sortType}&order=${orderType}&search=${searchQuery}`
      );

      const output = await response.json();

      if (pageNumber > output.totalPages) setPage(1);

      return output;
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex flex-col w-auto h-screen">
      <div className="flex sm:justify-between mt-2 mx-4 justify-center align-middle items-center">
        <TextInput
          id="search"
          placeholder="Search name..."
          value={searchQuery}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-4">
          <Dropdown label="Sort By" dismissOnClick={true}>
            <Dropdown.Item value="fullName" onClick={() => setSort("fullName")}>
              Full Name (Default)
            </Dropdown.Item>
            <Dropdown.Item
              value="firstName"
              onClick={() => setSort("firstName")}
            >
              First Name
            </Dropdown.Item>
            <Dropdown.Item value="lastName" onClick={() => setSort("lastName")}>
              Last Name
            </Dropdown.Item>
            <Dropdown.Item value="family" onClick={() => setSort("family")}>
              Family
            </Dropdown.Item>
            <Dropdown.Item value="title" onClick={() => setSort("title")}>
              Title
            </Dropdown.Item>
          </Dropdown>
          <Dropdown label="Order By" dismissOnClick={true}>
            <Dropdown.Item value="asc" onClick={() => setOrder("asc")}>
              Ascending (Default)
            </Dropdown.Item>
            <Dropdown.Item value="desc" onClick={() => setOrder("desc")}>
              Descending
            </Dropdown.Item>
          </Dropdown>
          <Dropdown label="Limit Results" dismissOnClick={true}>
            <Dropdown.Item value={10} onClick={() => setLimit(10)}>
              10 (Default)
            </Dropdown.Item>
            <Dropdown.Item value={20} onClick={() => setLimit(20)}>
              20
            </Dropdown.Item>
            <Dropdown.Item value={30} onClick={() => setLimit(30)}>
              30
            </Dropdown.Item>
            <Dropdown.Item value={100} onClick={() => setLimit(100)}>
              No Limit
            </Dropdown.Item>
          </Dropdown>
        </div>
        <Pagination
          layout="navigation"
          currentPage={pageNumber}
          totalPages={reqData.totalPages}
          onPageChange={setPage}
        />
      </div>
      {isPending || isFetching ? (
        <div className="flex justify-center items-center w-full h-full">
          <Loader />
        </div>
      ) : reqData.characters.length > 0 ? (
        <div className="grid grid-cols-5 gap-4 p-4">
          {reqData.characters.map((character: CharacterObject) => (
            <Link
              to={"/pair/begin/" + character.id}
              className="group relative block bg-black"
              key={character.id}
            >
              <img
                src={character.imageUrl}
                alt={character.image}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />
              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-violet-200">
                  {character.title}
                </p>
                <p className="text-xl font-bold font-poppinss text-white sm:text-2xl">
                  {character.fullName}
                </p>
                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}
