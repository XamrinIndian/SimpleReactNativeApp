import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../util/Metrics';
import Colors from '../resources/colors';

interface TextFieldProps {
  placeholder: string;
  isSecure?: boolean;
  onTextChange: Function;
}

export const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  onTextChange,
  isSecure = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        onChangeText={text => onTextChange(text)}
        style={styles.textField}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(75),
    borderRadius: 30,
    backgroundColor: Colors.borderClr,
    justifyContent: 'center',
    alignItems: 'center',
    margin: horizontalScale(25),
    marginLeft: horizontalScale(30),
    marginRight: horizontalScale(30),
    paddingLeft: horizontalScale(30),
    paddingRight: horizontalScale(30),
  },
  textField: {
    flex: 1,
    height: verticalScale(75),
    fontSize: moderateScale(20),
    color: Colors.black,
  },
});
