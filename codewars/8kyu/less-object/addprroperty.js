//Write a function that adds a named property to an object. It must be possible to set the property to a new value.
//  If the property already exists on the object, and error should be thrown.
//Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность установить свойству новое значение.
//  Если свойство уже существует в объекте, должна возникнуть ошибка.


function addProperty(obj, prop, value) {
    // Проверяем, существует ли свойство в объекте
    if (obj.hasOwnProperty(prop)) {
        // Если свойство уже существует, выбрасываем ошибку
        throw new Error(`Свойство '${prop}' уже существует в объекте.`);
    }

    // Если свойства нет, добавляем его
    obj[prop] = value;
}