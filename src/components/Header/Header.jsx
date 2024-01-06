import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons' 
import { s } from './styles'

export const Header = ({ name }) => {
  return (
    <View style={s.container}> 
      <View style={s.content}>
        <Text style={s.username}>{name}</Text>
        <TouchableOpacity activeOpacity={0.9} style={s.buttonUser}>
          <Feather name="user" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
