import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { AppService } from '../../shared/services/app.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public user: any;

    constructor(private appService: AppService) { }

    ngOnInit(): void {
        this.user = this.appService.user;
    }

    logout() {
        this.appService.logout();
    }

    formatDate(date: any) {
        return DateTime.fromISO(date).toFormat('dd LLL yyyy');
    }
}
