import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class Welcome extends React.Component {
  constructor() {
    super();
    this.status = {
      emailId: '',
      password: '',
    };
  }

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        return Alert.alert('Successfully logged in');
      })
      .catch((err) => {
        var error = err.code;
        var errorMessage = error.messsage;
        return Alert.alert(errorMessage);
      });
  };

  userSignUp = (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then((response) => {
        return Alert.alert('Successfully signed up');
      })
      .catch((err) => {
        var error = err.code;
        var errorMessage = error.messsage;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/santa.png')} />
        <View>
          <Text style={styles.title}>Book Santa</Text>
        </View>
        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({ emailId: text });
            }}
          />
          <TextInput
            style={styles.loginBox}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={() => {
                  this.userLogin(this.state.emailId, this.state.password);
                }}>
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.userSignUp(this.state.emailId, this.state.password);
              }}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99a5ff',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  loginBox: {
    width: 200,
    height: 50,
    borderBottomWidth: 1.5,
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 80,
    height: 40,
    backgroundColor: 'white',
  },
  buttonText: {
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
  },
});
