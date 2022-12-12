//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { SP_KEY } from '@env';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './src/PaymentScreen';

// create a component
const App = () => {



  return (
    <View style={styles.container}>

        <StripeProvider
          publishableKey={SP_KEY}
          merchantIdentifier="merchant.identifier" // required for Apple Pay
          urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        >
          <PaymentScreen />
        </StripeProvider>


    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

//make this component available to the app
export default App;
