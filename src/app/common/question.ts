import {QuestionTypes} from './question-types';

export interface Question {
  id: string | number;
  question: string;
  formId: string | number;
  cells: string[];
  rows: number[];
  type: QuestionTypes;
  required: boolean;
  default?: any;
  placeholder?: string;
}
