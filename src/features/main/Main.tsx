import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import {CharactersList} from "../../components/CharactersList/CharactersList";

export const Main = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters"],
    queryFn: API.getAllCharacters,
  });

  if (isLoading) return <div>is loading...</div>;

  if (isError) return <div>Error</div>;

  return <CharactersList data={data?.data}/>
};
