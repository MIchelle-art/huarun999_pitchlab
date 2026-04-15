import { create } from 'zustand';
import { Department, EnterpriseStats, User } from '../types';
import { mockDepartments, mockStats, mockUser } from '../data/mock';

interface AppState {
  departments: Department[];
  stats: EnterpriseStats;
  user: User;
  deleteDepartment: (id: string) => void;
}

export const useStore = create<AppState>((set) => ({
  departments: mockDepartments,
  stats: mockStats,
  user: mockUser,
  deleteDepartment: (id) =>
    set((state) => ({
      departments: state.departments.filter((d) => d.id !== id),
    })),
}));
