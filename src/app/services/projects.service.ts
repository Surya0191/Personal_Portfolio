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
      keyFeatures: [
        'Authentication and Auto login by storing session in local storage.',
        'Used Interceptor to append authentication token to outgoing requests.',
        'Storing and Fetching data using realtime database (Used Firebase).',
        'Route navigation.'
      ],
      projectLink: 'https://github.com/Surya0191/Grocery_Shopping_App',
      projectUrl: 'https://recipe-grocery-shopping.netlify.app/auth',
      tags: [Tag.HTML, Tag.CSS, Tag.Typescript, Tag.Angular],
      pictures: [
        '../../assets/Project_Images/0/0_image_1.png',
        '../../assets/Project_Images/0/0_image_2.png',
        '../../assets/Project_Images/0/0_image_3.png',
      ],
    },
    {
      id: 1,
      projectName: 'Portfolio Website',
      summary: 'A personal portfolio website to showcase projects and skills.',
      projectDescription:
        'This is a responsive website that includes sections for a resume, project showcase, and contact information.',
      keyFeatures: [
        'BSModalService to manage modal dialog.',
        'CarouselModule from ngx-bootstrap for Image slideshows.',
        'CollapseModule from Forms module for filtering.',
        'AccordionModule for dropdowns in Resume section.'
      ],
      projectLink: 'https://github.com/Surya0191/Personal_Portfolio',
      projectUrl: 'https://surya-shetti-portfolio.netlify.app/home',
      tags: [Tag.HTML, Tag.CSS, Tag.Typescript, Tag.Angular],
      pictures: [
        '../../assets/Project_Images/1/1_image_1.png',
        '../../assets/Project_Images/1/1_image_2.png',
        '../../assets/Project_Images/1/1_image_3.png',
        '../../assets/Project_Images/1/1_image_4.png',
      ],
    },
    {
      id: 2,
      projectName: 'Kanban Visual Board',
      summary:
        'Kanban is a visual management system that helps teams visualize their work.',
      projectDescription:
        'This project uses Angular 18 and integrates the drag-and-drop module from Angular CDK using the Drag&Drop connected sorting group method. Kanban is a visual management system that helps teams visualize their work, manage their workflow, and improve efficiency.',
      keyFeatures: ['Drag and Drop of Tasks in columns using Angular CDK'],
      projectLink: 'https://github.com/Surya0191/kanban',
      projectUrl: 'https://kanban-visual-board.netlify.app/',
      tags: [Tag.HTML, Tag.CSS, Tag.Typescript, Tag.Angular],
      pictures: [
        '../../assets/Project_Images/2/2_image_1.png',
        '../../assets/Project_Images/2/2_image_2.png',
        '../../assets/Project_Images/2/2_image_3.png',
      ],
    },
    {
      id: 3,
      projectName: 'Note Log',
      summary:
        'Note Log is an efficient note-taking website that helps organize your work.',
      projectDescription:
        'NoteLog is a user-friendly, efficient, and feature-rich note-taking website designed to help you capture, organize, and manage your thoughts, tasks, and ideas seamlessly. Whether you are jotting down quick memos, creating detailed lists, or brainstorming for your next big project, NoteLog has got you covered.',
      keyFeatures: [
        'Staggering when Note list is rendered.',
        'Animating Note and cancel icons when hovered.',
        'Animating When a Note is deleted or added.'
      ],
      projectLink: 'https://github.com/Surya0191/Note-Log',
      projectUrl: 'https://note-log.netlify.app/',
      tags: [Tag.HTML, Tag.CSS, Tag.Typescript, Tag.Angular],
      pictures: [
        '../../assets/Project_Images/3/3_image_1.png',
        '../../assets/Project_Images/3/3_image_2.png',
        '../../assets/Project_Images/3/3_image_3.png',
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
