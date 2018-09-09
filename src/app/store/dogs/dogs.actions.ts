import { Action } from '@ngrx/store';

export const DOGS_LOADING = 'Dogs: Get Dogs Loading';
export const DOGS_LOAD_SUCCESS = 'Dogs: Get Dogs Load Success';
export const DOGS_LOAD_FAIL = 'Dogs: Load Dogs Fail';


export class DogsLoading implements Action {
    readonly type = DOGS_LOADING;
    constructor () {}
}

export class DogsLoadSuccess implements Action {
    readonly type = DOGS_LOAD_SUCCESS;
    constructor (public payload: string[]) {}
}

export class DogsLoadFail implements Action {
    readonly type = DOGS_LOAD_FAIL;
    constructor (public payload?: any) {}
}

export type All = DogsLoading | DogsLoadSuccess | DogsLoadFail;
