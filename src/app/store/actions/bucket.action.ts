import { createAction, props } from '@ngrx/store';
import { Bucket } from '../../../models/bucket.model';

export const addToBucket = createAction(
  '[Bucket] Add item to bucket',
  props<{ payload: Bucket }>()
);

export const removeFromBucket = createAction(
  '[Bucket] Remove item from bucket',
  props<{ payload: { id: number } }>()
);
