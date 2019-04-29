var sqlMap = {
  getValue: 'SELECT * FROM course WHERE id = ?',
  setValue: 'UPDATE course SET name = ? WHERE id = ?',
  getUserNumber: 'SELECT * FROM Personal WHERE UserNumber = ?',
  getImgUrl: 'SELECT * FROM swiper',
  getOrder:'SELECT * FROM orderlist',
  deletOrder:'DELETE FROM orderlist WHERE id = ?',
  getMyStudy:'SELECT * FROM mystudy'
}

module.exports = sqlMap;