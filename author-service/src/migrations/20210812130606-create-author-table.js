'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('author', {
      author_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      author_name: {
        type: Sequelize.STRING,
        allowNull: false    
      },
      author_email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author_phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateDeleted: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('author');
  }
};
