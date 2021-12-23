import { Component, Input, OnInit } from '@angular/core';
import { SubTarget } from 'src/app/shared/interfaces/target.interface';

@Component({
  selector: 'app-sub-target-table',
  templateUrl: './sub-target-table.component.html',
  styleUrls: ['./sub-target-table.component.scss']
})
export class SubTargetTableComponent implements OnInit {
  @Input() runningNo: string;
  @Input() targetId: string;
  @Input() subTargets: SubTarget[];

  displayedColumns: string[] = [
    'expandIcon', 
    'Sub Target ID',
    'Name',
    'Index',
    'Value',
    'Unit',
    'Current Value',
    'Start Month',
    'Start Year',
    'Finish Month',
    'Finish Year',
    'deleteIcon'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
