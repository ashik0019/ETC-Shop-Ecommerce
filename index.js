import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { registerRNAsyncDriver } from './src/utils/storage';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

registerRNAsyncDriver();


AppRegistry.registerComponent(appName, () =>gestureHandlerRootHOC(App));
