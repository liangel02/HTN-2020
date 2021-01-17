const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 40,
  fontWeight: 'bold',
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
  color: '#ff9999',
},

taglineText: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#404040',
},

navigateText: {
  fontSize: 30,
  fontWeight: 'bold',
  marginTop: 50,
  marginBottom: 50,
  textAlign: 'center',
  color: '#404040',
},

loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  backgroundColor: '#cce6ff',
  borderRadius: 10,
  height: 45,
  marginTop: 10,
  padding: 15,
},
fbLoginButton: {
  height: 45,
  marginTop: 10,
  backgroundColor: 'transparent',
},
signupButton: {
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#cce6ff',
    padding: 15,
},
stayButton: {
    textAlign: "center",
    backgroundColor: '#ffe4e1',
    
    padding: 15,
    fontSize: 16,
    margin: 4,
},

goButton: { 
  textAlign: "center",
  backgroundColor: '#ccccff',
  
  padding: 15,
  fontSize: 16,
  margin: 4,
}
};
