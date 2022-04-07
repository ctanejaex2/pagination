import { Pagination } from './view/pagination.js'
import { DOMutils } from './utils/domUtils.js'

window.addEventListener('load', async () => {

    const pagination = new Pagination();
    const userDetails = await pagination.getUserDetails(1, 'https://randomuser.me/api/?seed=abc');

    const dom = new DOMutils();
    dom.populateUsersDisplay(userDetails);
    dom.createPageNavButtons(10);



});
