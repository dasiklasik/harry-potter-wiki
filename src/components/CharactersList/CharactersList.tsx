import { CharacterType } from "../../api/api";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import styles from './CharactersList.module.css'

type CharactersListPropsType = {
  data: CharacterType[];
};

export const CharactersList = ({ data, ...props }: CharactersListPropsType) => {
  return (
    <div className={styles.wrapper}>
      {data.map((item) => (
        <CharacterCard key={item.id} data={item} />
      ))}
    </div>
  );
};
