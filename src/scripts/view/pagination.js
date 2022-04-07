import { DOMutils } from "../utils/domUtils.js";

let URL = 'https://randomuser.me/api/?seed=abc'

export class Pagination {

    async getUserDetails(pageNum, URL) {
        URL = URL + '&page=' + pageNum + '&results=10';
        const users = await fetch(URL);
        const userDetails = await users.json();
        return userDetails;
    }

    async changePage(pageNum) {
        const userDetails = await this.getUserDetails(pageNum, URL);
        const dom = new DOMutils();

        dom.updateUsersOnDisplay(userDetails);
    }

}