import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: false,
      token: false,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
    }),
    {
      name: "user-storage",
      Storage: () => createJSONStorage(),
    }
  )
);

export default useUserStore;
