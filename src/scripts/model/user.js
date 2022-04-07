
export class User {
    URL = 'https://randomuser.me/api/?seed=abc'

    async getUserDetails(numOfUsers, src) {

        let request = await fetch(`${src}${numOfUsers}`);
        let response = await request.json();
        return response;
    }

    getFullName(user) {
        return user.title + ' ' + user.first + ' ' + user.last;
    }
}