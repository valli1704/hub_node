module.exports = (sequelize,Sequelize)=>{
    const _users = sequelize.define('users',{
        id :{
            type:Sequelize.INTEGER,
           allowNull : false,
           autoIncrement :true,
           primaryKey:true,
           field:'id'
        },
        userName:{
            type:Sequelize.CHAR(20),
            allowNull : false,
            field:'user_name'
        },
        email:{
            type:Sequelize.CHAR(45),
            allowNull : false,
            field:'email'
        },
        password:{
            type:Sequelize.CHAR(100),
            allowNull : false,
            field:'password'
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
    return _users;
}
