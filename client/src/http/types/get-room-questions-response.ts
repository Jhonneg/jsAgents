export type GetRoomQuestionsResponse = Array<{
  id: string;
  questions: string;
  answer: string | null;
  createAt: string;
}>;
