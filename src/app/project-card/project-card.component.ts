import { Component, Input } from '@angular/core';
import { Project } from '../_models/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
    //宣告一個輸入屬性 project，並將其初始化為一個空物件，同時宣告其類型為 Project。看project.ts檔
    @Input() project = {} as Project;
    bsModalRef?: BsModalRef;

    constructor(private modalService: BsModalService
    ) {

    }
    OpenProjectModal() {
//變更bootstrap class來 style modal 
        const modalOptions: ModalOptions = {
            class: "modal-lg",
            // 把傳到project- card的值往下傳到project-modal 
            initialState: {
                project:this.project
            }
        };
        this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions
        );
    }
}
