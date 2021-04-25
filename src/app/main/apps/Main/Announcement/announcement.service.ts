import { Injectable, Inject, EventEmitter, Output } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { GlobalService } from '@fuse/services/globals.service';
import { environment } from 'environments/environment';
import { Http, Response, HttpModule } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AnnouncementService implements Resolve<any>{
    widgets = [];
    industryDatas = [];

    onAnnouncementChanged: BehaviorSubject<any>;

    isub: any;
    announcementData: any[];
    createdBy: any;

    constructor(
        private http: Http,
        private global: GlobalService) {
        var P = this;
        this.onAnnouncementChanged = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        var P = this;
        return new Promise<void>((resolve, reject) => {
            Promise.all([
                P.getAnnounceDetail(),
            ]).then(() => { resolve(); },
                reject
            );
        });
    }

    getAnnounceDetail(): Promise<any> {

        var P = this;
        return new Promise((resolve, reject) => {
            P.http.post(environment.nodeServerURL + "/announcement/getAll", {
                isActive: true,
            }).subscribe(res => {
                const result = res.json();
                P.announcementData = [];

                P.announcementData = result;
                P.onAnnouncementChanged.next(P.announcementData);
                resolve(P.announcementData);
            }, error => {
                P.announcementData = [];
                reject(P.announcementData);
            });
        });
    }

    addAnnounceDetail(item: any): Promise<any> {
        var P = this;
        return new Promise((resolve, reject) => {
            P.http.post(environment.nodeServerURL + "/announcement/add", {
                subject: item.subject,
                event_date: item.time,
                expires_on_date: item.expiryDate,
                location: item.location,
                notify_to_array: item.notifyToArray,
                accessory_name: item.accessoryName,
                description: item.description,
                createdBy: "Admin"
            }).subscribe(res => {
                const result = res.json();
                if (result.status == 200) {
                    P.getAnnounceDetail().then((result: any) => {
                        resolve(res.json());
                    }).catch((error: any) => {
                        resolve(res.json());
                    });
                }
                else {
                    resolve(res.json());
                }
            }, error => {
                reject(error);
            });
        });
    }



}
