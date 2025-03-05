import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MYNOTES, ADDNOTE, NOTEDETAIL} from '../utils/router';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNotes';
import NodeDetail from '../screens/nodeDetail';
import HeaderRight from '../components/uı/headerRight';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{
          headerRight: () => <HeaderRight />,
        }}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen name={NOTEDETAIL} component={NodeDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
