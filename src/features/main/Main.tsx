import { useQuery } from "@tanstack/react-query";
import { API } from "../../api/api";
import { CharacterCard } from "../../components/CharacterCard";

export const Main = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters"],
    queryFn: API.getAllCharacters,
  });

  if (isLoading) return <div>is loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <div>
      {data?.data.map((item: any) => (
        <CharacterCard data={item} />
      ))}
    </div>
  );
};
