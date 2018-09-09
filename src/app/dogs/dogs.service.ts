import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DogsService {
  dogsUrl = 'https://api.myjson.com/bins/14c9yw';
  data: any;

  constructor(private http: HttpClient) {}

  getListOfDogs() {
    return this.http.get(this.dogsUrl).pipe(
      map((data: any) => {
        this.data = data;
        return data;
      })
    );
  }
}
