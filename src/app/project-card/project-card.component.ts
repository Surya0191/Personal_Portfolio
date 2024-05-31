import { Component, Input } from '@angular/core';
import { ProjectData } from '../models/project-data';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

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
  bsModalRef?: BsModalRef

  constructor(private modalService:BsModalService){

  }

  openProjectModal(){
    const modalOptions:ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.projectData
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }

}
