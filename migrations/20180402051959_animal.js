exports.up = function(knex, Promise) {
    // helps manage table
    return knex.schema.createTable("animal", animal => { 
        // function sets up a table
        // animal has an auto incremenating id
        animal.increments();
        animal.string("name");
        animal.string("breed");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("animal");
};
