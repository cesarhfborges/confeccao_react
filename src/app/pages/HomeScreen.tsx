import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {Appbar, Text} from 'react-native-paper';

// @ts-ignore
const HomeScreen = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Confecção" subtitle="Subtitle" />
      </Appbar.Header>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.content}>
            <Text>HomeScreen é aqui</Text>
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
