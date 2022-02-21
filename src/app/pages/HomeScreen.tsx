import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {Appbar, Button, Text} from 'react-native-paper';

// @ts-ignore
const HomeScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Confecção" subtitle="Subtitle" />
      </Appbar.Header>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.content}>
            <Text>HomeScreen é aqui</Text>
            <Button onPress={() => setCounter(counter - 1)}>Decrementar</Button>
            <Text>{counter}</Text>
            <Button onPress={() => setCounter(counter + 1)}>Incrementar</Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
});

export default HomeScreen;
