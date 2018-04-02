// Seeds run in alphabetical order so prefix with 01-
exports.seed = function(knex, Promise) {
    return knex("animal").del().then(() => {
        return knex("animal").insert([{
            id: 1,
            name: "Wilbur",
            breed: "Pig"
        },{
            id: 2,
            name: "Glooey",
            breed: "Horse"
        }]);
    }).then(() => {
        return knex.raw("ALTER SEQUENCE animal_id_seq RESTART WITH 3");
    });
};
