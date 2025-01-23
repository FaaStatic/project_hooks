import { create } from "zustand";

type StandaloneStore = {
	isStandalone: boolean;
	set: (isStandalone: boolean) => void;
};

export const useStandalone = create<StandaloneStore>((set) => ({
	isStandalone: false,
	set: (isStandalone: boolean) => set({ isStandalone }),
}));
