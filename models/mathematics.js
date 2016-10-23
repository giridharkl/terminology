module.exports = function(sequelize, DataTypes){
    return sequelize.define("mathematics", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: DataTypes.STRING(100),
        finnish: DataTypes.STRING(100),
        meaning: DataTypes.STRING(2000)
    },{
        timestamps: false,
        freezeTableName: true
    });
};
