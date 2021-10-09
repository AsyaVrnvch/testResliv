import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_EMPLOYEES_FAILURE, LOAD_EMPLOYEES_SUCCESS, LOAD_EMPLOYEES_REQUEST } from './actions'
import axios from 'axios'

export function* loadData() {
    try{
        let response = yield call(axios.get,'https://reqres.in/api/users?per_page=12');
        let mass = response.data.data;
        let employees = [];
        mass.forEach(item => {
            employees.push({id:item.id,firstName:item.first_name, lastName:item.last_name});
        });

        yield put({type: LOAD_EMPLOYEES_SUCCESS, payload:employees})
    }
    catch(err){
        yield put({ type: LOAD_EMPLOYEES_FAILURE, payload: err })
    }
}

export default function* rootSaga() {
    yield takeEvery(LOAD_EMPLOYEES_REQUEST, loadData)
}