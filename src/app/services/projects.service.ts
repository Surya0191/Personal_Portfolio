import { Injectable } from '@angular/core';
import { Tag } from '../models/tag';
import { ProjectData } from '../models/project-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectsData:ProjectData[] = [
    {
      id: 0,
      projectName: "Grocery Shopping App",
      summary: "This app helps find ingredients using recipes and add items accordingly.",
      projectDescription: "This app helps find ingredients using recipes and add items accordingly to the cart.",
      projectLink: "https://github.com/suryateja-shetti/Grocery-App",
      tags: [Tag.HTML, Tag.CSS, Tag.Typescript],
      pictures: ["https://example.com/images/grocery1.png", "https://example.com/images/grocery2.png"]
    },
    {
      id: 1,
      projectName: "Weather Forecast App",
      summary: "An application that provides weather forecasts for different cities.",
      projectDescription: "This app fetches weather data from an API and displays current weather conditions and forecasts for various locations.",
      projectLink: "https://github.com/example/weather-forecast-app",
      tags: [Tag.HTML, Tag.CSS, Tag.JavaScript],
      pictures: ["https://example.com/images/weather1.png", "https://example.com/images/weather2.png"]
    },
    {
      id: 2,
      projectName: "Task Manager",
      summary: "A task management app to help organize and prioritize your tasks.",
      projectDescription: "This app allows users to create, edit, delete, and prioritize tasks. It also includes features for setting deadlines and reminders.",
      projectLink: "https://github.com/example/task-manager",
      tags: [Tag.React, Tag.Redux, Tag.JavaScript],
      pictures: ["https://example.com/images/task1.png", "https://example.com/images/task2.png"]
    },
    {
      id: 3,
      projectName: "Portfolio Website",
      summary: "A personal portfolio website to showcase projects and skills.",
      projectDescription: "This is a responsive website that includes sections for a resume, project showcase, and contact information.",
      projectLink: "https://github.com/Surya0191/Personal_Portfolio",
      tags: [Tag.HTML, Tag.CSS, Tag.JavaScript],
      pictures: ["../../assets/Project_Image1.png", "../../assets/Project_Image2.png","../../assets/Project_Image3.png","../../assets/Project_Image4.png"]
    },
    {
      id: 4,
      projectName: "Chat Application",
      summary: "A real-time chat application for seamless communication.",
      projectDescription: "This app allows users to send and receive messages in real-time, with features such as group chats and media sharing.",
      projectLink: "https://github.com/example/chat-application",
      tags: [Tag.NodeJs, Tag.JavaScript],
      pictures: ["https://example.com/images/chat1.png", "https://example.com/images/chat2.png"]
    },
    {
      id: 5,
      projectName: "E-commerce Website",
      summary: "An online platform for buying and selling products.",
      projectDescription: "This app includes features like product listing, shopping cart, checkout process, and payment gateway integration.",
      projectLink: "https://github.com/example/e-commerce-website",
      tags: [Tag.HTML, Tag.CSS, Tag.JavaScript, Tag.PHP],
      pictures: ["https://example.com/images/ecommerce1.png", "https://example.com/images/ecommerce2.png"]
    },
    {
      id: 6,
      projectName: "Blog Platform",
      summary: "A platform for creating and managing blog posts.",
      projectDescription: "This app allows users to write, edit, and publish blog posts. It includes user authentication and comment sections.",
      projectLink: "https://github.com/example/blog-platform",
      tags: [Tag.RubyOnRails, Tag.JavaScript, Tag.HTML, Tag.CSS],
      pictures: ["https://example.com/images/blog1.png", "https://example.com/images/blog2.png"]
    },
    {
      id: 7,
      projectName: "Fitness Tracker",
      summary: "An app to track workouts and monitor progress.",
      projectDescription: "This app helps users log their workouts, track their progress, and set fitness goals.",
      projectLink: "https://github.com/example/fitness-tracker",
      tags: [Tag.ReactNative, Tag.JavaScript, Tag.CSS],
      pictures: ["https://example.com/images/fitness1.png", "https://example.com/images/fitness2.png"]
    },
    {
      id: 8,
      projectName: "Expense Tracker",
      summary: "An app to help manage and track personal expenses.",
      projectDescription: "This app allows users to log their expenses, categorize them, and generate reports to analyze their spending habits.",
      projectLink: "https://github.com/example/expense-tracker",
      tags: [Tag.Angular, Tag.Typescript, Tag.HTML, Tag.CSS],
      pictures: ["https://example.com/images/expense1.png", "https://example.com/images/expense2.png"]
    },
    {
      id: 9,
      projectName: "Recipe Finder",
      summary: "An app to search for recipes based on available ingredients.",
      projectDescription: "This app lets users input available ingredients and find recipes that can be made with those ingredients.",
      projectLink: "https://github.com/example/recipe-finder",
      tags: [Tag.VueJs, Tag.JavaScript, Tag.HTML, Tag.CSS],
      pictures: ["https://example.com/images/recipe1.png", "https://example.com/images/recipe2.png"]
    }
  ];

  constructor() { }

  getProjectData():ProjectData[]{
    return this.projectsData;
  }

  getProjectDataById(id:number):ProjectData{
    let project = this.projectsData.find(project => project.id === id);
    if(project === undefined){
      throw new Error(`Project with id ${id} not found`);
    }
    return project;
  }
}
