import { create } from "zustand";

export const useAuth = create((set) => ({
  user: undefined,
  setUser: (user) => set({ user: user }),
  logout: () => set({ user: undefined }),
}));
