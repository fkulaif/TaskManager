import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];

  

  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'FERNANDO KULAIF';
    this.NoOfTeamMembers = 4;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Projects=[
      "Project A","Project B","Project C","Project D"
    ];

    for(var i=2021; i>=2018; i--) {
      this.Years.push(i);
    }
    
   
    // this.Years=[
    //   2019,2018,2017,2016
    // ];

  }
}
