import { Component } from '@angular/core';
import { AccountService } from '../../_services/account.service';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent {
    account: any; // Declare without initializing

    constructor(private accountService: AccountService) {
        this.account = this.accountService.accountValue; // Assign inside constructor
    }
}
