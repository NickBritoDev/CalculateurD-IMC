import React from 'react'
import { Share, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import PropTypes from 'prop-types'

export default function ResultForm (props) {
  const onShare = async () => {
    await Share.share({
      message: 'Meu IMC hoje é:' + props.imc
    })
  }

  return (
    <View style={styles.contextImc}>
      <Text style={styles.infoImc}>{props.messageResult}</Text>
      <Text style={styles.resultImc}>
        {props.imc !== null ? props.imc : 'N/A'}
        <View>
          {props.imc !== null
            ? (
            <TouchableOpacity style={styles.buttonShareImc} onPress={onShare}>
              <Text>
                <Icon name="share-alt" size={30} color="#900" />
              </Text>
            </TouchableOpacity>
              )
            : (
            <View />
              )}
        </View>
      </Text>
    </View>
  )
}

ResultForm.propTypes = {
  messageResult: PropTypes.string.isRequired,
  imc: PropTypes.number
}
