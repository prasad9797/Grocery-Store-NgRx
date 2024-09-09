import { createReducer, on } from '@ngrx/store';
import { Bucket } from '../../../models/bucket.model';
import { addToBucket, removeFromBucket } from '../actions/bucket.action';

const intialState: Bucket[] = [];

export const bucketReducer = createReducer(
  intialState,
  on(addToBucket, (state, action) => {
    const findItem = state.find((item) => item.id === action.payload.id);
    if (findItem) {
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item;
      });
    } else {
      return [...state, action.payload];
    }
  }),
  on(removeFromBucket, (state, action) => {
    const findItem = state.find((item) => item.id === action.payload.id);

    if (findItem && findItem.quantity > 1) {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    } else {
      return state.filter((item) => item.id !== action.payload.id);
    }
  })
);
