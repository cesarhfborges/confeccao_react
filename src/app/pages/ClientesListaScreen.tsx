import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {
  Appbar,
  DataTable,
  Card,
  Title,
  Paragraph,
  Button,
} from 'react-native-paper';

// @ts-ignore
const ClientesLista = ({navigation}) => (
  <SafeAreaView>
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => navigation.navigate('Root', {screen: 'Home'})}
      />
      <Appbar.Content title="Clientes" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="label" onPress={() => {}} />
    </Appbar.Header>
    <ScrollView>
      <View style={styles.content}>
        <Card>
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Dessert</DataTable.Title>
                <DataTable.Title numeric>Calories</DataTable.Title>
                <DataTable.Title numeric>Fat</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                <DataTable.Cell numeric>159</DataTable.Cell>
                <DataTable.Cell numeric>6.0</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
                <DataTable.Cell numeric>8.0</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
});

export default ClientesLista;
