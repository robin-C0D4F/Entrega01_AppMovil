import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  pageTitle = 'registrate';

   formularioRegister: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) { 

    this.formularioRegister = this.fb.group({

      "correo" : new FormControl("", Validators.required),
      "password" : new FormControl("", Validators.required),
      "confirmpassword" : new FormControl("", Validators.required),

    })

  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegister.value;

    if(this.formularioRegister.invalid){
      const alert = await this.alertController.create({
        header: 'Registro Incompleto',
        message: 'Complete todos los campos',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}
