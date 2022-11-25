import knex from "knex";
import dotenv from "dotenv"


dotenv.config()

// export const connection = knex({
//     client:"mysql",
//     connection:{
//         host:'35.226.146.116',
//         port:3306,
//         user: "4415998-renato-alexandrini",
//         password: "WmxzRKns/kJxBtW+0FbR",
//         database:"jbl-4415998-renato-alexandrini",
//         multipleStatements:true
//     }
// }
// );
export const connection = knex({
    client:"mysql",
    connection:{
        host:process.env.DB_HOST,
        port:3306,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_SCHEMA,
        multipleStatements:true
    }
}
);