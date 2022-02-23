import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {Appbar, DataTable, Card, IconButton} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import Cliente from '../shared/models/cliente';
import Sort from '../shared/models/sort';
import theme from '../../assets/theme';

const keysObject: Array<{key: string; label: string; flex: number}> = [
  {key: 'nome', label: 'Nome', flex: 3},
  {key: 'cpfCnpj', label: 'CPF/CNPJ', flex: 2},
];

// @ts-ignore
const ClientesLista = ({navigation}) => {
  const [clientes, setClientes] = React.useState<Array<Cliente>>([]);
  const [sort, setSort] = React.useState<Sort>({key: 'nome', order: 'asc'});
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    firestore()
      .collection('clientes')
      .orderBy(sort.key, sort.order)
      .onSnapshot(({docs}) => {
        const lista = docs.map(doc => {
          const obj: Cliente = Object.assign(doc.data());
          return {
            id: doc.id,
            nome: obj.nome,
            cpfCnpj: obj.cpfCnpj,
          };
        });
        // @ts-ignore
        setLoading(false);
        return setClientes(lista);
      });
  }, [setClientes, sort.key, sort.order, setSort]);

  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => navigation.navigate('Root', {screen: 'Home'})}
        />
        <Appbar.Content title="Cliente" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="plus" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.content}>
          <Card>
            <Card.Content>
              <DataTable>
                <DataTable.Header>
                  {keysObject.map((k, i) => {
                    if (sort.key === k.key) {
                      return (
                        <DataTable.Title
                          key={i}
                          sortDirection={
                            sort.order === 'asc' ? 'ascending' : 'descending'
                          }
                          onPress={() =>
                            setSort({
                              key: k.key,
                              order: sort.order === 'asc' ? 'desc' : 'asc',
                            })
                          }
                          style={{flex: k.flex}}>
                          {k.label}
                        </DataTable.Title>
                      );
                    } else {
                      return (
                        <DataTable.Title
                          key={i}
                          style={{flex: k.flex}}
                          onPress={() =>
                            setSort({
                              key: k.key,
                              order: 'asc',
                            })
                          }>
                          {k.label}
                        </DataTable.Title>
                      );
                    }
                  })}
                  <DataTable.Title style={{maxWidth: 50}}>
                    &nbsp;
                  </DataTable.Title>
                </DataTable.Header>

                {clientes.map((cliente, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell style={{flex: 3}}>
                      {cliente.nome}
                    </DataTable.Cell>
                    <DataTable.Cell style={{flex: 2}}>
                      {cliente.cpfCnpj}
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{maxWidth: 50, justifyContent: 'center'}}>
                      <IconButton
                        icon="pencil"
                        color={theme.colors.primary}
                        size={20}
                        onPress={() =>
                          navigation.navigate('Root', {
                            screen: 'EditarClientes',
                            params: {clienteId: cliente.id},
                          })
                        }
                      />
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
});

export default ClientesLista;
