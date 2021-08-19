import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  get(medium: string) {
    const getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        }), 
        catchError(this.handelError)
      );
  }

  add(mediaItem: MediaItem) {
    return this.http.post('mediaitems', mediaItem)
      .pipe(catchError(this.handelError));
  }

  delete(mediaItem: MediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .pipe(catchError(this.handelError));
  }

  private handelError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('A data error occurred, please try again.')
  }
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
