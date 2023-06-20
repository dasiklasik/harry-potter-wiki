import { CharacterType } from "../../api/api";
import styles from "./CharacterCard.module.css";

type CharacterCardPropsType = {
  data: CharacterType;
};

export const CharacterCard = ({ data, ...props }: CharacterCardPropsType) => {
  return (
    <div className={styles.wrapper}>
      {data.image ? (
          <div className={styles.realImage}>
              <img src={data.image} alt={data.name} />
          </div>
      ) : (
        <div className={styles.fakeImage}>No image</div>
      )}
      <div className={styles.content}>
          <h3>{data.name}</h3>
          <button>More</button>
      </div>
    </div>
  );
};
