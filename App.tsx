import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function TextWidget({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const AppBar = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <View style={[styles.appBar, { backgroundColor: isDarkMode ? '#0A4B78' : '#FFFFFF' }]}>
    <Text style={styles.appBarTitle}>Your App Title</Text>
     
  </View>
);


export type HelloProps = {
  name: string;
  baseEnthusiasmLevel?: number;
};
// code button Hello
const Hello: React.FC<HelloProps> = ({name, baseEnthusiasmLevel = 0}) => {
  const [enthusiasmLevel, setEnthusiasmLevel] =
    React.useState(baseEnthusiasmLevel);

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  const enthusiasmText = `${name}${getExclamationMarks(enthusiasmLevel)}`;

  return (
    <View style={styles.container}>
      <Text>Index {enthusiasmLevel}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton title="-" onPress={onIncrement} backgroundColor="blue" />
        <CustomButton title="+" onPress={onDecrement} backgroundColor="red" />
      </View>
    </View>
  );
};

export type CustomButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor,
}) => (
  <TouchableOpacity
    style={[styles.customButton, {backgroundColor}]}
    onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// App Code

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
    
        <AppBar isDarkMode={isDarkMode} />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TextWidget title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </TextWidget>
          <Hello name="" baseEnthusiasmLevel={1} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  customButton: {
    width: '50%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: '#3b5998',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  appBar: {
    height: 60, // Adjust height as needed
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#0A4B78', // Default dark mode background color
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a45050', // Default title text color
  },
  
});

export default App;
