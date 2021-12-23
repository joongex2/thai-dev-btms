import { Component, OnInit } from '@angular/core';
import { RunningNo } from '../shared/interfaces/target.interface';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-target-dashboard',
  templateUrl: './target-dashboard.component.html',
  styleUrls: ['./target-dashboard.component.scss']
})
export class TargetDashboardComponent implements OnInit {
  selectedSite?: number = undefined;
  selectedStatus?: number = undefined;
  selectedDivision?: number = undefined;
  selectedDepartment?: number = undefined;
  selectedTargetType?: number = undefined;

  sites = [
    { name: 'site1', value: 1 },
    { name: 'site2', value: 2 }
  ];

  status = [
    { name: 'status1', value: 1 },
    { name: 'status2', value: 2 }
  ];

  divisions = [
    { name: 'division1', value: 1 },
    { name: 'division2', value: 2 }
  ];

  departments = [
    { name: 'department1', value: 1 },
    { name: 'department2', value: 2 }
  ];

  targetTypes = [
    { name: 'targetType1', value: 1 },
    { name: 'targetType2', value: 2 }
  ];

  displayedColumns: string[] = [
    'Running No.',
    'Revision No',
    'Modify No.',
    'Create Date',
    'Issued Date',
    'Year',
    'Status',
    'Creator',
    'Detail'
  ];

  runningNos: RunningNo[];

  constructor(private dataService: DataService) {
    this.runningNos = this.dataService.getRunningNos();
  }

  ngOnInit(): void {
  }

}
