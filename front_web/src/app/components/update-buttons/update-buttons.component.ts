import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-update-buttons',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './update-buttons.component.html',
  styleUrl: './update-buttons.component.less'
})
export class UpdateButtonsComponent {

  clientIsUpdating = false;
  serverIsUpdating = false;

  clientHaveUpdate = false;
  serverHaveUpdate = false;

  constructor(private updateService : UpdateService) { 
    this.updateService.haveUpdateClient().then(haveUpdate => {
      this.clientHaveUpdate = haveUpdate;
    });
    this.updateService.haveUpdateServer().then(haveUpdate => {
      this.serverHaveUpdate = haveUpdate;
    });
  }

  update_client = async () => {
    this.clientIsUpdating = true;
    try {
      await this.updateService.updateClient();
      window.location.reload();
    }catch(e){
      console.error(e);
    }finally{
      this.clientIsUpdating = false;
    }
  }

  update_server = async () => {
    this.serverIsUpdating = true;
    try {
      await this.updateService.updateServer();
    }catch(e){
      console.error(e);
    }finally{
      this.serverIsUpdating = false;
    }
  }
}
