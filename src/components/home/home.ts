import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'home',
    styleUrls: ['home.css'],
    templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {
    name: string = "Josh";
    showHelp: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
        this.getNameFromHref();
    }

    capitalize(str:string) {
        return str[0].toUpperCase() + str.slice(1);
    }

    getNameFromHref(){
        let href: string = window.location.href;
        if (href.indexOf("localhost") == -1) {
            let parts: string[] = href.split('/');
            let name = parts[2].substr(0, parts[2].indexOf("is-correct.com") - 1);
            let names = name.split("-");
            this.name = "";
            names.forEach(n => this.name += this.capitalize(n) + " ");
        }
    }
}
