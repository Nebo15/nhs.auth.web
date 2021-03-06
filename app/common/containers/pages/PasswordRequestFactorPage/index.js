import React from 'react';
import { connect } from 'react-redux';

import { Main, Header, Article } from 'components/CenterLayout';
import { H1, H2 } from 'components/Title';
import FactorForm from 'containers/forms/FactorForm';
import BackgroundLayout from 'components/BackgroundLayout';

import { onSubmit } from './redux';

@connect(null, { onSubmit })
export default class PasswordRequestFactorPage extends React.Component {
  render() {
    const { onSubmit = () => {} } = this.props;

    return (
      <Main id="change-otp-page">
        <Header>
          <BackgroundLayout />
          <H1>Встановлення фактора авторизації</H1>
          <br />
          <br />
          <H2 textTransform="initial" color="red">Введіть телефон, який буде використано при вході в систему</H2>
        </Header>
        <Article>
          <FactorForm
            noLabel={false}
            btnColor="green"
            onSubmit={({ phone }) => onSubmit(phone.replace(/\s/g, ''))}
          />
        </Article>
      </Main>
    );
  }
}
