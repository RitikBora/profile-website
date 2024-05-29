import { atom } from "recoil";

export const selectedPageAtom = atom({
    key : "selectedPageKey",
    default : "home"
})