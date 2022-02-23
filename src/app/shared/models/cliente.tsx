import firestore from '@react-native-firebase/firestore';

class Cliente {
  id: string | undefined;
  nome: string | undefined;
  cpfCnpj: string | undefined;

  static prepare(cliente: Cliente) {
    const obj = JSON.parse(JSON.stringify(cliente));
    delete obj.id;
    return obj;
  }

  static async getCliente(id: string): Promise<Cliente> {
    return new Promise<Cliente>((resolve, reject) => {
      const ref = firestore().collection('clientes').doc(id);
      ref.onSnapshot(
        querySnapshot => {
          const cliente: Cliente = Object.assign({
            ...querySnapshot.data(),
            id: querySnapshot.id,
          });
          return resolve(cliente);
        },
        error => {
          return reject(error);
        },
      );
    });
  }

  async update(): Promise<any> {
    const ref = firestore().collection('clientes').doc(this.id);
    return await ref.update(Cliente.prepare(this));
  }
}

export default Cliente;
