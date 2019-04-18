import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../../services/catalogos/catalogos.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public catBancos: any;
  public catNacionalidades: any;
  public data: any;
  public editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private catalog: CatalogosService, private userService: UserService) { }

  ngOnInit() {
    this.getCatalogos();
    this.getUserById();
    this.editForm.setValue(this.data);
  }

  private async getCatalogos() {
    this.catBancos = await this.catalog.getBancos();
    this.catNacionalidades = await this.catalog.getNacionalidades();
  }

  private async getUserById() {
    this.data = await this.userService.getInfoUsuario();
  }

}
