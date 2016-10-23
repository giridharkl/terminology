module.exports = function(sequelize, DataTypes){
    return sequelize.define("biology", {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        name: DataTypes.STRING(100),
        finnish: DataTypes.STRING(100),
        meaning: DataTypes.STRING(200)
    },{
        timestamps: false,
        freezeTableName: true
    });
};
