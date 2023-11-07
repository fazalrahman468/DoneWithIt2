import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import Icon from '../components/Icon';
import AppButton from '../components/AppButton';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.cont}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        placeholder="Email"
        autoCorrect={false}
        autoCapitalize="none"
        keyboartType="email-address"
        onChangeText={text => setEmail(text)}
        icon={
          <Icon
            source={require('../assets/mail.png')}
            backgroundColor="#f8f4f4"
          />
        }
      />
      <AppTextInput
        placeholder="Password"
        autoCorrect={false}
        autoCapitalize="none"
        keyboartType="email-address"
        onChangeText={text => setPassword(text)}
        secureTextEntry
        icon={
          <Icon
            source={require('../assets/lock.png')}
            backgroundColor="#f8f4f4"
          />
        }
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  cont: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
