export interface Page {
  numberPage: number;
  selected: boolean;
  user: User[];
}
export interface User {
  name: string;
  surname: string;
  birthday: number;
  userLine: number;
}
