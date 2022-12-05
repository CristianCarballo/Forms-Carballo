import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-formulario',
   templateUrl: './formulario.component.html',
   styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
   constructor() { }

   ngOnInit(): void { }

   nombreControl = new FormControl('', [Validators.required]);
   apellidoControl = new FormControl('', [Validators.required]);
   emailControl = new FormControl('', [Validators.email, Validators.required]);
   contrasenaControl = new FormControl('', [Validators.minLength(6), Validators.required]);
   terminosControl = new FormControl(false, [Validators.requiredTrue]);

   formulario = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
      contrasena: this.contrasenaControl,
      terminos: this.terminosControl
   });

   submit() {

   }
}