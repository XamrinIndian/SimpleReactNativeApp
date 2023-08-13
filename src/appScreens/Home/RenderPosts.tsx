import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../util/Metrics';
import Colors from '../../resources/colors';
import {PostsModel} from '../../redux/models';

interface RenderPostsProps {
  item: PostsModel;

  onPress: (item: object) => void;
}
const RenderPosts = ({item, onPress}: RenderPostsProps): React.ReactElement => {
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.touch}>
      <View style={styles.topView}>
        <Text numberOfLines={1} style={{fontSize: 14}}>
          TITLE :{item.title}
        </Text>
        <Text numberOfLines={2} style={{fontSize: 14}}>
          DESCRIPTIONS : {item.body}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  touch: {
    height: horizontalScale(100),
    justifyContent: 'center',
    backgroundColor: Colors.borderClr,
    marginBottom: verticalScale(30),
    marginHorizontal: horizontalScale(30),
    borderRadius: moderateScale(10),
  },
  topView: {
    // flexDirection: 'row',
    paddingHorizontal: horizontalScale(5),
    marginBottom: verticalScale(5),
  },
});
export default RenderPosts;
