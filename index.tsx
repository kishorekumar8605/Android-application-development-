import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Top Tech developers for the company </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Steps 1: android application development</ThemedText> 
       <ThemedText> Institutional or corporate computer owners in the 1960s had to write their own programs to do any useful work with computers. </ThemedText>
        <ThemedText>* While personal computer users may develop their applications, usually these systems run commercial software.</ThemedText>
        <ThemedText>* free-of-charge software ("freeware"), which is most often proprietary, or free and open-source software, which is provided in ready-to-run, or binary form. Software for personal computers is typically </ThemedText> 
          <ThemedText> developed and distributed independently from the hardware or operating system manufacturers.[2] Many perso </ThemedText>
        <ThemedText><ThemedText type="defaultSemiBold">COURSE ABOUT : How to create the app.</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          <ThemedText>in the next line</ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: duration</ThemedText>
        <ThemedText>
          {`15 days `}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a certificate </ThemedText>
        <ThemedText type= "defaultSemiBold">* In the Day 1 I learn how to analyse the app</ThemedText>
          <ThemedText type="defaultSemiBold">* In day 2 i learn how to take the database of social media users</ThemedText> {' '}
          <ThemedText type="defaultSemiBold">* then I track my process by upoload the day by day learnings in github</ThemedText>.
        
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
