module.exports = (sequelize,Sequelize)=>{
    const country = sequelize.define('country',{
        id :{
            type:Sequelize.INTEGER,
           allowNull : false,
           autoIncrement :true,
           primaryKey:true,
           field:'id'
        },
        countryCode:{
            type:Sequelize.CHAR(20),
            allowNull : false,
            field:'country_code',
        },
        countryName:{
            type:Sequelize.CHAR(200),
            allowNull : false,
            field:'country_name',
        },
        countryImage:{
            type:Sequelize.TEXT,
            allowNull : false,
            field:'country_image',
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
    return country;
}