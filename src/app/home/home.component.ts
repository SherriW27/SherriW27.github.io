import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
    //增加 implements OnInit
export class HomeComponent implements OnInit{
    //設定顯示在tab的名稱
    featuredProject = {} as Project; 
    //增加Services
    constructor(private titleService: Title,private projectsService: ProjectsService) {
        this.titleService.setTitle('Sherri Wang - Home');
    }
    //增加 OnInit
    ngOnInit(): void {
        this.featuredProject = this.projectsService.GetProjectById(0);    }
   
}