import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import newsletterReducer from './newsletterReducer';
import SupportRequestReducer from './supportRequestReducer';

const rootReducer = combineReducers({
  form,
  newsletter: newsletterReducer,
  supportRequest: SupportRequestReducer
});

export default rootReducer;