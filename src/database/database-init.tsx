import { DatabaseConnection } from './database-connection'

let db = null;

export default class DatabaseInit {
    
    constructor() {

        console.log('construtor');

        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
            console.log('Foreign keys turned on')
        );
        this.InitDb()
    }

    private InitDb() {

        var sql = [
            `DROP TABLE IF EXISTS table_questionario;`,
            `create table if not exists table_questionario (questionario_id integer primary key autoincrement,questionario_name text);`
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }

}