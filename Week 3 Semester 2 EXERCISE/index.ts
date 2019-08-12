import axios from 'axios';

var url = "https://jsonplaceholder.typicode.com/posts";

interface PostInterface {
    userId: number;
    id: number;
    title: string;
    body: string;
}

axios.get<PostInterface[]>('https://jsonplaceholder.typicode.com/posts')
.then(function(response) {
    let data = response.data;

    for (var i = 0; i < data.length; i++) {
        let _id = data[i].id;
        let _title = data[i].title;

        console.log(_id);
        console.log(_title);
    }
})


