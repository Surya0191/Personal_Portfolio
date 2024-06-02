import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private titleService: Title, private renderer:Renderer2){
    this.titleService.setTitle("Surya Teja Shetti - Resume")
  }

  downloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href', '../../assets/Surya_Teja_Shetti_Resume.pdf');
    link.setAttribute('download','Surya_Teja_Shetti_Resume.pdf');
    link.click();
    link.remove();
  }

}
