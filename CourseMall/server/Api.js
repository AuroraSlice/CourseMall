const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {
  getValue(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue;
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setValue(req, res, next) {
    console.log(req.body);
    var id = req.body.id, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue;
      connection.query(sql, [name, id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },

  getUserNumber(req, res, next){
    var UserNumber = req.query.Name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getUserNumber;
      connection.query(sql, [UserNumber], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },


  getImgUrl(req, res, next){
    //var ssr = req.query.ssr;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getImgUrl;
      connection.query(sql, [], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },


  getOrder(req, res, next){
    //var ssr = req.query.ssr;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getOrder;
      connection.query(sql, [], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },

  

  deleteOrder(req, res, next){
    
    var id = req.body.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.deleteOrder;
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },


    getMyStudy(req, res, next){
    //var ssr = req.query.ssr;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getMyStudy;
      connection.query(sql, [], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  
}


