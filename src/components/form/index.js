import React, { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity, Pressable, Keyboard, FlatList } from 'react-native'
import ResultForm from './resultForm'
import styles from './style'

export default function Form () {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageResult, setMessageResult] = useState('Preencha o peso e altura.')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  const [heightError, setHeightError] = useState(null)
  const [weightError, setWeightError] = useState(null)
  const [imcList, setImcList] = useState([])
  const dataHora = new Date().toLocaleString()

  function validation () {
    if (weight !== null && height !== null) {
      const heightFormat = height.replace(',', '.')
      const calculatedImc = (weight / (heightFormat * heightFormat)).toFixed(2)

      setImcList((arr) => [...arr, { id: new Date().getTime(), imc: calculatedImc, data: dataHora }])
      setImc(calculatedImc)
      setHeight(null)
      setWeight(null)
      setMessageResult('Seu IMC é igual:')
      setTextButton('Calcular Novamente')
      setHeightError(null)
      setWeightError(null)
    } else {
      setImc(null)
      setTextButton('Calcular')
      setMessageResult('Preencha o peso e altura.')
      verificationInput()
    }
  }

  function verificationInput () {
    if (weight === null) {
      setWeightError('Peso obrigatório.*')
    } else {
      setWeightError(null)
    }

    if (height === null) {
      setHeightError('Altura obrigatória.*')
    } else {
      setHeightError(null)
    }
  }

  return (
    <View style={styles.formContext}>
      {imc === null
        ? <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{heightError}</Text>
          <TextInput
            style={styles.formInput}
            placeholder='EX: 1.95'
            onChangeText={setHeight}
            value={height}
            keyboardType='numeric'
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{weightError}</Text>
          <TextInput
            style={styles.formInput}
            placeholder='EX: 75.360'
            onChangeText={setWeight}
            value={weight}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.formButton} onPress={() => { validation() }}>
            <Text style={styles.formButtonText}> {textButton}</Text>
          </TouchableOpacity>
        </Pressable>
        : <>
          <TouchableOpacity style={styles.formButton} onPress={validation}>
            <Text style={styles.formButtonText}> {textButton}</Text>
          </TouchableOpacity>
          <ResultForm messageResult={messageResult} imc={parseFloat(imc)} />
        </>
      }
      <FlatList
        style={styles.listImcs}
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.resultImcItem}>
              <View>
                <Text style={styles.textResultItemListInfo}>Data do Calculo:</Text>
                <Text>{item.data}</Text>
                <Text style={styles.textResultItemList}>Resultado IMC Atual = {item.imc}</Text>
              </View>
            </View>
          )
        }}
        keyExtractor={(item) => {
          return item.id.toString()
        }}
      />

    </View>
  )
}
