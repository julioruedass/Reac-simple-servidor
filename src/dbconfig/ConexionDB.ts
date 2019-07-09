import mysql from 'promise-mysql';
import keys from './keys';


const cnn = mysql.createPool(keys.config);

cnn.getConnection()
    .then(connection => {
        cnn.releaseConnection(connection);
        console.log('MySQL is running');
    });

export default cnn;