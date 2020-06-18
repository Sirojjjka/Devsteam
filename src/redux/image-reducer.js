const SET_IMAGE = 'SET_IMAGE';

let initialState = {
    data:[

    ]
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_IMAGE: {
            return {...state, data: [...state.data, ...action.data]}
        }

        default:
            return state;
    }
}


export const SetImageAC = (data) => ({type:SET_IMAGE, data})

export default imageReducer;
