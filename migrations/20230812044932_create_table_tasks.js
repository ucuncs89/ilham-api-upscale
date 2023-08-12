exports.up = function (knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.text("description").nullable();
    table.boolean("is_complete").notNullable().defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTable("tasks");
};
