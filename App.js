import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  withSequence,
} from 'react-native-reanimated';

const App = () => {

  const logoPosition = useSharedValue(2000);
  const firstLetter = useSharedValue(-30);
  const secondLetter = useSharedValue(-30);
  const thirdLetter = useSharedValue(-30);
  const fourthLetter = useSharedValue(-30);
  const fiveLetter = useSharedValue(-30);
  const finalWord = useSharedValue(0);

  useEffect(() => {
    logoPosition.value = withTiming(
      0,
      {
        duration: 2000,
      },
      () => {
        firstLetter.value = withSequence(
          withTiming(0, {
            duration: 1000,
            easing: Easing.bounce,
          }),
          withTiming(30, {
            duration: 500,
            easing: Easing.bounce,
          }),
        );
        secondLetter.value = withSequence(
          withTiming(0, {
            duration: 2000,
            easing: Easing.bounce,
          }),
          withTiming(30, {
            duration: 500,
            easing: Easing.bounce,
          }),
        );
        thirdLetter.value = withSequence(
          withTiming(0, {
            duration: 3000,
            easing: Easing.bounce,
          }),
          withTiming(30, {
            duration: 500,
            easing: Easing.bounce,
          }),
        );
        fourthLetter.value = withSequence(
          withTiming(0, {
            duration: 4000,
            easing: Easing.bounce,
          }),
          withTiming(30, {
            duration: 500,
            easing: Easing.bounce,
          }),
        );
        fiveLetter.value = withSequence(
          withTiming(0, {
            duration: 5000,
            easing: Easing.bounce,
          }),
          withTiming(30, {
            duration: 500,
            easing: Easing.bounce,
          }),
        )
        finalWord.value = withSequence(
          withTiming(0, {
            duration: 6000,
            easing: Easing.bounce,
          }),
          withTiming(30, {
            duration: 500,
            easing: Easing.bounce,
          }),
        );
      },
    );
  }, []);

  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: logoPosition.value}],
    };
  });

  const firstLetterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: firstLetter.value }],
      opacity: interpolate(
        firstLetter.value,
        [30, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const secondLetterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: secondLetter.value }],
      opacity: interpolate(
        secondLetter.value,
        [30, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });
  const thirdLetterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: thirdLetter.value }],
      opacity: interpolate(
        thirdLetter.value,
        [30, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });
  const fourthLetterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: fourthLetter.value }],
      opacity: interpolate(
        fourthLetter.value,
        [30, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });
  const fiveLetterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: fiveLetter.value }],
      opacity: interpolate(
        fiveLetter.value,
        [30, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const finalWordSyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: fiveLetter.value }],
      opacity: interpolate(
        finalWord.value,
        [30, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });


  return (
    <View style={styles.container}>

      <View style={[styles.logoContainer]}>
        <Animated.Image source={require('./assets/logo.png')} style={[{ width: '100%', height: 300 },logoStyle]} />
      </View>

      <View style={styles.lettersContainer}>
        <Animated.Text style={[styles.letter, firstLetterStyle]}>R</Animated.Text>
        <Animated.Text style={[styles.letter, secondLetterStyle]}>E</Animated.Text>
        <Animated.Text style={[styles.letter, thirdLetterStyle]}>A</Animated.Text>
        <Animated.Text style={[styles.letter, fourthLetterStyle]}>C</Animated.Text>
        <Animated.Text style={[styles.letter, fiveLetterStyle]}>T</Animated.Text>

        <Animated.View style={[{ marginLeft: 10, flexDirection: 'row' },finalWordSyle]}>

          <Text style={styles.letter}>N</Text>
          <Text style={styles.letter}>A</Text>
          <Text style={styles.letter}>T</Text>
          <Text style={styles.letter}>I</Text>
          <Text style={styles.letter}>V</Text>
          <Text style={styles.letter}>E</Text>

        </Animated.View>

      </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    marginTop: 150,
  },
  lettersContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  letter: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});



export default App