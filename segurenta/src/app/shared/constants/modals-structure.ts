import { MatDialogConfig } from '@angular/material';

export const getDialog: MatDialogConfig = {
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
