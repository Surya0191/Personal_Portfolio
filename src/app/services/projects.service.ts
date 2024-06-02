import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';
import { ProjectData } from '../models/project-data';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsData: ProjectData[] = [
    {
      id: 0,
      projectName: 'Grocery Shopping App',
      summary:
        'This app helps find ingredients using recipes and add items accordingly.',
      projectDescription:
        'This app helps find ingredients using recipes and add items accordingly to the cart.',
      projectLink: 'https://github.com/Surya0191/Grocery_Shopping_App',
      tags: [Tag.HTML, Tag.CSS, Tag.Typescript, Tag.Angular],
      pictures: [
        '../../assets/Project_Images/0/0_image_1.png',
        '../../assets/Project_Images/0/0_image_2.png'
      ],
    },
    {
      id: 1,
      projectName: 'Portfolio Website',
      summary: 'A personal portfolio website to showcase projects and skills.',
      projectDescription:
        'This is a responsive website that includes sections for a resume, project showcase, and contact information.',
      projectLink: 'https://github.com/Surya0191/Personal_Portfolio',
      tags: [Tag.HTML, Tag.CSS, Tag.Typescript, Tag.Angular],
      pictures: [
        '../../assets/Project_Images/1/1_image_1.png',
        '../../assets/Project_Images/1/1_image_2.png',
        '../../assets/Project_Images/1/1_image_3.png',
        '../../assets/Project_Images/1/1_image_4.png'
      ],
    },
  ];

  constructor() {}

  getProjectData(): ProjectData[] {
    return this.projectsData;
  }

  getProjectDataById(id: number): ProjectData {
    let project = this.projectsData.find((project) => project.id === id);
    if (project === undefined) {
      throw new Error(`Project with id ${id} not found`);
    }
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]): ProjectData[] {
    if (_.size(filterTags) > 0) {
      let filteredProjects: ProjectData[] = this.projectsData.filter(
        (project) => {
          let projectTags = project.tags;
          return projectTags.some((tag) => filterTags.includes(tag));
        }
      );
      return filteredProjects;
    }
    return this.projectsData;
  }
}
