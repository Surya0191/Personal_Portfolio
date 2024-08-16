import { Tag } from "./tag";

export interface ProjectData {
    id:number;
    projectName:string;
    summary:string;
    projectDescription:string;
    keyFeatures:string[];
    projectLink:string;
    projectUrl:string
    tags:Tag[];
    pictures:string[];
}