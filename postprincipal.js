const Sequelize = require('sequelize')
const sequelize = new Sequelize('expressh', 'root', 'lgrs135792', {
    host:"localhost",
    dialect: 'mysql'
})

const infos = sequelize.define('infos', {
    host: {
        type: Sequelize.STRING
    },
    port: {
        type: Sequelize.INTEGER
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
    });

    const tabelas = sequelize.define('tabelas', {
    comando: {
        type: Sequelize.STRING
    },
    horario: {
        type: Sequelize.STRING
    },
    atividade: {
        type: Sequelize.STRING
    },
    usuarios: {
        type: Sequelize.STRING
    },
    cargamedia: {
        type: Sequelize.STRING
    }
})

    
    //tabelas.sync({force:true})
    module.exports = {
        infos: infos,
        tabelas: tabelas
    }