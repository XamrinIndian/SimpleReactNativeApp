import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Colors from '../../resources/colors';
import {moderateScale, verticalScale} from '../../util/Metrics';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {postData} from '../../redux/Actions/appAction';
import RenderPosts from './RenderPosts';
import {PostsModel} from '../../redux/models';

const Home: React.FC = () => {
  const {posts} = useAppSelector(state => state.postDataSlice);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(postData());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        contentContainerStyle={styles.containerStyle}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <RenderPosts
              onPress={(selectedItem: PostsModel) => {
                alert(selectedItem.id);
              }}
              item={item}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  body: {justifyContent: 'center', alignItems: 'center', flex: 10},
  containerStyle: {
    paddingBottom: verticalScale(70),
    paddingTop: verticalScale(100),
  },
  headerTitle: {
    fontSize: moderateScale(25),
    alignSelf: 'center',
    color: Colors.gray,
    marginTop: verticalScale(80),
  },
});

export default Home;
