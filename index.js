import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

import React from 'react';
import AWSAppSyncClient from 'aws-appsync';
import {Rehydrated} from 'aws-appsync-react';
import {ApolloProvider} from 'react-apollo';
import {Auth} from 'aws-amplify';

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: config.aws_appsync_authenticationType,
    jwtToken: async () => (await Auth.currentSession()).idToken.jwtToken,
  },
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => AppWithProvider);
