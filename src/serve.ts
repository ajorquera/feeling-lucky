import path from 'path';
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
import app from './app';

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening in port ${PORT}`);
});