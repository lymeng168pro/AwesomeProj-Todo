import {
  ActivityIndicator,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { _styles } from '../../_styles';
import SafeArea from '../../component/SafeArea';
import modules from '../../modules';
import Ionicons from '@react-native-vector-icons/ionicons';
import { GENDER_ARR } from '../../dummy/data.dummy';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

interface Props {
  process: boolean;
  modalVisible: boolean;
  gender: any;
  dob: Date;
  showDOB: boolean;
  email: string;
  password: string;
  firstName: string;
  lastName: string;

  setGender: (gender: any) => void;
  onDOBChange: (date: Date | undefined) => void;
  setModalVisible: (visible: boolean) => void;
  setShowDOB: (show: boolean) => void;
  setEmail: (mail: string) => void;
  setPassword: (password: string) => void;
  onSignup: () => void;
  setfirstName: (firstName: string) => void;
  setlastName: (lastName: string) => void;
}

const LoginScreen = ({
  modalVisible,
  dob,
  gender,
  showDOB,
  email,
  password,
  firstName,
  lastName,
  process,

  onSignup,
  setEmail,
  setModalVisible,
  setGender,
  onDOBChange,
  setShowDOB,
  setPassword,
  setfirstName,
  setlastName,
}: Props) => {
  return (
    <View style={[_styles.containerWhite]}>
      <SafeArea color={modules.WHITE} />
      <View style={styles.container}>
        <TextInput
          style={styles.txt}
          placeholder="First name"
          editable={!process}
          value={firstName}
          onChangeText={setfirstName}
        />
        <TextInput
          style={styles.txt}
          placeholder="Last name"
          value={lastName}
          onChangeText={setlastName}
        />
        <TouchableOpacity
          style={styles.options}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.optionLabel}>Gender</Text>
          <Text>{gender?.name}</Text>
          <Ionicons name="caret-down" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.options}
          onPress={() => setShowDOB(true)}
        >
          <Text style={styles.optionLabel}>Selecte DOB (MM/DD/YYYY)</Text>
          <Text>{dob?.toLocaleDateString()}</Text>
          <Ionicons name="caret-down" />
        </TouchableOpacity>

        <TextInput
          style={styles.txt}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.txt}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[styles.btn, process ? styles.btnDisable : null]}
          onPress={onSignup}
          disabled={process}
        >
          {process ? (
            <ActivityIndicator color={modules.WHITE} size={'small'} />
          ) : null}
          <Text style={styles.btnTxt}> Save </Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={showDOB}
        backdropColor={'rgba(0, 0, 0, 0.5)'}
        onRequestClose={() => setShowDOB(false)}
      >
        <View style={styles.centeredView}>
          <Pressable style={_styles.flex1} onPress={() => setShowDOB(false)} />
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Select DOB</Text>
              <Pressable onPress={() => setShowDOB(false)}>
                <Ionicons name="close" style={styles.modalClose} />
              </Pressable>
            </View>
            <View style={styles.modalItems}>
              <DateTimePicker
                value={dob}
                mode={'date'}
                display="spinner"
                onChange={(event, date) => onDOBChange(date)}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={modalVisible}
        backdropColor={'rgba(0, 0, 0, 0.5)'}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <Pressable
            style={_styles.flex1}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalText}>Select Gender</Text>
              <Ionicons name="close" style={styles.modalClose} />
            </View>
            <View style={styles.modalItems}>
              {GENDER_ARR?.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={styles.genderItem}
                    key={`${index}`}
                    onPress={() => {
                      setGender(item);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.genderText}>{item?.name}</Text>
                    <Ionicons name="chevron-forward" />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  btnDisable: {
    backgroundColor: modules.TEXT,
  },
  btnTxt: {
    color: modules.WHITE,
    fontSize: modules.FONT_14,
    fontWeight: '700',
  },
  btn: {
    backgroundColor: modules.PRIMARY,
    padding: modules.BODY_H_16 / 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: modules.BODY_H_16 / 4,
    gap: 4,
  },
  modalItems: {
    flexDirection: 'column',
  },
  genderItem: {
    paddingHorizontal: modules.BODY_V_8,
    paddingVertical: modules.BODY_V_8,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: modules.BORDER_COLOR,
  },
  genderText: {
    flex: 1,
    fontSize: modules.FONT_14,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: modules.BODY_H_16,
  },
  modalClose: {
    fontSize: modules.FONT_28 - 4,
  },
  modalText: {
    flex: 1,
    textAlign: 'center',
    paddingLeft: 24.7,
  },
  modalContainer: {
    height: '50%',
  },
  container: {
    paddingHorizontal: modules.BODY_H_16,
    gap: 8,
  },
  options: {
    backgroundColor: modules.BORDER_COLOR,
    padding: 8,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLabel: {
    flex: 1,
  },
  txt: {
    backgroundColor: modules.BORDER_COLOR,
    padding: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
  },

  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  modalView: {
    maxHeight: '50%',
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 20,
    padding: modules.BODY_H_16,
    paddingBottom: modules.BODY_H_16 * 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});
