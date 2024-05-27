import { Component, Input } from '@angular/core';
import { ProjectData } from '../models/project-data';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input() projectData:ProjectData = {
    id:1,
    projectName:"Sample Project",
    summary:"",
    projectDescription:"This is a sample project",
    projectLink:"",
    tags:[],
    pictures:[]
  };

}
