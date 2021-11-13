const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 3035;         // 개발용 환경 설정
const config = require('../config/config')[env];      // Sequelize 설정 파일
const db = {};

// Sequelize 인스턴스화
const sequelize = new Sequelize(config.database, config.username, config.password, config);  

db.Sequelize = Sequelize;  // db객체에 Sequelize 패키지 넣기
db.sequelize = sequelize;  // db객체에 Sequelize 인스턴스 넣기

module.exports = db;  // 모듈화