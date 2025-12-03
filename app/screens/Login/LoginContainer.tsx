import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import { Alert } from 'react-native';
import { isEmailValid } from '../../services/validator.service';
import { IUser } from '../../interfaces/auth.interface';
import { signUpWithEmailPassword } from '../../stores/auth.store';
import { NavigationV5Props, switchRoute } from '../../routes/RouteFun';

interface Props extends NavigationV5Props {}

const LoginContainer = (props: Props) => {
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [showDOB, setShowDOB] = useState(false);
  const [process, setProcess] = useState(false);

  const onDOBChange = (date: Date | undefined) => {
    setDOB(date || new Date());
  };

  const onSignup = async () => {
    if (!firstName || !lastName || !gender || !dob || !email || !password) {
      Alert.alert(
        'Invalid information',
        `${
          !firstName
            ? 'First name'
            : !lastName
            ? 'Last name'
            : !gender
            ? 'Gender'
            : !dob
            ? 'Date of birth'
            : !email
            ? 'Email'
            : !password
            ? 'Password'
            : ''
        } is required.`,
      );
      return;
    }

    if (!isEmailValid(email)) {
      Alert.alert(
        'Invalid email',
        'Please check your email format again! Ex: someone@mail.com',
      );
      return;
    }
    if (`${password}`.length < 6) {
      Alert.alert('Invalid password', 'Password must more than 6 char.');
      return;
    }
    try {
      setProcess(true);
      const user: IUser = {
        key: '',
        firstName,
        lastName,
        gender,
        dob,
        email,
      };
      await signUpWithEmailPassword(user, password);
      props.navigation.reset(switchRoute('APP_TAB'));
    } finally {
      setProcess(false);
    }
  };

  return (
    <LoginScreen
      process={process}
      password={password}
      setPassword={setPassword}
      email={email}
      setEmail={setEmail}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      gender={gender}
      onDOBChange={onDOBChange}
      dob={dob}
      showDOB={showDOB}
      setShowDOB={setShowDOB}
      setGender={setGender}
      onSignup={onSignup}
      firstName={firstName}
      setfirstName={setfirstName}
      lastName={lastName}
      setlastName={setlastName}
    />
  );
};
export default LoginContainer;
