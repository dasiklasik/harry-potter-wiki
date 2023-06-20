import axios from "axios";

const instance = axios.create({
  baseURL: "https://hp-api.onrender.com/api/",
});

export const API = {
  getAllCharacters: () => {
    return instance.get<CharacterType[]>("characters");
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

export type CharacterType = {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
};
