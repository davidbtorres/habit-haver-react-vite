type Habit = {
  name: string;
  streakCount: number;
};

type User = {
  displayName: string;
  habits: Habit[];
};
