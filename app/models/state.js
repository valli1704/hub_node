module.exports = (sequelize,Sequelize)=>{
    const state = sequelize.define('state',{
        id :{
            type:Sequelize.INTEGER,
           allowNull : false,
           autoIncrement :true,
           primaryKey:true,
           field:'id'
        },
        countryId:{
            type:Sequelize.INTEGER,
            allowNull : false,
            field:'country_id',
            references:{
                model:"countries",
                key:"id"
              }
        },
        stateName:{
           type:Sequelize.CHAR(200),
            allowNull : false,
            field:'state_name',
        },
        createdAt: {
                
            type: 'TIMESTAMP',
            field: 'created_at',
            allowNull: false,
            defaultValue: Sequelize.NOW,

           get() {
            return this.getDataValue("createdAt").toLocaleString("en-AU",
           {
             hour12: false,
             timeZone: "Asia/Kolkata",
           });
          },
        },
        updatedAt: {
            type: 'TIMESTAMP',
            field: 'updated_at',
            allowNull: false,
            defaultValue: Sequelize.NOW,

           get() {
            return this.getDataValue("createdAt").toLocaleString("en-AU",
           {
             hour12: false,
             timeZone: "Asia/Kolkata",
           });
        },
    },
    })
    return state;
}