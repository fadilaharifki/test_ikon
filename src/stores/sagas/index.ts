import {all} from 'redux-saga/effects';
import dataListSaga from './dataListSaga';

export default function* rootSaga() {
  yield all([dataListSaga()]);
}
