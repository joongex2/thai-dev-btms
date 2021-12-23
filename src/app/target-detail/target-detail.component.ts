import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { expandableTableRowAnimation } from '../shared/animations/expandable-table-row.animation';
import { RunningNoData, Target } from '../shared/interfaces/target.interface';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-target-detail',
  templateUrl: './target-detail.component.html',
  styleUrls: ['./target-detail.component.scss'],
  animations: [ expandableTableRowAnimation ]
})
export class TargetDetailComponent implements OnInit {
  runningNo: string;
  runningNoData: RunningNoData;
  targets: Target[];

  displayedColumns: string[] = [
    'expandIcon',
    'Target ID',
    'Name',
    'Standard',
    'Relative Target',
    'deleteIcon'
  ];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('runningNo'));
      this.runningNo = params.get('runningNo');
      this.runningNoData = this.dataService.getRunningNoData(this.runningNo);
      if (this.dataService.getRunningNo(this.runningNo).kids.has_targets) {
        this.targets = this.dataService.getTargets(this.runningNo);
      }
    });
  }

  deleteTarget(index: number) {
    console.log('delete target');
  }

}
