import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService } from "./data.service";

@Injectable()
export class FollowersService extends DataService {
    constructor(http: HttpClient) {
        super('https://api.github.com/users/mosh-hamedani/followers', http);
    }
}