import Mock from 'mockjs';
import banner from './banner.json';
import floor from './floor.json';
// 1. 创建mock文件夹
// 2. 准备json数据（mock文件夹中创建相应的json文件，）
// 3. 创建mockServer.js通过mockjs插件实现模拟数据
// 4. mockServer.js文件在入口文件中引入（至少需要执行一次，才能模拟数据）
Mock.mock('/mock/banner', {code: 200, data: banner});
Mock.mock('/mock/floor', {code: 200, data: floor});
