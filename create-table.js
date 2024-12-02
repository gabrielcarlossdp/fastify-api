import { sql } from "./db.js";

sql`
    CREATE TABLE videos (
        id varchar(255) PRIMARY KEY,
        title varchar(255) NOT NULL,
        description text NOT NULL,
        duration interval NOT NULL
    );
`;
