import app from './app';
import { dbConnection } from './database';


dbConnection();

app.listen(3000)
console.log('server started on port 3000');
