import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { expandableTableRowAnimation } from 'src/app/shared/animations/expandable-table-row.animation';
import { Method, SubTarget } from 'src/app/shared/interfaces/target.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-target-table',
  templateUrl: './target-table.component.html',
  styleUrls: ['./target-table.component.scss'],
  animations: [expandableTableRowAnimation]
})
export class TargetTableComponent implements OnInit {
  @Input() dataSource: any;
  @Input() displayedColumns: string[];
  @Input() title: string;
  @Input() referenceId: string;
  @Input() iconKeyReference: string;
  @Input() renderTemplate: string;

  @Input() runningNo: string;
  @Input() targetId: string;

  @Output() deleteTarget: EventEmitter<number> = new EventEmitter<number>();
  @Output() addSubTarget: EventEmitter<number> = new EventEmitter<number>();
  @Output() addMethod: EventEmitter<number> = new EventEmitter<number>();

  expandedId: string = '';

  constructor(private dataService: DataService) { }

  toggleExpandableSymbol(id: string): void {
    this.expandedId = this.expandedId === id ? '' : id;
  }

  // addSubTarget(targetId: string) {
  //   console.log(`runningNo: ${this.runningNo}, target ID: ${targetId}`);
  //   const mockSubTarget: SubTarget = {
  //     "Sub Target ID": "2",
  //     "Name": "2",
  //     "Index": "2",
  //     "Value": "2",
  //     "Unit": "2",
  //     "Current Value": "2",
  //     "Start Month": "2",
  //     "Start Year": "2",
  //     "Finish Month": "2",
  //     "Finish Year": "2"
  //   }
  //   const target = this.dataService.addSubTarget(this.runningNo, targetId, mockSubTarget);
  //   this.dataSource = target.kids.has_sub_targets.records;
  // }

  // addMethod(subTargetId: string) {
  //   console.log(`runningNo: ${this.runningNo}, target ID: ${this.targetId}, sub target ID: ${subTargetId}`);
  //   const mockMethod: Method = {
  //     "Method ID": "2",
  //     "Name": "2",
  //     "Jan": "2",
  //     "Feb": "2",
  //     "Mar": "2",
  //     "Apr": "2",
  //     "May": "2",
  //     "Jun": "2",
  //     "Jul": "2",
  //     "Aug": "2",
  //     "Sep": "2",
  //     "Oct": "2",
  //     "Nov": "2",
  //     "Dev": "2",
  //     "Owner": "2",
  //   }
  // }

  ngOnInit(): void {
  }
}
