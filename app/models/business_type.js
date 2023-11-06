module.exports = (sequelize,Sequelize)=>{
    const businessType = sequelize.define('business_type',{
        id :{
            type:Sequelize.INTEGER,
           allowNull : false,
           autoIncrement :true,
           primaryKey:true,
           field:'id'
        },
       
        businessName:{
            type:Sequelize.STRING(20),
            allowNull : false,
            field:'business_name'
        },
        status:{
            type:Sequelize.STRING(20),
            allowNull : false,
            field:'status'
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
    return businessType;
}