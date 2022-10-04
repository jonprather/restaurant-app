import create from "zustand";

export const useCategoryStore = create((set) => ({
  activeCategory: "all",
  setActiveCategory: (category) =>
    set((state) => ({ activeCategory: category })),
}));
