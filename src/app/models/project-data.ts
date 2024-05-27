import { Tag } from "./tag";

export interface ProjectData {
    id:number;
    projectName:string;
    summary:string;
    projectDescription:string;
    projectLink:string;
    tags:Tag[];
    pictures:string[];
}