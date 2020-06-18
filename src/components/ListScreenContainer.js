import React from 'react'
import {connect} from "react-redux";
import {SetImageAC} from '../redux/image-reducer';
import ListScreen from "./ListScreen";


let mapStateToProps = (state) => {
    return {
        data: state.imagePage.data
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(SetImageAC(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListScreen);


