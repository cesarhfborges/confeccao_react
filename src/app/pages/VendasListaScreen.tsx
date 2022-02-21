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

const listaClientes = [
  {
    nome: 'Cliente 1',
    cpfCnpj: '029.528.041-76',
  },
  {
    nome: 'Cliente 2',
    cpfCnpj: '36.763.985/0001-54',
  },
];

// @ts-ignore
const VendasListaScreen = ({navigation}) => (
  <SafeAreaView>
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => navigation.navigate('Root', {screen: 'Home'})}
      />
      <Appbar.Content title="Vendas" />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="label" onPress={() => {}} />
    </Appbar.Header>
    <ScrollView>
      <View style={styles.content}>
        <Card>
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{flex: 3}}>Cliente</DataTable.Title>
                <DataTable.Title style={{flex: 2}}>CPF/CNPJ</DataTable.Title>
                <DataTable.Title>&nbsp;</DataTable.Title>
              </DataTable.Header>

              {listaClientes.map((cliente, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell style={{flex: 3}}>
                    {cliente.nome}
                  </DataTable.Cell>
                  <DataTable.Cell style={{flex: 2}}>
                    {cliente.cpfCnpj}
                  </DataTable.Cell>
                  <DataTable.Cell>6.0</DataTable.Cell>
                </DataTable.Row>
              ))}
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

export default VendasListaScreen;
