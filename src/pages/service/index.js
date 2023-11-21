import Config from 'react-native-config';
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';
import FileUpload from './FileUpload';

// GET
const getClinics = TOKEN => Get('close/clinics', false, TOKEN);
const getExperts = TOKEN => Get('close/experts', false, TOKEN);
const getCustomers = (id, TOKEN) =>
  Get('close/clinic-customer?clinic_id=' + id, false, TOKEN);
const getAvaiblelities = (clinic_customer_id, date, TOKEN) =>
  Get(
    'close/availabilities?clinic_customer_id=' +
      clinic_customer_id +
      '&date=' +
      date,
    false,
    TOKEN,
  );
const getHistory = (id, TOKEN) =>
  Get('close/reservation-history?customers_id=' + id, false, TOKEN);
const getHistoryDetail = (id, TOKEN) =>
  Get('close/reservation-history-details?order_id=' + id, false, TOKEN);
const getHistoryExpert = (id, TOKEN) =>
  Get('close/reservation-expert-history?expert_id=' + id, false, TOKEN);

const getProducts = TOKEN => Get('close/products', false, TOKEN);
const getProduct = (id, TOKEN) => Get('close/product/' + id, false, TOKEN);

const confirmReservation = (qr_code, TOKEN) =>
  Get('close/reservation-received?qr_code=' + qr_code, false, TOKEN);

//POST
const postReservation = (data, TOKEN) =>
  Post('close/reservation', false, data, TOKEN);

const postReservationStatus = (data, TOKEN) =>
  Post('close/reservation-status', false, data, TOKEN);

const postReservationPushOnesignal = (data, TOKEN) =>
  Post('close/reservation-pushOnesignal', false, data, TOKEN);

const login = data => Post('open/login', false, data);

// DELETE
const deleteImage = (id, token) =>
  Delete(`close/absence/requests/imageDelete/${id}`, false, token);

//  UPLOAD FILE
const visitEtc = (data, TOKEN) => FileUpload(Config.visitEtc, data, TOKEN);

const API = {
  login,
  postReservation,
  deleteImage,
  visitEtc,
  getClinics,
  getExperts,
  getCustomers,
  getAvaiblelities,
  getHistory,
  getProducts,
  getProduct,
  getHistoryDetail,
  getHistoryExpert,
  confirmReservation,
  postReservationStatus,
  postReservationPushOnesignal,
};

export default API;
