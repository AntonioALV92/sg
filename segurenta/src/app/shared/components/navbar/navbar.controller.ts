import { MatDialogConfig } from '@angular/material';

export class Controller {
  constructor() {}

  public getDialog(): MatDialogConfig {
    let dialogConfig = new MatDialogConfig();
    dialogConfig = {
      autoFocus: true,
      direction: 'ltr',
      width: '100vw',
      maxWidth: '95vw',
      panelClass: 'dialog-width',
      position: {
        top: '100px',
        left: '200px'
      }
    };
    return dialogConfig;
  }
}
