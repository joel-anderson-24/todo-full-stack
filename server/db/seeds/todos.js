/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'Wash the car', priority: 2, completed: false },
    { id: 2, task: 'Mow the lawn', priority: 1, completed: true },
    { id: 3, task: 'Fold the washing', priority: 4, completed: false },
  ])
}
