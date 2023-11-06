module.exports = (sequelize,Sequelize)=>{
    const _business = sequelize.define('business',{
        id :{
            type:Sequelize.INTEGER,
           allowNull : false,
           autoIncrement :true,
           primaryKey:true,
           field:'id'
        },
        userId:{
            type:Sequelize.INTEGER,
            allowNull : false,
            field:'user_id',
            references:{
                model:"users",
                key:"id"
              }
        },
        businessName:{
            type:Sequelize.CHAR(20),
            allowNull : false,
            field:'business_name'
        },
       
        businessTypeId:{
            type:Sequelize.INTEGER,
            allowNull : false,
            field:'business_type_id',
            references:{
                model:"business_types",
                key:"id"
              }
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
        stateId:{
            type:Sequelize.INTEGER,
            allowNull : false,
            field:'state_id',
            references:{
                model:"states",
                key:"id"
              }
        },
        city:{
            type:Sequelize.CHAR(20),
            allowNull : false,
            field:'city',
            
        },
        pincode:{
            type:Sequelize.INTEGER,
            allowNull : false,
            field:'pincode',
            
        },
        
        phoneNumber:{
            type:Sequelize.CHAR(20),
            allowNull : true,
            field:'phone_number',
            
        },
        latitude:{
            type:Sequelize.DOUBLE,
            allowNull : false,
            field:'latitude',
            
        },
        longitude:{
            type:Sequelize.DOUBLE,
            allowNull : false,
            field:'longitude',
            
        },
       
        emailId:{
            type:Sequelize.CHAR(45),
            allowNull : true,
            field:'email_id',
            
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
    address:{
        type:Sequelize.STRING(255),
        allowNull : true,
        field:'address',
        
    },
    description:{
        type:Sequelize.STRING(255),
        allowNull : true,
        field:'description',
        
    },
    websiteUrl:{
        type:Sequelize.STRING(255),
        allowNull : true,
        field:'website_url',
        
    },
    logoImg:{
        type:Sequelize.STRING(255),
        allowNull : true,
        field:'logo_img',
        
    },
    headerImg:{
        type:Sequelize.STRING(255),
        allowNull : true,
        field:'header_img',
        
    },
    businessImg:{
        type:Sequelize.STRING(255),
        allowNull : true,
        field:'business_img',
        
    },
    })
    return _business;
}
