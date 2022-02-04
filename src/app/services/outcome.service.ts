import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Outcome} from '../models/outcome';
@Injectable({
  providedIn: 'root'
})
export class OutcomeService {
  private baseEndPoint = 'https://app-saver-api.herokuapp.com/outcomes'
  private headers : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http : HttpClient) { }

  public getAll(): Observable<Outcome[]>{
    return this.http.get<Outcome[]>(this.baseEndPoint);
  }

  public getById(id : number): Observable<Outcome>{
    return this.http.get<Outcome>(`${this.baseEndPoint}/${id}`);
  }

  public create(Outcome : Outcome) : Observable<Outcome>{
      return this.http.post<Outcome>(this.baseEndPoint,Outcome);
  }
  
  public udpate(Outcome : Outcome) : Observable<Outcome>{
    return this.http.post<Outcome>(`${this.baseEndPoint}/id/${Outcome.id}`,Outcome,{headers:this.headers});
  }

  public delete(id : number): Observable<string>{
    return this.http.delete<string>(`${this.baseEndPoint}/id/${id}`);
  }
}
