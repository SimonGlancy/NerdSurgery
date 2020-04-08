/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  PanResponder,
  Animated,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const { width, height } = Dimensions.get('window')
  const [size, setSize] = useState(200)
  const [top, setTop] = useState((height / 2) - (size /2));
  const [left, setLeft] = useState((width / 2) - (size / 2));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder:        ( e, state ) => false,
    onStartShouldSetPanResponderCapture: ( e, state ) => false,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      const { dx, dy } = gestureState
      return (dx > 2 || dx < -2 || dy > 2 || dy < -2)
    },
    
    onMoveShouldSetPanResponderCapture: (_, gestureState) => {
      const { dx, dy } = gestureState
      return (dx > 2 || dx < -2 || dy > 2 || dy < -2)
    },
    onPanResponderMove: (evt, gestureState) => {
      console.log("------- gs", gestureState.dy, top)
      setTop(prev => prev + gestureState.dy)
      setLeft(prev => prev + gestureState.dx)
    },
  });



  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Animated.View style={{
          width: size,
          height: size,
          backgroundColor: 'red',
          top,
          left,
          position: 'absolute',
        }}
        {...panResponder.panHandlers}
        >

        </Animated.View>
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
