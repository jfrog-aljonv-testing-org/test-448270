// user.model.ts
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Manager';
  status: 'Active' | 'Inactive';
  createdAt: string;
}
// mock-users.ts
import { User } from './user.model';

export const MOCK_USERS: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: 'Admin',
    status: 'Active',
    createdAt: '2025-01-15T08:30:00Z'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    role: 'User',
    status: 'Active',
    createdAt: '2025-02-10T11:20:00Z'
  },
  {
    id: 3,
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    role: 'Manager',
    status: 'Inactive',
    createdAt: '2025-03-01T14:45:00Z'
  }
];
