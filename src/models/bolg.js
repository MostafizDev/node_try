module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define(
      'Blog',
      {
        title: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
      },
    //   {
    //     defaultScope: {
    //       attributes: { exclude: ['password', 'verifyToken', 'isAdmin'] },
    //     },
    //     scopes: {
    //       withSecretColumns: {
    //         attributes: { include: ['password', 'verifyToken', 'isAdmin'] },
    //       },
    //     },
    //   },
    );
    Blog.associate = function (models) {
      // associations can be defined here
    };
    return Blog;
  };
  