import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from '../shared/interfaces/nav-item.interface';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.scss']
})
export class AppmenuComponent implements OnInit {
  @Input() menu: any = [
    {
      name: 'dashboard',
      children: [
        {
          name: 'dashboard1',
          path: ['/dashboard1'],
        }, 
        {
          name: 'dashboard2',
          path: ['/dashboard2'],
        },
        {
          name: 'dashboard3',
          path: ['/dashboard3'],
        },
      ]
    },
    {
      name: 'ข้อมูลเป้าหมาย',
      children: [
        {
          name: 'ข้อมูลเป้าหมายของฉัน',
          path: ['/target-dashboard'],
        },
        {
          name: 'ข้อมูลเป้าหมายฉบับเดิม',
          path: ['/1']
        },
        {
          name: 'สร้างเป้าหมายใหม่',
          path: ['/new-target']
        }
      ]
    },
    {
      name: 'ผลการดำเนินงานตามเป้าหมาย',
      children: [
        {
          name: 'บันทึกผลการดำเนินงาน',
          path: ['/3'],
        },
        {
          name: 'สาเหตุและการแก้ไขสิ้งที่ไม่เป็นไปตามเป้าหมาย',
          path: ['/4']
        },
        {
          name: 'ข้อมูลผลการดำเนินงาน',
          path: ['/5']
        }
      ]
    },
    {
      name: 'Report',
      children: [
        {
          name: 'Standard Form',
          path: ['/6'],
        },
        {
          name: 'รายงานผลการดำเนินงานประจำปี',
          path: ['/7']
        },
        {
          name: 'รายงานติดตามการขึ้นทะเบียนเป้าหมาย',
          path: ['/8']
        },
        {
          name: 'รายงานติดตามการบันทึกผลและการติดตามปิดสาเหตุ',
          path: ['/9']
        }
      ]
    },
    {
      name: 'Admin Menu',
      children: [
        {
          name: 'Site',
          path: ['/10'],
        },
        {
          name: 'Division',
          path: ['/11']
        },
        {
          name: 'Department',
          path: ['/12']
        },
        {
          name: 'Organizations',
          path: ['/13']
        },
        {
          name: 'Document Control',
          path: ['/14']
        },
        {
          name: 'Users Maintenancel',
          path: ['/15']
        }
      ]
    },
    {
      name: 'Super Admin Menu',
      children: [
        {
          name: 'Group',
          path: ['/16'],
        },
        {
          name: 'Roles',
          path: ['/17']
        },
        {
          name: 'Menu',
          path: ['/18']
        },
        {
          name: 'Group Menu',
          path: ['/19']
        },
        {
          name: 'Document Permission',
          path: ['/20']
        },
        {
          name: 'Workflow Management',
          path: ['/21']
        },
        {
          name: 'Report Settings',
          path: ['/22']
        },
        {
          name: 'Lookup',
          path: ['/23']
        },
        {
          name: 'Data Management',
          path: ['/24']
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
