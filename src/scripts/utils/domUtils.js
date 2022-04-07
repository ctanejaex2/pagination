import { User } from "../model/user.js";
import { Pagination } from "../view/pagination.js";
const list = document.getElementById('users_list')

export class DOMutils {
    createPageNavButtons(numOfPages) {
        for (let i = 1; i <= numOfPages; i++) {
            this.createNavButtons(i);
        }
    }

    populateUsersDisplay(userDetails) {
        for (let i = 0; i < userDetails.results.length; i++) {
            const listItem = document.createElement('li');
            listItem.setAttribute('id', `list_user_${i}`);

            const imageView = document.createElement('img');
            imageView.setAttribute('id', `image_user_${i}`);
            imageView.src = userDetails.results[i].picture.thumbnail;
            listItem.appendChild(imageView);

            const nameView = document.createElement('p');
            nameView.setAttribute('id', `name_user_${i}`);
            const name = new User().getFullName(userDetails.results[i].name);
            nameView.textContent = name;
            listItem.appendChild(nameView);

            const genderView = document.createElement('p');
            genderView.setAttribute('id', `gender_user_${i}`);
            genderView.textContent = userDetails.results[i].gender;
            listItem.appendChild(genderView);

            list.appendChild(listItem);
        }
    }

    createNavButtons(pageNum) {
        const button = document.createElement('button');
        button.textContent = pageNum;
        button.addEventListener('click', () => {
            new Pagination().changePage(pageNum);
        });
        button.setAttribute('id', `user_list_nav_${pageNum}`);
        list.appendChild(button);
    }

    updateUsersOnDisplay(userDetails) {
        for (let i = 0; i < userDetails.results.length; i++) {
            const imageView = document.getElementById(`image_user_${i}`);
            imageView.src = userDetails.results[i].picture.thumbnail;

            const nameView = document.getElementById(`name_user_${i}`);
            const name = new User().getFullName(userDetails.results[i].name);
            nameView.textContent = name;

            const genderView = document.getElementById(`gender_user_${i}`)
            genderView.textContent = userDetails.results[i].gender;
        }
    }
}