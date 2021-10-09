import { connect } from 'react-redux';
import Employees from './component';
import { LOAD_EMPLOYEES_REQUEST, DELETE_EMPLOYEES, ADD_EMPLOYEES } from '../../store/actions'

const mapStateToProps = (state) => {
    return {
        employees:state.employees,
        isLoad: state.isLoad,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       loadData: () => { dispatch({type: LOAD_EMPLOYEES_REQUEST}) },
       addEmployee:(data)=>{ dispatch({type: ADD_EMPLOYEES, payload:data})},
       employeeDelete:(id)=>{ dispatch({type:DELETE_EMPLOYEES, payload:id})},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees)