import { createReducer } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

const intialState: Grocery[] = [
  { id: 1, name: 'Milk', type: 'beverage' },
  { id: 2, name: 'Coffee', type: 'beverage' },
  { id: 3, name: 'Chips', type: 'Snacks' },
  { id: 4, name: 'Cookies', type: 'Snacks' },
];

export const groceryReducer = createReducer(intialState);
