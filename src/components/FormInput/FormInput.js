import React from 'react';
import {View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles';

const FormInput = (props) => {
  return (
    <View style={styles.textInput}>
      
      <TextInput
        style={styles.textInputStyle}
        placeholder={props?.placeholderText}
        returnKeyType={props?.returnKeyType}
        value={props?.value}
        secureTextEntry={props?.secureTextEntry}
        onChangeText={props?.onchange}
        keyboardType={props?.keyboardType}
      />

      <Ionicons style={styles.iconStyle} name={props?.iconType} size={15} />
    </View>
  );
};

export default FormInput;
