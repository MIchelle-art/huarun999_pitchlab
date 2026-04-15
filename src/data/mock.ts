import { Department, EnterpriseStats, User } from '../types';

export const mockDepartments: Department[] = [
  { id: '1', name: '默认部门', description: '系统自动创建的默认部门', employeeCount: 2, isDefault: true },
  { id: '2', name: '开发部', description: '开发软件', employeeCount: 0, isDefault: false },
  { id: '3', name: '市场部', description: '市场部xxxxxxxx', employeeCount: 1, isDefault: false },
  { id: '4', name: '销售部', description: '销售部xxxxxx', employeeCount: 1, isDefault: false },
];

export const mockStats: EnterpriseStats = {
  departmentCount: 4,
  employeeCount: 5,
  createdDate: '2026/2/5',
};

export const mockUser: User = {
  name: 'dean',
  role: '管理员',
  points: 100,
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dean&backgroundColor=ffdfbf', // Using dicebear for cartoon avatar
  email: 'zhaokai@tezign.com',
  userId: '6b175781...',
  company: '演示企业',
  department: '市场部'
};
