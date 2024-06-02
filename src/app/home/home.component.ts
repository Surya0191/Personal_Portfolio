import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectData } from '../models/project-data';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredProject = {} as ProjectData;

  constructor(private titleService: Title, private projectService:ProjectsService){
    this.titleService.setTitle("Surya Teja Shetti - Home")
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectDataById(1);
  }

}
