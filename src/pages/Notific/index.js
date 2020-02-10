import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';

import {Container, Text} from '../../components/Container';

export default function Notific() {
  return (
    <Background>
      <Container>
        <Text>Notific</Text>
      </Container>
    </Background>
  );
}
Notific.navigationOptions = {
  tabBarLabel: 'Notific',
  tabBarIcon: ({tintColor}) => (
    <Icon name="notifications" size={20} color={tintColor} />
  ),
};
