export interface TaskType {
  data: TaskData[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export interface TaskData {
  id: number;
  location: string;
  description: string;
  photo: string;
  instructions?: Instruction[];
  isCompleted: boolean;
  completedAt?: any;
  startTime: string;
  endTime: string;
  category: Category;
  user: User;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  profilePhoto: string;
}

interface Category {
  id: number;
  name: string;
}

interface Instruction {
  instruction_photo: string;
  instruction_title: string;
}