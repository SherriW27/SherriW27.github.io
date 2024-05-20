import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

    isWorkExperienceOpen: boolean = true; 
    isEducationOpen: boolean = true;
    isCertificationsOpen: boolean = true;
    isSkillsOpen: boolean = true;
    constructor(private titleService: Title,private renderer: Renderer2) {
        this.titleService.setTitle('Sherri Wang - Resume');
    }
    DownloadFile() {
        const link = this.renderer.createElement('a');
        link.setAttribute('target', '_blank');  
        link.setAttribute('href', '../../assets/Resume.pdf');
        link.setAttribute('download', 'Resume.pdf');
        //呼叫 click 方法模擬點選 <a> 標籤，從而觸發檔案下載。
        link.click();
        //下載啟動後，移除 <a> 標籤，因為它已經完成了它的使命。這有助於保持 DOM 的整潔。
        link.remove();
    }
}
