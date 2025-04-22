import {DataInterface} from '../../interface/ListInterface';
import api from './api';

export const getDataServiceAPI = async (): Promise<DataInterface[]> => {
  const res = await api.get('/posts');

  return res.data;
};
