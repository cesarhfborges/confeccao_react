import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Appbar, Button, Card, TextInput, Title} from 'react-native-paper';
import Cliente from '../shared/models/cliente';

// @ts-ignore
const ClientesEditarScreen = ({route, navigation}) => {
  const {clienteId} = route.params ?? {clienteId: undefined};
  const [loading, setLoading] = React.useState<boolean>(true);
  const [cliente, setCliente] = React.useState<Cliente>(new Cliente());
  // const {cliente} = route.params;

  React.useEffect(() => {
    if (!clienteId) {
      return navigation.navigate('Root', {screen: 'Clientes'});
    } else {
      Cliente.getCliente(clienteId).then(response => {
        setCliente(response);
        setLoading(false);
      });
    }
  }, [setLoading, setCliente, clienteId, navigation, route.params.clientId]);

  return (
    <SafeAreaView>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => navigation.navigate('Root', {screen: 'Clientes'})}
        />
        <Appbar.Content title="Cliente" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="plus" onPress={() => {}} />
      </Appbar.Header>
      <View>
        <Card>
          <Card.Title title="Cliente" subtitle="Cadastro cliente" />
          <Card.Content>
            {loading ? (
              <Title>Carregando</Title>
            ) : (
              <>
                <TextInput
                  label="Nome"
                  value={cliente.nome}
                  onChangeText={text =>
                    setCliente({
                      ...cliente,
                      nome: text,
                    })
                  }
                />
                <TextInput
                  label="CPF/CNPJ"
                  value={cliente.cpfCnpj}
                  onChangeText={text =>
                    setCliente({
                      ...cliente,
                      cpfCnpj: text,
                    })
                  }
                />
              </>
            )}
          </Card.Content>
          <Card.Actions>
            <Button>listar</Button>
            <Button>Cadastrar</Button>
          </Card.Actions>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default ClientesEditarScreen;
