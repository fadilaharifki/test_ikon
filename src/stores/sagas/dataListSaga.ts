import {call, put, takeLatest} from 'redux-saga/effects';
import {DataInterface} from '../../interface/ListInterface';
import {fetchDataList, fetchDataListSuccess} from '../slices/dataListSlice';
import {getDataServiceAPI} from '../services/dataService';

function* handelFetchListData(): Generator<any, void, DataInterface[]> {
  try {
    const data = yield call(getDataServiceAPI);
    yield put(fetchDataListSuccess(data));
  } catch (error) {}
}

export default function* dataListSaga() {
  yield takeLatest(fetchDataList.type, handelFetchListData);
}
