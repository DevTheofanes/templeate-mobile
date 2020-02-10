import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

import {Container, Text} from '../../components/Container';

export default function Cliente() {
  return (
    <Background>
      <Container>
        <Text>Cliente</Text>
      </Container>
    </Background>
  );
}
Cliente.navigationOptions = {
  tabBarLabel: 'Cliente',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
