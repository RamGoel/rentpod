import { create } from "zustand";
interface User {
  name: string;
  email: string;
  password?: string;
}

interface TUseAuth {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}

export const useAuth = create<TUseAuth>((set) => ({
  user: null,
  signIn: (user) => set({ user }),
  signOut: () => set({ user: null }),
}));
