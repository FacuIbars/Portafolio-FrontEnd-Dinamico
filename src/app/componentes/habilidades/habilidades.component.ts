import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MaterialModule } from 'src/app/material.module';
import { habilidad } from './interfaces/habilidad.inteface';
import { HabilidadesService } from './services/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
habilidades!: habilidad[] ;

  constructor(private habilidadesSvc: HabilidadesService ) { }

  ngOnInit(): void {
    this.habilidadesSvc.getProducts()
    .pipe(
      tap((habilidades: habilidad[]) => this.habilidades =habilidades)
    )
    .subscribe()
  }

}
