import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import strings from '../../resources/strings';
import {ButtonWithTitle, TextField} from '../../components';
import Colors from '../../resources/colors';
import {moderateScale, verticalScale} from '../../util/Metrics';
import {useAppDispatch} from '../../redux/hooks';
import {loginAction} from '../../redux/Actions/authAction';

const Login: React.FC = () => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const defaultUser: string = 'BeingHuman';
  const pass: string = '12345678';
  const dispatch = useAppDispatch();
  const validation = () => {
    if (username === '') {
      Alert.alert(strings.alert, strings.enterUser);
      return false;
    } else if (password === '') {
      Alert.alert(strings.alert, strings.enterPass);
      return false;
    } else if (password.length < 6) {
      Alert.alert(strings.alert, strings.passLen);
      return false;
    } else if (password !== pass && password !== defaultUser) {
      Alert.alert(strings.alert, strings.wrongCred);
      return false;
    } else {
      dispatch(
        loginAction({
          username,
          password,
        }),
      );
      console.log(username, password);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{strings.loginTitle}</Text>
      <View style={styles.body}>
        <TextField
          placeholder={strings.usrName}
          onTextChange={(value: string) => {
            setUser(value);
          }}
          isSecure={false}
        />
        <TextField
          placeholder={strings.password}
          onTextChange={(value: string) => {
            setPassword(value);
          }}
          isSecure={true}
        />

        <ButtonWithTitle
          title={'title'}
          onTap={() => {
            validation();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.darkwhite},
  body: {justifyContent: 'center', alignItems: 'center', flex: 10},
  headerTitle: {
    fontSize: moderateScale(25),
    alignSelf: 'center',
    color: Colors.gray,
    marginTop: verticalScale(80),
  },
});

export default Login;
