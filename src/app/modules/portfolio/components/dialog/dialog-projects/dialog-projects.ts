import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

// Interface
import { IProjects } from '../../../interface/IProjects.interface';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.html',
  styleUrls: ['./dialog-projects.scss'],
})
export class DialogProjects implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjects>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ) {}

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogRef.close();
  }
}
