import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { StyleSheet } from 'react-native';

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Slot />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RootLayout;
