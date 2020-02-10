import React, {Component} from 'react';
import Background from '../../components/Background';
import {
  Container,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default class SignUp extends Component {
  handleNavigate = () => {
    const {navigation} = this.props;
    navigation.navigate('SignIn');
  };
  handleSubmit = () => {
    const {navigation} = this.props;
    navigation.navigate('Cliente');
  };
  render() {
    return (
      <>
        <Background>
          <Container>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="send"
              placeholder="Nome completo"
            />
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu email"
              returnKeyType="next"
            />
            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Sua senha secreta"
              returnKeyType="send"
            />
            <SubmitButton
              onPress={() => {
                this.handleSubmit();
              }}>
              Acessar
            </SubmitButton>
            <SignLink onPress={() => this.handleNavigate()}>
              <SignLinkText>Já Possui Conta</SignLinkText>
            </SignLink>
          </Container>
        </Background>
      </>
    );
  }
}
