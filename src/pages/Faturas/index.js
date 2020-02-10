import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';

import {Container, Text} from '../../components/Container';

export default function Faturas() {
  return (
    <Background>
      <Container>
        <Text>Faturas</Text>
      </Container>
    </Background>
  );
}
Faturas.navigationOptions = {
  tabBarLabel: 'Faturas',
  tabBarIcon: ({tintColor}) => (
    <Icon name="description" size={20} color={tintColor} />
  ),
};
