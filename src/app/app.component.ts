import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private router: Router) { }

    public title = 'Optipharma AS';
    public activeUrl: string = '';
    public backGroundClass: string = '';
    public bgOpacity: boolean = false;

    public getBackgroundClass() {
        this.bgOpacity = false;
        if (this.activeUrl.includes('forpakning')) {
            this.backGroundClass = 'default';
        } else if (this.activeUrl.includes('produktgrupper')) {
            this.backGroundClass = 'default';
        } else if (this.activeUrl.includes('om-oss')) {
            this.backGroundClass = 'bg-about';
            this.bgOpacity = true;
        } else if (this.activeUrl.includes('kontakt')) {
            this.backGroundClass = 'bg-kontakt';
            this.bgOpacity = true;
        } else if (this.activeUrl.includes('produktutvikling')) {
            this.backGroundClass = 'bg-produktutvikling';
            this.bgOpacity = true;
        } else {
            this.backGroundClass = '';
        }
    }

    public ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.activeUrl = this.router.url;
                this.getBackgroundClass();
                window.scrollTo(0, 0);
                console.log(this.activeUrl);
            }
        });
    }
}
