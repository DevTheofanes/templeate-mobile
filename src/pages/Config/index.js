import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';

import {Container, Text} from '../../components/Container';

export default function Config() {
  return (
    <Background>
      <Container>
        <Text>Config</Text>
      </Container>
    </Background>
  );
}
Config.navigationOptions = {
  tabBarLabel: 'Config',
  tabBarIcon: ({tintColor}) => (
    <Icon name="settings" size={20} color={tintColor} />
  ),
};
