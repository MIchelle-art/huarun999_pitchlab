export interface Department {
  id: string;
  name: string;
  description: string;
  employeeCount: number;
  isDefault: boolean;
}

export interface EnterpriseStats {
  departmentCount: number;
  employeeCount: number;
  createdDate: string;
}

export interface User {
  name: string;
  role: string;
  points: number;
  avatarUrl: string;
  email: string;
  userId: string;
  company: string;
  department: string;
}
