import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'home',
    styleUrls: ['home.css'],
    templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {
    name: string = "bob";

    constructor(private router: Router) { }

    ngOnInit() {
        this.getNameFromHref();
    }

    getNameFromHref(){
        let href: string = window.location.href;
        let parts: string[] = href.split('/');
        let name = parts[2].substr(0, parts[2].indexOf("is-correct.com") - 1);
        this.name = name[0].toUpperCase() + name.slice(1);
    }
}