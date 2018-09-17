import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	// Show list of the tech libraries to the user
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});
