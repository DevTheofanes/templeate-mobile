import React, {Component} from 'react';
import Background from '../../components/Background';
import {
  Container,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default class SignIn extends Component {
  handleNavigate = () => {
    const {navigation} = this.props;
    navigation.navigate('SignUp');
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
            <SubmitButton onPress={() => this.handleSubmit()}>
              Acessar
            </SubmitButton>
            <SignLink onPress={() => this.handleNavigate()}>
              <SignLinkText>Criar sua Conta Agora</SignLinkText>
            </SignLink>
          </Container>
        </Background>
      </>
    );
  }
}
