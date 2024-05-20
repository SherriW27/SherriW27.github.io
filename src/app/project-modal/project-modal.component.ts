import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
    //按下view more 之後跳出來的彈窗內容
export class ProjectModalComponent {

    project = {} as Project;
    constructor(public bsModalRef: BsModalRef) {
    }
}
