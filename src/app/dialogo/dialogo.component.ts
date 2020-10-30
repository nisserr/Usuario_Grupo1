import {Component,OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsuarioService} from '../services/usuario.service'

export interface DialogData {
  correo: string;
  name: string;
  rut: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialogo.component.css',
})
export class DialogoComponent {

  correo: string;
  name: string;
  rut: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit (){}

  openDialog(rut:string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.correo = result;
    });
  }
  
 

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private UsuarioServ:UsuarioService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  actualizarcorreo(correo,rut){
    this.UsuarioServ.actualizarcorreo(correo,rut).subscribe(x => console.log('actualizarcorreo'))
  }

}
