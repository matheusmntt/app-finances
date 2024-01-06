import { Text, View } from 'react-native'
import { s } from './styles'

export const Balance = ({ saldo, gastos }) => {
 return (
   <View style={s.container}>
     <View style={s.item}>
       <Text style={s.itemTitle}>
         Saldo
       </Text>

       <View style={s.content}>
         <Text style={s.currencySymbol}>R$</Text>
         <Text style={s.balance}>{saldo}</Text>
       </View>
     </View> 

      <View style={s.item}>
       <Text style={s.itemTitle}>Gastos</Text>

       <View style={s.content}>
         <Text style={s.currencySymbol}>R$</Text>
         <Text style={s.expenses}>{gastos}</Text>
       </View>
     </View> 
   </View>
  );
}