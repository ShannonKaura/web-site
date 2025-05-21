import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    // check loggin variables
    private messageSource = new BehaviorSubject(false);
    public currentMessage = this.messageSource.asObservable();

    private pageSource = new BehaviorSubject('default message');
    public currentPage = this.pageSource.asObservable();

    private clientSource = new BehaviorSubject({});
    public currentClient = this.clientSource.asObservable();

    constructor() { }

    // check login
    checkIfLoggedin(message: boolean) {
        this.messageSource.next(message);
    }


    // listen to the landing page
    changePage(page: string) {
        this.pageSource.next(page)
    }

    // listen to the clients landing page on talent pool
    changeClient(client: any) {
        this.clientSource.next(client)
    }

}