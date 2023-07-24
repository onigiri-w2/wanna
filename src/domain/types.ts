export type WannadoOverview = {
  id: string;
  title: string;
  isCompleted: boolean;
  completedAt: Date | undefined;
  completedTodoCount: number;
  uncompletedTodoCount: number;
  memoCount: number;
  linkCount: number;
};
