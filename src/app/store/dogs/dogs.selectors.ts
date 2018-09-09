import { createSelector } from '@ngrx/store';

export const getDogs = (state: any) => state.dogs.dogs;

export const getDogsBySize = size => {
  return createSelector(getDogs, dogs =>
    dogs
      .filter(dogType => dogType.size === size)
      .reduce((arr, dog) => [...arr, ...dog.breeds], [])
  );
};
