import axios from "axios";

const instance = axios.create({
  baseURL: "https://hp-api.onrender.com/api/",
});

export const API = {
  getAllCharacters: () => {
    return instance.get("characters");
  },
  getOneCharacter: (id: string) => {
    return instance.get(`character/${id}`);
  },
  getHogwartsStudent: () => {
    return instance.get("characters/students");
  },
  getHogwartsStaff: () => {
    return instance.get("characters/staff");
  },
  getCharactersFromCertainHouse: (house: string) => {
    return instance.get(`characters/house/${house}`);
  },
  getSpells: () => {
    return instance.get("spells");
  },
};
