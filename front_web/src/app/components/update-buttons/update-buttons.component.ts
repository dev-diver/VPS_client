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

  clientIsUpdating = true;
  serverIsUpdating = true;

  clientHaveUpdate = false;
  serverHaveUpdate = false;

  constructor(private updateService : UpdateService) { 
    this.updateService.haveUpdateClient()
    .then((haveUpdate: any) => {
      console.log(haveUpdate);
      this.clientHaveUpdate = haveUpdate.update;
    })
    .catch((error) => {
      console.error('Error fetching client update:', error);
    })
    .finally(() => {
      this.clientIsUpdating = false;
    });

  this.updateService.haveUpdateServer()
    .then((haveUpdate: any) => {
      console.log(haveUpdate);
      this.serverHaveUpdate = haveUpdate.update;
    })
    .catch((error) => {
      console.error('Error fetching server update:', error);
    })
    .finally(() => {
      this.serverIsUpdating = false;
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
