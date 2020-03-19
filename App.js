import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: [],
    };
  }

  generateRandomNumber() {
    let n = [];

    for (var i = 1; i <= 6; i++) {
      n.push(Math.floor(Math.random() * 60) + ',' + '  ');
    }

    this.checkRepeatedNumbers(n);
  }

  checkRepeatedNumbers(array) {
    for (var b = 1; b < array.length; b++) {
      let exists = array.indexOf(array[b], b + 1);
      if (exists != -1 || array[b] == 0) {
        array[b] = Math.floor(Math.random() * 60) + ',' + '  ';
      }
    }

    this.setState({
      number: array,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Gerar números da loteria"
          onPress={() => {
            this.generateRandomNumber();
          }}
        />
        <Text style={styles.text}> Resultado</Text>
        <Text style={styles.result}>{this.state.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  result: {
    color: '#000',
    fontSize: 24,
  },
  text: {
    color: '#000',
    fontSize: 24,
  },
});
