import React, {Component} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Button,
  TextInput,
  Snackbar,
} from 'react-native-paper';

export default class LoginScreen extends Component {
  hidePassword: boolean = true;

  togglePassword() {
    this.hidePassword = !this.hidePassword;
    console.log('Click');
  }

  render() {
    return (
      <Wallpaper>
        <SafeAreaView>
          <View style={styles.container}>
            <Card style={styles.card}>
              <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <TextInput
                  label="Email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
                <TextInput
                  label="Senha"
                  secureTextEntry={this.hidePassword}
                  textContentType={this.hidePassword ? 'password' : 'none'}
                  right={
                    <TextInput.Icon
                      name={this.hidePassword ? 'eye' : 'eyeo'}
                      centered={true}
                      onPress={() => {
                        this.togglePassword();
                      }}
                    />
                  }
                />
              </Card.Content>
            </Card>
          </View>
        </SafeAreaView>
      </Wallpaper>
    );
  }
}

class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.picture}
        source={require('./../../assets/wallpaper.png')}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(50, 50, 50, .7)',
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%',
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'skyblue',
    // maxWidth: 500,
    width: '100%',
  },
  picture: {
    flex: 1,
    resizeMode: 'cover',
  },
});
