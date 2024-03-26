var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'jina',
    age: 40,
    hobbies: ['sports', 'cooking'],
    role: Role.READ_ONLY
};
if (person.role === Role.READ_ONLY) {
    console.log('is READ_ONLY', Role.READ_ONLY);
}
var favoriteActivities;
favoriteActivities = ['Sports', 5];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log('favoriteActivities:', favoriteActivities);
