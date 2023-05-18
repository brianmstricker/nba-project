import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null }, { token: null }),
    }),
    {
      name: "user-storage",
      Storage: () => createJSONStorage(),
    }
  )
);

export default useUserStore;
