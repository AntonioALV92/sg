import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { UsuarioClass } from '../../interfaces/person.interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public catBancos: any;
  public catNacionalidades: any;

  usuario: any;
  public formEditar: FormGroup;
  public esAsesor: boolean;
  editarUsuario: UsuarioClass;

  constructor(private formBuilder: FormBuilder, private catalog: CatalogosService, private userService: UserService) {
    this.esAsesor = false;
    this.createForm();
  }

   createForm() {
    this.formEditar = this.formBuilder.group({
      nombres: ['',
        Validators.required,
        // Validators.pattern('[a-zA-ZñÑ ]{0,40}$')
      ],
      apellidoPaterno: ['',
        Validators.required,
        // Validators.pattern('[a-zA-ZñÑóÓ ]{0,40}$')
      ],
      apellidoMaterno: ['',
        Validators.required,
        // Validators.pattern('[a-zA-ZñÑáÁ ]{0,40}$')
      ],
      correoElectronico: ['',
        Validators.required,
        // Validators.email
        // Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ],
      telefono: ['',
        Validators.required,
        // Validators.pattern('[0-9]{10,13}$'),
        // Validators.minLength(10),
        // Validators.maxLength(13)
      ],
      nacionalidad: ['',
        Validators.required
      ]
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
    this.usuario = await this.userService.getInfoUsuario(1);
    this.formEditar.setValue({
      nombres: this.usuario.nombres,
      apellidoPaterno: this.usuario.apellidoPaterno,
      apellidoMaterno: this.usuario.apellidoMaterno,
      correoElectronico: this.usuario.correoElectronico,
      telefono: this.usuario.telefono,
      nacionalidad: this.usuario.nacionalidad !== null ? this.usuario.nacionalidad : 0
    });
    if (this.usuario.tipoUsuarioDefault === 2) {
      this.esAsesor = true;
      this.formEditar.addControl('banco', new FormControl('', Validators.required));
      this.formEditar.addControl('clabe', new FormControl('', Validators.required));
      this.formEditar.patchValue({
        banco: this.usuario.idBanco !== null ? this.usuario.idBanco : 0,
        clabe: this.usuario.clabe !== null ? this.usuario.clabe : ''
      });
    }
  }

  public async editar() {
    event.preventDefault();
    if (this.formEditar.valid) {
      this.editarUsuario = new UsuarioClass();
      this.editarUsuario.nombres = this.formEditar.get('nombres').value;
      this.editarUsuario.apellidoPaterno = this.formEditar.get('apellidoPaterno').value;
      this.editarUsuario.apellidoMaterno = this.formEditar.get('apellidoMaterno').value;
      this.editarUsuario.correoElectronico = this.formEditar.get('correoElectronico').value;
      this.editarUsuario.telefono = this.formEditar.get('telefono').value;
      this.editarUsuario.nacionalidad = this.formEditar.get('nacionalidad').value;
    }
    console.log(this.editarUsuario);
    if (this.esAsesor) {
      this.editarUsuario.idBanco = this.formEditar.get('banco').value;
      this.editarUsuario.clabe = this.formEditar.get('clabe').value;
    }
    await this.userService.editarUsuario(this.editarUsuario);
    console.log('exito');
  }

}
