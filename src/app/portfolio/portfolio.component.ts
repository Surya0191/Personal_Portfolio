import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectData } from '../models/project-data';
import { Tag } from '../models/tag';
import { ProjectsService } from '../services/projects.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  @ViewChildren('checkbox') checkboxes!: QueryList<ElementRef>;

  projectsData: ProjectData[] = [];
  filterItems: { languages: Tag[]; frameworks: Tag[] } = {
    languages: [],
    frameworks: [],
  };
  filtering: boolean = false;
  isCollapsed: boolean = true;
  filterTags: Tag[] = [];

  constructor(
    private titleService: Title,
    private projectService: ProjectsService
  ) {
    this.titleService.setTitle('Surya Teja Shetti - Portfolio');
  }

  ngOnInit(): void {
    this.projectsData = this.projectService.getProjectData();
    this.filterItems = this.getFilterItems();
  }

  getFilterItems(): { languages: Tag[]; frameworks: Tag[] } {
    let languages: Set<Tag> = new Set();
    let frameworks: Set<Tag> = new Set();
    const languageTags = [
      Tag.HTML,
      Tag.CSS,
      Tag.JavaScript,
      Tag.Typescript,
      Tag.PHP,
    ];
    const frameworkTags = [
      Tag.React,
      Tag.Redux,
      Tag.NodeJs,
      Tag.RubyOnRails,
      Tag.ReactNative,
      Tag.Angular,
      Tag.VueJs,
    ];
    this.projectsData.forEach((project) => {
      project.tags.forEach((tag) => {
        if (languageTags.includes(tag)) {
          languages.add(tag);
        }
        if (frameworkTags.includes(tag)) {
          frameworks.add(tag);
        }
      });
    });
    return {
      languages: Array.from(languages),
      frameworks: Array.from(frameworks),
    };
  }

  filter(filterData: Event, tag: Tag) {
    if (filterData) {
      const checkBox = filterData.target as HTMLInputElement;
      if (checkBox.checked) {
        this.filterTags.push(tag);
      } else {
        const filteredArray = this.filterTags.filter(
          (filterTag) => filterTag !== tag
        );
        this.filterTags = filteredArray;
      }
    }
    if (_.size(this.filterTags) > 0) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }
    this.projectsData = this.projectService.getProjectsByFilter(
      this.filterTags
    );
  }

  resetFilter() {
    this.checkboxes.forEach((element) => {
      const checkbox = element.nativeElement as HTMLInputElement;
      checkbox.checked = false;
    });
    this.filterTags = [];
    this.filtering = false;
    this.projectsData = this.projectService.getProjectsByFilter([]);
  }
}
