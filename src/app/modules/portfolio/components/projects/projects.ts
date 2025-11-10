import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto ElizIA',
      title: 'ElizIA',
      width: '100px',
      height: '51px',
      description:
        'Inteligência artificial voltada para os idosos, com páginas de lembretes de remédios, jogos, noticias e muito mais...',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://github.com/Tvg2005/AmigoVirtual/tree/noticia',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull2.png',
      alt: 'Projeto LaHen',
      title: 'Lahen Dolce',
      width: '100px',
      height: '51px',
      description: 'A sua confeitaria afetiva',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://lahen.com.br/',
        },
      ],
    },
  ]);

  public openDialog(data: any) {
    this.#dialog.open(DialogProjects, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
