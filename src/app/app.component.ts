import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public result: Observable<any>;
    public isVideoOpen: boolean;
    public videoLink: SafeResourceUrl;
    public timeout;

    constructor(private http: HttpClient,
                private sanitizer: DomSanitizer) {
    }

    public ngOnInit() {
    }

    public search(q: string, next?: string, prev?: string): void {
        window.clearInterval(this.timeout);

        let params;
        if (next) {
            console.log('next', next);
            params = new HttpParams()
                .set('maxResults', '50')
                .set('part', 'snippet')
                .set('q', q)
                .set('type', 'video,playlist')
                .set('pageToken', next);
        } else if (prev) {
            params = new HttpParams()
                .set('maxResults', '50')
                .set('part', 'snippet')
                .set('q', q)
                .set('type', 'video,playlist')
                .set('pageToken', prev);
        } else {
            params = new HttpParams()
                .set('maxResults', '50')
                .set('part', 'snippet')
                .set('q', q)
                .set('type', 'video,playlist');
        }

        this.timeout = setTimeout(() => {
            this.result = this.http.get(
                'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuk3b9Iz8W6gOo1p1am_eWY24Rxyk35cw', {params});
        }, 500);
    }

    public openVideo(id: any) {
        if (id.videoId) {
            this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(
                `https://www.youtube.com/embed/${id.videoId}?autoplay=1`);
        } else {
            this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(
                `https://www.youtube.com/embed?listType=playlist&list=${id.playlistId}`);

        }

        this.isVideoOpen = true;
    }

    public closeVideo() {
        this.isVideoOpen = false;
    }
}
