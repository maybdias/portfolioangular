import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estágio em Desenvolvimento de Software',
        p: 'Supremo Tribunal Federal | Maio 2024 - Atual',
      },
      text: '<p>Atuo no versionamento de buckets S3 com MinIO, automação de testes e testes de qualidade. Participo do desenvolvimento de aplicativos mobile (Android Studio), atualização de projetos legados em Angular e no desenvolvimento e manutenção de sistemas Full Stack.',
    },
    {
      summary: {
        strong: 'Freelancer em Desenvolvimento de Websites',
        p: 'Freelancer | Maio 2024 - Atual',
      },
      text: '<p>Atuo no desenvolvimento de sites para clientes utilizando tanto WordPress assim como em código também, criação de frontends com integração ao Supabase em React e TypeScript, desenvolvimento e manutenção de FrontEnd e BackEnd, além da elaboração de protótipos de média e alta fidelidade em colaboração com stakeholders.',
    },
  ]);
}
