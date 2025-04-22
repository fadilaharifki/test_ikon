import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DataListScreen} from '../screens/DataListScreen';

export type RootStackParamList = {
  dataList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
        }}>
        <Stack.Screen
          name="dataList"
          component={DataListScreen}
          options={() => ({
            title: 'dataList',
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
