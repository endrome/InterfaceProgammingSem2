import axios from 'axios';

var url = "https://jsonplaceholder.typicode.com/users";

var axio ;

axios ({
    method: 'get',
    url: url,
    responseType: 'json'
})
.then(function(response) {
    console.log(response);
    var acer = response.data;


    var userArr: UserInterface[] = [];
    for(var i = 0; i < acer.length, i++;) {

        let _id = acer[i].id;
        let _username = acer[i].username;
        userArr.push({id: _id, username: _username})
        //console.log(acer[i].username)
        // let user1: User = new User(acer[i].id, acer[i].username);
    }

    for(var i = 0; i < userArr.length; i++) {
        console.log(userArr[i].id)
    }


})

axios.get(url).then(function(response) {
    console.log(response);
})

class User {
    private id: number;
    private username: string;

    constructor(id: number, username: string) {
        this.id = id;
        this.username = username;
    }
}

let user1: User = new User(100, "yeet");

interface UserInterface {
    id: number;
    username: string;
}
