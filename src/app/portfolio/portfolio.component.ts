import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

    projects = {} as Project[];

    isCollapsed: boolean = true;

    Javascript: boolean = false;
    typescript: boolean = false;
    NodeJS: boolean = false;

    angular: boolean = false;
    React: boolean = false;
    filtering: boolean = false;

    constructor(private titleService: Title, private projectService: ProjectsService) {
        this.titleService.setTitle('Sherri Wang - Portfolio');
    }
    ngOnInit(): void {
        this.projects = this.projectService.GetProjects()
    }

    Filter() {
        let filterTags: Tag[] = [];

        if (this.Javascript) {
            filterTags.push(Tag.JAVASCRIPT);
        }

        if (this.typescript) {
            filterTags.push(Tag.TYPESCRIPT);
        }

        if (this.NodeJS) {
            filterTags.push(Tag.NODEJS);
        }
        if (this.angular) {
            filterTags.push(Tag.ANGULAR);

        }
        //確認是不是有勾選篩選條件用來顯示reset button
        if (this.Javascript || this.typescript || this.NodeJS || this.angular || this.React) {
            this.filtering = true;
        }
        else {
            this.filtering = false;
        }
        this.projects = this.projectService.GetProjectsByFilter(filterTags);
    }
    ResetFilters() {
        this.Javascript = false;
        this.typescript = false;
        this.NodeJS = false;
        this.angular = false;
        this.React = false;
        this.filtering = false;

        this.projects = this.projectService.GetProjects();

    }
}
