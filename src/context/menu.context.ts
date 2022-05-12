import { createContext } from "react";
interface IMenuOpen {
  isOpen: boolean;
  setIsOpen: (isopen: boolean) => void;
}

export const MenuContext = createContext<IMenuOpen>({
  isOpen: false,
  setIsOpen(isopen) {
    isopen = !isopen;
  },
});
