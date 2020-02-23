import {Question} from './question';

export interface Form {
  id: string | number;
  name: string;
  questions: Question[];
  ownerId: string | number;
  description?: string;
}
