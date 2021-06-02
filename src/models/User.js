const { DataTypes, Model } = require('sequelize');
import connection from '../config/db'

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    sequelize: connection,
    modelName: 'users',
    timestamps: false
});

export default User
