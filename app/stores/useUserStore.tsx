import { create } from 'zustand';
import { IUser } from '../interfaces/auth.interface';

type UserState = {
  user: IUser | null;
  setUser: (user: IUser) => void;
  updateUser: (user: IUser) => void;
  logOut: () => void;
};

export const useUserStore = create<UserState>(set => ({
  user: null,
  setUser: (user: IUser) => set({ user }),
  updateUser: (user: IUser) => set({ user: user ? user : null }),
  logOut: () => set({ user: null }),
}));
