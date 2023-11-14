const Division = require('../model/division');
const User = require('../model/user');

const my_db = require('./connect_db');

const divisi_itc = [
  {name:"WEB DEV"},
  {name:"MOBILE DEV"},
  {name:"PM"},
  {name:"INKADIV"},
  {name:"UI/UX"},
]

Division.hasMany(User);
User.belongsTo(Division);

const association = async()=>{
  try {
    await my_db.sync({force: false});
    // await Division.bulkCreate(divisi_itc);
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = association;