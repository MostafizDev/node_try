

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'Blog',
      [
        {
            title: 'New Blog',
            description: 'User',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            title: 'New Blog 2 ',
            description: 'User',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),
  
    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Blog', null, {}),
  };
  