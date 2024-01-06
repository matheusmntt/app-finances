import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { s } from './styles'

export const Actions = () => {
 return (
   <ScrollView style={s.container} horizontal showsHorizontalScrollIndicator={false}>
     <TouchableOpacity style={s.actionButton}>
       <View style={s.areaButton}>
         <AntDesign name="addfolder" size={26} color="#000"/>
       </View>
       <Text style={s.labelButton}>Entradas</Text>
     </TouchableOpacity>

     <TouchableOpacity style={s.actionButton}>
       <View style={s.areaButton}>
         <AntDesign name="tagso" size={26} color="#000"/>
       </View>
       <Text style={s.labelButton}>Compras</Text>
     </TouchableOpacity>

    <TouchableOpacity style={s.actionButton}>
      <View style={s.areaButton}>
        <AntDesign name="creditcard" size={26} color="#000"/>
      </View>
      <Text style={s.labelButton}>Carteira</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={s.actionButton}>
      <View style={s.areaButton}>
        <AntDesign name="barcode" size={26} color="#000"/>
      </View>
      <Text style={s.labelButton}>Boletos</Text>
     </TouchableOpacity>
     
     <TouchableOpacity style={s.actionButton}>
      <View style={s.areaButton}>
        <AntDesign name="setting" size={26} color="#000"/>
      </View>
      <Text style={s.labelButton}>Contas</Text>
    </TouchableOpacity>
   </ScrollView>
  )
}