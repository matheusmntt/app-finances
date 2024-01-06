import { Text, View, FlatList } from 'react-native';
import { Header } from '../../components/Header/Header';
import { Balance } from '../../components/Balance';

import { s } from './styles'
import { Movements } from '../../components/Movements';
import { Actions } from '../../components/Actions';

export const Home = () => {
  const list = [
    {
      id: 1,
      label: 'Boleto conta luz',
      value: '300,90',
      date: '17/09/2023',
      type: 0
    },
    {
      id: 2,
      label: 'Pix cliente X',
      value: '2.500,90',
      date: '20/09/2023',
      type: 1
    },
    {
      id: 3,
      label: 'Salário',
      value: '7.200,00',
      date: '05/10/2023',
      type: 1
    }, 
  ]

  return (
    <View style={s.container}>
      <Header name="Matheus" />
      <Balance saldo="9.500,00" gastos="574,00" />
      <Actions />
      <Text style={s.title}>Ultimas movimentações</Text>

      <FlatList
        style={s.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} /> }
      />
    </View>
  );
}


