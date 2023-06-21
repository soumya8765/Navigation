import * as React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../colors';
import Heart from '../wishlisted';
import {View, Text} from 'react-native';



const Fav = () => {
  const Item = ({Heart}) => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={style.Item}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Heart.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={Heart.like ? COLORS.red : COLORS.pastel}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image source={Heart.img} style={{flex: 1, resizeMode: 'contain'}} />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>
            {Heart.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${Heart.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.pastel,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 15, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text
            style={{fontSize: 20, color: COLORS.pastel, fontWeight: 'bold'}}>
            Favourites
          </Text>
        </View>
      </View>

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 12,
        }}
        numColumns={2}
        data={Heart}
        renderItem={({item}) => {
          return <Item Heart={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Item: {
    height: 230,
    backgroundColor: COLORS.light,
    width:180,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});
export default Fav;
