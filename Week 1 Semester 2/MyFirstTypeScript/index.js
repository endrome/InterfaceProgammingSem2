var WeaponArray;
WeaponArray = ["Sword", "Staff", "Crossbow"];
var Weapon = /** @class */ (function () {
    function Weapon(name) {
        this.name = name;
    }
    return Weapon;
}());
var myWeapon1 = new Weapon(WeaponArray[0]);
var myWeapon2 = new Weapon(WeaponArray[1]);
var myWeapon3 = new Weapon(WeaponArray[2]);
console.log(myWeapon1);
console.log(myWeapon2);
console.log(myWeapon3);
var count = 0;
while (count <= 10) {
    for (var _i = 0; _i < WeaponArray.length; _i++) {
        var Weapon = WeaponArray[_i];
        console.log(weapon);
    }
    count++;
}
