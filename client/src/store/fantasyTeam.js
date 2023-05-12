import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFantasyTeamStore = create(
  persist(
    (set) => ({
      fantasyTeam: [],
      setFantasyTeam: (fantasyTeam) => set({ fantasyTeam }),
      addPlayer: (player) =>
        set((state) => ({ fantasyTeam: [...state.fantasyTeam, player] })),
      removePlayer: (player) =>
        set((state) => ({
          fantasyTeam: state.fantasyTeam.filter((p) => p._id !== player._id),
        })),
      clearFantasyTeam: () => set({ fantasyTeam: [] }),
    }),
    {
      name: "fantasyTeam-storage",
      Storage: () => createJSONStorage(),
    }
  )
);

export default useFantasyTeamStore;
