import { CharacterType } from "../api/api";

type CharacterCardPropsType = {
  data: CharacterType;
};

export const CharacterCard = ({ data, ...props }: CharacterCardPropsType) => {
  return (
    <div>
      <h3>{data.name}</h3>
    </div>
  );
};
