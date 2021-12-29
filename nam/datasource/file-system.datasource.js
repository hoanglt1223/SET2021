const fs = require('fs');

function FileSystemDataSource(DB_Folder_Path) {
    this.DataBase = undefined;
    this.readFile = (DB_Collections) => {
        fs.readFile(`../${DB_Folder_Path}/${DB_Collections}`, 'utf8', (error, data) => {
            if (error){
                console.log('ERROR');
            }
            else {
                this.DataBase = data;
            }
        });
        return this.DataBase;
    }

    this.writeFile = (DB_Collections, data) => {
        fs.writeFile(`../${DB_Folder_Path}/${DB_Collections}`, data, {}, (error) => {
            if (error){
                console.log('ERROR');
            }
            else {
                console.log('Updated Data');
            }
        })
    }
}

module.exports = FileSystemDataSource;
