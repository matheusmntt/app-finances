import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada'
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },

  date: {
    color: '#dadada',
    fontWeight: 'bold'
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16
  },

  value: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold'
  },

  expenses: {
    fontSize: 16,
    color: '#e74e3c',
    fontWeight: 'bold'
  },

  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#dadada',
    borderRadius: 8
  }
})