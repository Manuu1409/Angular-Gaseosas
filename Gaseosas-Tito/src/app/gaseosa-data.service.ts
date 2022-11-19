import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, tap } from 'rxjs';
import { Gaseosa } from './lista-gaseosas/Gaseosas';

const URL = 'https://6377b2ce0992902a250f222d.mockapi.io/Gaseosa';

@Injectable({
  providedIn: 'root'
})
export class GaseosaDataService {

  constructor(private htttps: HttpClient) { }

  public ObtenerGaseosas(): Observable<Gaseosa[]>  {

    return this.htttps.get<Gaseosa[]>(URL)
    .pipe(
      tap((gaseosas: Gaseosa[]) => gaseosas.forEach(gaseosas => gaseosas.cantidad = 0))
    );

  }
}
