import React from 'react'
import { Image, View } from 'react-native'
import styles from './style'
import logo from '../../../assets/logo.png'

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Image source={logo} style={styles.logoImage} />
    </View>
  )
}