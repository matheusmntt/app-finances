import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99
  },

  item: {

  },

  itemTitle: {
    fontSize: 20,
    color: '#dadada',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  currencySymbol: {
    color: '#dadada',
    marginRight: 6,
  },

  balance: {
    fontSize: 22,
    color: '#2ecc61'
  },

  expenses: {
    fontSize: 22,
    color: '#e74e3c'
  }
})