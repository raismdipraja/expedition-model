/*  gunakan salah satu untuk latihan, kita buat 3 route : 
    1. region-raw : menggunakan raw query
    2. region-seq : menggunakan method sequelize
    3. region-ctrl : bisnis logic dipisah di folder controller
*/


import expedition from './expedition';
import expeditionRoute from './expeditionRoute';
import apiExpedition from './apiExpeditionRoute';


export default {
    expedition,
    expeditionRoute,
    apiExpedition
};
