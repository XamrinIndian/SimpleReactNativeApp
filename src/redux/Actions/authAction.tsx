import {Alert} from 'react-native';

import {LoginUserModel} from '../models';
import {loginSlice} from '../userSlice';
import strings from '../../resources/strings';

export const loginAction =
  (params: LoginUserModel) => async (dispatch: any) => {
    console.log('paramss', params);
    dispatch(
      loginSlice({
        username: params.username,
        password: params.password,
      }),
    );
    Alert.alert(strings.alert, strings.loginSucc);
    console.log('shoing mesageis');
  };
