import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment.development";
import { CreateInscriptionData, Inscription } from "./models";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class InscriptionsService {
  constructor(private http: HttpClient) {}

  getInscriptions() {
    return this.http.get<Inscription[]>(`${environment.apiURL}/inscriptions?_embed=student&_embed=course`)
  }

  createInscription(data: CreateInscriptionData) {
    return this.http.post<Inscription>(`${environment.apiURL}/inscriptions`, data);
  }

}
