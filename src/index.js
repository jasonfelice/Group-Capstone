import './style.css';
import './modules/app.js';
import displayData from './modules/loadData';
import addLike from './modules/addLike';
import displayLikes from './modules/viewLikes';

window.onload = displayData().then(()=>{
    displayLikes();
    const likeIcon = document.querySelectorAll('.like-icon');
    likeIcon.forEach((e)=>{
        const item = e.getAttribute('id');
        e.addEventListener('click',  ()=>{
            addLike(item);
        });
    });
});

