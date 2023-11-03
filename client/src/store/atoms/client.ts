import { atom } from "recoil";
import axios from "axios";

const baseURL = "http://localhost:3000";

export const clientState = atom({
  key: "clientState",
  default: axios.create({ baseURL }),
});
