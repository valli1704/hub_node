'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('countries', 'country_image', {
      type:Sequelize.TEXT,
            allowNull : false,
            field:'country_image',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('countries', 'country_image');
  }
};
