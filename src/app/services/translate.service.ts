import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private readonly googleTranslateApiUrl = 'https://translation.googleapis.com/language/translate/v2';

  constructor(private http: HttpClient) { }

  public translateToJapanese(text: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = {
      q: text,
      source: 'en',
      target: 'ja',
      format: 'text',
      key: 'AIzaSyD-7uWTjTodZba7ky7mgfSgnVxAX_opoh8'
    };

    return this.http.post(this.googleTranslateApiUrl, params, { headers });
  }
}
