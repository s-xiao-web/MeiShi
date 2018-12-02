'use strict';

module.exports = {
  // queryInterface   提供了操作数据库结构的方法，比如添加字段，修改字段，删除字段
  // 也包含了一些操作数据的方法， 同上

  // Sequelize： 是框架的顶层对象，提供了一些框架中需要使用 数据和 方法

  up: (queryInterface, Sequelize) => {

    // 这个方法： 用来创建表
    return queryInterface.createTable('category', {
      id: {
        type: Sequelize.INTEGER, // 整数类型
        primaryKey: true, // 是否为主键
        autoIncrement: true, // 自动增长
        allowNull: false // 是否为空
      },
      name: {
        type: Sequelize.STRING, // string 可变长的字符串
        allowNull: false,
        defaultValue: ''
      },
      pid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updateAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }, {
      tableName: 'category',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin'
      })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      // return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('category');
  }
};
