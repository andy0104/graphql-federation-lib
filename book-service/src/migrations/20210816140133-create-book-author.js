'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('book_author', {
      book_author_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      book_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      author_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      dateDeleted: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('book_author');
  }
};
