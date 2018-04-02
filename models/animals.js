const animals = [{
    id: 1,
    name: "Wilbur",
    breed: "Pig"
},{
    id: 2,
    name: "Glooey",
    breed: "Horse"
}];

function list() {
    return Promise.resolve(animals);
};

function read(id) {
    return Promise.resolve(animals[id - 1]);
};

function create(animal) {
    animals.push(animal);
    return Promise.resolve(animal);
};

function update(id, animal) {
    animals[id - 1] = animal;
    return Promise.resolve(animals);
};

function remove(id) {
    animals[id - 1] = null;
    return Promise.resolve(); // You return nothing from a delete request
};

module.exports = {
    list,
    read,
    create,
    update,
    remove // Can not use "delete" as it is a keyword
};
