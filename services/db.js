const rest = new(require('rest-mssql-nodejs'))({
    user:"yosh",
    password: "POC34!esc",
    server: "yosh.database.windows.net",
    database: 'Veterinaria',
    port: 1433,
    encrypt: true, 
    opcion: {
        encrypt: true
    }
})

module.exports = {
    rest
}