import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Knowledge } from '../../components/knowledge/knowledge';
import { Experiences } from '../../components/experiences/experiences';
import { Projects } from '../../components/projects/projects';

@Component({
  selector: 'app-home',
  imports: [Header, Knowledge, Experiences, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
