export type WannaDo = {
  id: string;
  title: string;
  emoji: string;
  createdAt: Date;
  completedAt?: Date | undefined;
  isCompleted: boolean;
  tasks: Task[];
  memos: Memo[];
  links: Link[];
};

export type Task = {
  id: string;
  title: string;
  createdAt: Date;
  completedAt: Date | undefined;
  isCompleted: boolean;
};

export type Memo = {
  id: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Link = {
  id: string;
  title: string;
  url: string;
  createdAt: Date;
};
