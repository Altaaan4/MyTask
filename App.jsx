import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/router/rootNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  )
}

export default App;