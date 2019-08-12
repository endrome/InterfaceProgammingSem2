"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/users";
var axio;
axios_1["default"]({
    method: 'get',
    url: url,
    responseType: 'json'
})
    .then(function (response) {
    console.log(response);
    var acer = response.data;
    for (var i = 0; i < acer.length, i++;) {
        acer[i];
        //console.log(acer[i].username)
        // let user1: User = new User(acer[i].id, acer[i].username);
    }
});
axios_1["default"].get(url).then(function (response) {
    console.log(response);
});
var User = /** @class */ (function () {
    function User(id, username) {
        this.id = id;
        this.username = username;
    }
    return User;
}());
var user1 = new User(100, "yeet");
