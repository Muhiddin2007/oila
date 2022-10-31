import axios from 'axios';
import dayjs from 'dayjs';

const API = `https://api.oilakredit.uz/api/v1`;

export const getSelects = async () => {
  return await axios.get(`${API}/public/lists/directions`);
};
export const getChildren = async (id, key) => {
  return await axios.get(
    `${API}/public/lists/purposes?parent_id=${id}&key=${key}`,
  );
};
export const getField = async (type, key) => {
  return await axios.get(
    `${API}/public/lists/programs?type_id=${type}&keys=${key},2,90,93,97,92&locale=uz`,
  );
};
export const Target = async id => {
  return await axios.get(`${API}/public/lists/purposes?parent_id=${id}&key=2`);
};
export const Dastur = async key => {
  return await axios.get(
    `${API}/public/lists/programs?type_id=2&keys=${key},2,90,93,97,92&locale=uz`,
  );
};
export const getBusiness = async () => {
  return await axios.get(`${API}/landing/businessplans?lang=2`);
};
export const getNews = async () => {
  return await axios.get(`${API}/landing/posts?lang=2`);
};
export const postAriza = async (series, number, birth) => {
  return await axios.get(
    `${API}/public/tax/passport?series=${series}&number=${number}&birth_date=${dayjs(
      birth,
    ).format('YYYY-MM-DD')}`,
  );
};
export const getCompany = async (stir, date) => {
  return await axios.get(
    `${API}/public/tax/organization?tin=${stir}&reg_date=${dayjs(date).format(
      'YYYY-MM-DD',
    )}`,
  );
};
export const getPayment = async (credit, month, preveligious, date) => {
  return await axios.get(
    `${API}/public/credit/peyment_graph?asum=${credit}&month=${month}&percent=14&begin_date=${date}&privileged_month=${preveligious}`,
  );
};
export const getCity = async () => {
  return await axios.get(`${API}/public/lists?type_id=1`);
};

export const getDistrict = async id => {
  return await axios.get(`${API}/public/lists?type_id=2&parent_id=${id}`);
};
export const getLocation = async district => {
  return await axios.get(`${API}/public/lists/mahalla?parent_id=${district}`);
};
export const getNeighborhood = async id => {
  return await axios.get(
    `https://api.oilakredit.uz/api/v2/public/mahalla/streets?mahalla_id=${id}`,
  );
};

export const getBanks = async (parentId, cityId) => {
  return await axios.get(
    `https://api.oilakredit.uz/api/v2/public/bank/mfo?parent_id=${parentId}&region_id=${cityId}`,
  );
};
export const getList = async parentId => {
  return await axios.get(
    `https://api.oilakredit.uz/api/v2/public/lists/purposes?parent_id=${parentId}&key=1`,
  );
};
export const getType = async key => {
  return await axios.get(
    `https://api.oilakredit.uz/api/v2/public/lists/programs?type_id=1&keys=${key}`,
  );
};

export const getSpends = async parentId => {
  return await axios.get(
    `${API}/public/lists/costs?parent_id=${parentId}&locale=la&tag=1`,
  );
};
export const getDimensions = async () => {
  return await axios.get(`${API}/public/lists?type_id=26`);
};
export const getIncomeTypes = async id => {
  return await axios.get(
    `${API}/public/lists?type_id=2004&parent_id=${id}&locale=la`,
  );
};
export const getCountries = async () => {
  return await axios.get(`${API}/public/lists?type_id=38`);
};
export const checkCredit = async (num, date) => {
  return await axios.get(
    `${API}/public/application?doc_num=${num}&doc_date=${dayjs(date).format(
      'YYYY-MM-DD',
    )}`,
  );
};
