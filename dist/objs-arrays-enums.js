"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'jina',
    age: 40,
    hobbies: ['sports', 'cooking'],
    role: Role.READ_ONLY
};
if (person.role === Role.READ_ONLY) {
    console.log('is READ_ONLY', Role.READ_ONLY);
}
let favoriteActivities;
favoriteActivities = ['Sports', 5];
for (const hobby of person.hobbies) {
    console.log(hobby);
}
console.log('favoriteActivities:', favoriteActivities);
