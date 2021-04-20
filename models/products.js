//Import sequelize
import { Sequelize } from "sequelize";

//Import connection
import db from "../config/database.js";

// Init Datatypes
const { DataTypes } = Sequelize;

// Define schema
const Product = db.define('products', {
    // Define attributes
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    }
},{
    // Freeze Table Name
    freezeTableName: true
});

// Export model Product
export default Product;