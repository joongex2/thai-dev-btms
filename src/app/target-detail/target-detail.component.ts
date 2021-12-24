import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { expandableTableRowAnimation } from '../shared/animations/expandable-table-row.animation';
import { RunningNoData, Target } from '../shared/interfaces/target.interface';
import { DataService } from '../shared/services/data.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-target-detail',
  templateUrl: './target-detail.component.html',
  styleUrls: ['./target-detail.component.scss'],
  animations: [expandableTableRowAnimation]
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

  // target Modal
  standards = [
    { name: 'ISO9001/GMP/HACCP', value: 1, type: 1 },
    { name: 'ISO9001', value: 2, type: 1 },
    { name: 'GMP', value: 3, type: 1 }
  ];

  bonds = [
    { name: 'bond1', value: 1 },
    { name: 'bond2', value: 2 }
  ];

  selectedStandard: string;
  selectedBond: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private modalService: NgbModal
  ) { }

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

  addTarget(targetModal: any) {
    this.modalService.open(targetModal);
  }

}
