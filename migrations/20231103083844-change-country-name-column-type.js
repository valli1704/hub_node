'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.changeColumn('countries', 'country_name', {
      type: Sequelize.CHAR(200),
      // Other options such as allowNull, defaultValue, etc.
    });

     await queryInterface.changeColumn('countries', 'country_code', {
      type: Sequelize.CHAR(20),
      // Other options such as allowNull, defaultValue, etc.
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
