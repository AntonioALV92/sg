import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public catBancos: any;
  public catNacionalidades: any;

  public usuario: any;
  public formEditar: FormGroup;

  constructor(private formBuilder: FormBuilder, private catalog: CatalogosService, private userService: UserService) {
    this.createForm();
  }

   createForm() {
    this.formEditar = this.formBuilder.group({
      nombre: ['', Validators.required ],
      apellidoPaterno: ['', Validators.required ],
      apellidoMaterno: ['', Validators.required ],
      correoElectronico: ['', Validators.required ],
      telefono: ['', Validators.required ],
      rfc: [''],
      nacionalidad: ['', Validators.required ],
      imagenPerfil: [''],
      clabe: ['']
    });
  }

  ngOnInit() {
    this.getCatalogos();
    this.getUserById();
  }

  private async getCatalogos() {
    this.catBancos = await this.catalog.getBancos();
    this.catNacionalidades = await this.catalog.getNacionalidades();
  }

  private async getUserById() {
    this.usuario = await this.userService.getInfoUsuario();
    let token = sessionStorage.getItem('jwtoken');
    console.log(token);
    console.log(this.usuario);
  }

}
