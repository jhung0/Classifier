const initalState = {
    noFetch: 5,
    noPicsGrids: {
        top: 0,
        left: 0,
        right: 0    
    }, 
    uploadedPictures: [],
    displayedPictures: {
        top: [],
        left: [],
        right: []
    }
}

const reducer = (state = initalState, action) => {
    
    switch (action.type){
        
        case 'CHANGE_NO_FETCH':
            return {...state, noFetch: action.val};

        case 'CHANGE_NO_PICS_GRID':
            let noPicsGridsCopy = {...state.noPicsGrids};
            noPicsGridsCopy[action.grid] = action.val;
            return {...state, noPicsGrids: noPicsGridsCopy};

        case 'INC_NO_PICS_GRID':
            let noPicsGridsCopyTwo = {...state.noPicsGrids};
            noPicsGridsCopyTwo[action.grid] = noPicsGridsCopyTwo[action.grid] + 1;
            return {...state, noPicsGrids: noPicsGridsCopyTwo};
        
        case 'DEC_NO_PICS_GRID':
            let noPicsGridsCopyThree = {...state.noPicsGrids};
            noPicsGridsCopyThree[action.grid] = noPicsGridsCopyThree[action.grid] - 1;
            return {...state, noPicsGrids: noPicsGridsCopyThree};
        
        case 'UPLOAD_PICTURE':
            return {...state, uploadedPictures: state.uploadedPictures.concat(action.image)}
        
        case 'UPDATE_DISP_PICS':
            return {...state, displayedPictures: action.updated}

        case 'CHANGE_PICTURE_POSITION':
            // Get states that need to be updated
            let updatePicDisp = {...state.displayedPictures};
            let target = [...state.displayedPictures[action.target]];
            let origin =  [...state.displayedPictures[action.origin]];

            // Find picture by file name in pictures
            const resultIndex = state.displayedPictures[action.origin].findIndex(function( obj, index ) {
                return obj.fileName === action.filePath;
            });
            const result = state.displayedPictures[action.origin][resultIndex];
            
            // Add picture to target grid
            target.push(result);
            updatePicDisp[action.target] = target
            
            // Delete picture from origin grid        
            origin.splice(resultIndex, 1);
            updatePicDisp[action.origin] = origin;
            return {...state, displayedPictures: updatePicDisp}
                
        default: return state
    }    
};

export default reducer;