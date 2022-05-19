import { Movies } from "./resource";

function addLike(item){
    const obj = new Movies();
    const payload = { "item_id": item};
    obj.addLike(payload).then((response)=>{
        console.log(response);
    });
}

export default addLike;