import { View, Text } from 'react-native'
import React from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import { DrawerTabParamlist } from '../../App';


type Props = DrawerScreenProps<DrawerTabParamlist, 'Askq'>;

const Askq = ({route,navigation}: Props) => {
  return (
    <View>
      <Text>Ask a Question</Text>
    </View>
  )
}

export default Askq