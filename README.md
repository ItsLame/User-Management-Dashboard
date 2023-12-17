## Tech stack
- TypeScript
- Next.js
- Express.js
- NextUI
- PostgreSQL

## Setting up the local database
### macOS Terminal
Go to `backend` folder and run `psql umd < umd.pgsql`

### Manually
1. Create a database called `umd`
2. Create a table called `users` with the following columns:
   - `username character varying(44)`
      - Set this as unique
   - `firstname character varying(48)`
   - `lastname character varying(55)`
   - `user_id integer NOT NULL`
     - Set this to primary key
     - This is the serial
    
### Others
If user is not `dummy` and database name is not `umd`, go to `backend/db.js` and change the following code:
```javascript
const db = new Pool({
  user: "dummy",     // change this line
  database: "umd",   // change this line
  host: "localhost",
  port: 5432,
});
```

## How to run
Run both backend and frontend.

### Backend
1. Inside of the `backend` folder do `npm install`
2. Then do `nodemon index.js` or `node index.js`
   
### Frontend
1. Inside of the `frontend` folder do `npm install`
2. Then do `npm run dev`
