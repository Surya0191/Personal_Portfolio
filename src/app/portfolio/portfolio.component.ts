import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectData } from '../models/project-data';
import { Tag } from '../models/tag';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projectsData:ProjectData[] = [];

  constructor(private titleService: Title, private projectService:ProjectsService){
    this.titleService.setTitle("Surya Teja Shetti - Portfolio")
  }

  ngOnInit(): void {
    this.projectsData = this.projectService.getProjectData();
  }

  
}
