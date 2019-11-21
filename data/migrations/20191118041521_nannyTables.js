exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('email', 128).unique().notNullable();
      tbl.string('password', 128).notNullable();
      tbl.boolean('is_admin').notNullable();
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('parents', tbl => {
        tbl.increments();
        tbl.string('fname', 128).notNullable();
        tbl.string('lname', 128);
        tbl.string('email', 128).notNullable().unique();
        tbl.string('password', 128).notNullable();
        tbl.string('city', 128).notNullable();
        tbl.string('phone', 128);
        tbl.timestamp('created_at').defaultTo(knex.fn.now());
        tbl.integer('parent_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
    })
    .createTable('nannies', tbl => {
        tbl.increments();
        tbl.string('email', 128).notNullable().unique();
        tbl.string('password', 128).notNullable();
        tbl.string('fname', 128).notNullable();
        tbl.string('lname', 128);
        tbl.boolean('can_drive').notNullable();
        tbl.integer('hourly_rates').notNullable();
        tbl.string('city', 128).notNullable();
        tbl.string('phone', 128);
        tbl.string('img', 128);
        tbl.string('fromdate', 128).notNullable();
        tbl.string('todate', 128).notNullable();
        tbl.timestamp('created_at').defaultTo(knex.fn.now());
        tbl.integer('nanny_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
    })
    .createTable('todos', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 128);
        tbl.boolean('completed').notNullable();
        tbl.string('duration', 128).notNullable();
        tbl.timestamp('created_at').defaultTo(knex.fn.now());
        tbl.integer('parent_id')
        .unsigned()
        .notNullable()
        .references('parent_id')
        .inTable('parents');
        tbl.integer('nanny_id')
        .unsigned()
        .notNullable()
        .references('nanny_id')
        .inTable('nannies')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('todos')
    .dropTableIfExists('nannies')
    .dropTableIfExists('parents')
    .dropTableIfExists('users');
  };