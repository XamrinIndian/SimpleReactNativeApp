import {Alert} from 'react-native';

import {LoginUserModel} from '../models';
import {loginSlice} from '../userSlice';
import strings from '../../resources/strings';
import Api from '../../networking/api';
import {posts} from '../postDataSlice';

export const postData = () => async (dispatch: any) => {
  console.log('post data is ');
  Api.App.postData()
    .then(response => {
      dispatch(posts(response?.data));
    })
    .catch(err => {
      console.log('Error--', err);
    });
};
