import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../resources/colors';
import {moderateScale, verticalScale} from '../util/Metrics';

interface ButtonProps {
  onTap: Function;
  title: string;
}

const ButtonWithTitle: React.FC<ButtonProps> = ({onTap, title}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => onTap()}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: moderateScale(20), color: Colors.white},
  btn: {
    maxHeight: verticalScale(75),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.btnColor,
    borderRadius: moderateScale(30),
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
});

export {ButtonWithTitle};
