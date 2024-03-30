"use strict";
function merge(objA, objB) {
    console.log(objB);
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge({ name: 'jina', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = '값 없어';
    if (element.length === 1) {
        descriptionText = 'Got 1 elements.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return 'value' + obj[key];
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('JINA0');
textStorage.addItem('JINA2');
textStorage.addItem('JINA3');
textStorage.removeItem('JINA0');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title,
        courseGoal.description = description;
    courseGoal.competeUnit = date;
    return courseGoal;
}
const names = ['jina', 'zeeone'];
