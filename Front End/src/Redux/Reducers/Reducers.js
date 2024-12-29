import RedBrand from "./RedBrand";
import RedCategory from "./RedCategory";

const { combineReducers } = require("redux");
const { default: RedAuthAdmin } = require("./RedAuthAdmin");
const { default: RedAuthClient } = require("./RedAuthClient");
const { default: RedProducts } = require("./RedProducts");




const Reducers = combineReducers({
  AuthClient: RedAuthClient,
  AuthAdmin: RedAuthAdmin,
  Products: RedProducts,
  Category: RedCategory,
  Brand: RedBrand,

})


export default Reducers

