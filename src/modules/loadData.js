import { Movies } from "./resource";

async function displayData(){
   const list = document.querySelector('.list');
   const obj = new Movies();
   await obj.getData().then((response)=>{
       let itemList = '';
       response.forEach(element => {
           itemList += `<li class="list-item">
                          <img class="list-img" src="${element?.image?.original}" alt="Episode ${element.episodeOrder}">
                            <div class="series-title">
                                <p>Episode ${element.episodeOrder}</p>
                                <a href="#" class="like-icon" id="item${element.id}"> <span>0 likes</span>  </a>
                            </div>
                            <div class="buttons">
                                <button class="comments-button" type="button" id="${element.id}">Comments</button>
                                <button type="button" >Reservation</button>
                            </div>
                        </li>`;
       });
       list.innerHTML = itemList;
   });
}

export default displayData;