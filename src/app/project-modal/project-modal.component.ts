import { Component, Input } from '@angular/core';
import { ProjectData } from '../models/project-data';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {

  constructor(public bsModalRef:BsModalRef){}

  @Input() project = {} as ProjectData;

}
