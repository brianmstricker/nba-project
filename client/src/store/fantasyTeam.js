import { create } from "zustand";

const useFantasyTeamStore = create((set) => ({
  fantasyTeam: [],
  setFantasyTeam: (fantasyTeam) => set({ fantasyTeam }),
  addPlayer: (player) =>
    set((state) => ({ fantasyTeam: [...state.fantasyTeam, player] })),
  removePlayer: (player) =>
    set((state) => ({
      fantasyTeam: state.fantasyTeam.filter((p) => p._id !== player._id),
    })),
  clearFantasyTeam: () => set({ fantasyTeam: [] }),
  getFantasyTeam: () => set((state) => state.fantasyTeam),
}));

export default useFantasyTeamStore;
