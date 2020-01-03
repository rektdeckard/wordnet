import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  StatusBar,
} from 'react-native';
import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import {
  ApplicationProvider,
  Layout,
  Card,
  Text,
  Input,
  Button,
  Toggle,
  CheckBox,
} from '@ui-kitten/components';
import {mapping, dark as darkTheme, light as lightTheme} from '@eva-design/eva';

Amplify.configure(awsconfig);

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [prompt, setPrompt] = useState('smart');
  const [response, setResponse] = useState('');
  const [responses, setResponses] = useState([]);
  const [time, setTime] = useState(new Date());

  const appendResponse = () => {
    setResponses([...responses, {prompt, response, time: new Date() - time}]);
    setPrompt(response);
    setResponse('');
    setTime(new Date());
  };

  const skipPrompt = () => {
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)].response;
    setPrompt(randomResponse);
    setResponse('');
    setTime(new Date());
  };

  const changeTheme = () => {
    if (theme === lightTheme) setTheme(darkTheme);
    else setTheme(lightTheme);
  };

  return (
    <ApplicationProvider mapping={mapping} theme={theme}>
      <StatusBar backgroundColor="black" />
      <Layout level="4" style={styles.container}>
        <Toggle text="Dark" status="warning" checked={theme === darkTheme} onChange={changeTheme} />
        <ScrollView style={{flex: 1}}>
          {responses
            ? responses.map(r => (
                <Text key={r.response + Math.random()}>{`${r.prompt} -> ${
                  r.response
                } (${r.time / 1000.0} sec)`}</Text>
              ))
            : null}
        </ScrollView>
        <Card
          header={() => (
            <>
              <Text style={styles.prompt}>
                Please define the following word:
              </Text>
              <Text style={styles.prompt} category="h2">
                {prompt}
              </Text>
            </>
          )}>
          <Input
            size="small"
            status="primary"
            label={`Define the word ${prompt}`}
            value={response}
            onChangeText={setResponse}
          />
          <Layout style={styles.buttons}>
            <Button
              style={[styles.button, {marginEnd: 4}]}
              onPress={appendResponse}
              disabled={!response}>
              SUBMIT
            </Button>
            <Button
              style={[styles.button, {marginStart: 4}]}
              status="basic"
              onPress={skipPrompt}>
              SKIP
            </Button>
          </Layout>
        </Card>
      </Layout>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  prompt: {
    margin: 8,
  },
  input: {
    margin: 8,
  },
  container: {
    padding: 16,
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
  },
});

export default App;
