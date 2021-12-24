import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RunningNoData, Target } from '../shared/interfaces/target.interface';
import { DataService } from '../shared/services/data.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-target',
  templateUrl: './new-target.component.html',
  styleUrls: ['./new-target.component.scss']
})
export class NewTargetComponent implements OnInit {
  runningNo: string;
  runningNoData: RunningNoData;
  targets: Target[];
  selectedTargetType?: number = undefined;
  selectedYear?: number = undefined;

  targetTypes = [
    { name: 'ระบบคุณภาพ', value: 1 },
    { name: 'ระบบการจัดการ', value: 2 },
    { name: 'ระบบ WCM', value: 3 }
  ];

  years = [
    { name: '2021', value: 1 },
    { name: '2022', value: 2 }
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

  displayedColumns: string[] = [
    'expandIcon',
    'Target ID',
    'Name',
    'Standard',
    'Relative Target',
    'deleteIcon'
  ];

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.targets = undefined;
  }

  deleteTarget(index: number) {
    console.log('delete target');
  }

  addTarget(targetModal: any) {
    this.modalService.open(targetModal);
  }

}
