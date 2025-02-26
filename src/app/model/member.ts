import { HotObservable } from "rxjs/internal/testing/HotObservable";

export class Member {
    name : String;
    email: String;
    mobileNo: String;
    hobbies: String[];

    constructor(name: string, email: string, mobileNo: string, hobbies: string[]) {
        this.name = name;
        this.email = email;
        this.mobileNo = mobileNo;
        this.hobbies = hobbies;
    }
}
