import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: "#FFF",
    alignItems: "center",
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  formLabel: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#000'
  },
  formInput: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#F6F6F6',
    height: 40,
    margin: 12,
    paddingLeft: 10
  },
  formButtonText: {
    fontSize: 20,
    color: '#FFF',
  },
  formButton: {
    backgroundColor: '#FF0043',
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: '90%',
    marginLeft: 12,
    marginTop: 42,
    paddingTop: 14,
    paddingBottom: 14,
  },
  errorMessage:{
    fontSize: 12,
    color: 'red',
    fontWeight: "bold",
    paddingLeft: 20,
  },
  form: {
    width: '100%',
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
})

export default styles