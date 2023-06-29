import { CharacterType } from "../api/api";

export const returnCharactersArray = (
  data: CharacterType[],
  pageNumber: number,
  itemsPerPage: number = 10
) => {
  let startAt = 0;
  let endAt = 10;

  for (let i = 1; i < pageNumber; i++) {
    startAt += itemsPerPage;
    endAt += itemsPerPage;
  }

  return data.slice(startAt, endAt);
};
