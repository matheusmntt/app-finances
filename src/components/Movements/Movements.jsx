import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { s } from './styles'

export const Movements = ({ data }) => {
  const [showValue, setShowValue] = useState(false)

 return (
   <TouchableOpacity style={s.container} onPress={() => setShowValue((prev) => !prev)}>
     <Text style={s.date}>{data.date}</Text>

     <View style={s.content}>
       <Text style={s.label}>{data.label}</Text>
       {showValue && <Text style={data.type === 1 ? s.value : s.expenses}>R$ {data.value}</Text>}
       {!showValue && <View style={s.skeleton} />}
     </View>
   </TouchableOpacity>
  );
}