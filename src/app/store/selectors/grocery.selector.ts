import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceriesByType = (groceryType: string) =>
  createSelector(selectGroceries, (store) =>
    store.filter((item) => item.type === groceryType)
  );
