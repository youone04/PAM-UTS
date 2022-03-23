import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RBSheet from "react-native-raw-bottom-sheet";
import React, { useRef } from 'react';
const Stack = createNativeStackNavigator();
import Home from './screens/Home';
import ListTiket from './screens/ListTiket';
import { View, Text, StyleSheet,  } from 'react-native';
import Transaksi from './screens/Transaksi';
import OrderList from './screens/OrderList';
import OrderListCancel from './screens/OrderListCancel';
// var uid = (new Date().getTime()).toString(36)
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faHome ,faList, faBan , faPhone} from '@fortawesome/free-solid-svg-icons'

const Menu = ({ navigation }) => {
  const refRBSheet = useRef();

  const handleBottom = () => {
    refRBSheet.current.open();

  }

  return (
    <>
      <FontAwesomeIcon icon={faBars} size={30} onPress={() => handleBottom()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={[styles.container, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "row", height: '50%'
        }]}>
          <View style={{ flex: 1, margin: 6, borderRadius: 80, }}>
            <Text onPress={() => navigation.navigate('Home')} style={{ textAlign: 'center', marginTop: 20, fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>  <FontAwesomeIcon icon={faHome} size={30} /></Text>
          </View>
          <View style={{ flex: 1, margin: 6, borderRadius: 80, }}>
            <Text onPress={() => navigation.navigate('OrderList')} style={{ textAlign: 'center', marginTop: 20, fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}> <FontAwesomeIcon icon={faList} size={30} /></Text>
          </View>
          <View style={{ flex: 1, margin: 6, borderRadius: 80, }} ><Text onPress={() => navigation.navigate('CancelList')} style={{ textAlign: 'center', marginTop: 20, fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}> <FontAwesomeIcon icon={faBan} size={30} color={'red'}/></Text></View>
          <View style={{ flex: 1, margin: 6, borderRadius: 80, }} >
          <Text onPress={() => navigation.navigate('CancelList')} style={{ textAlign: 'center', marginTop: 20, fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>   <FontAwesomeIcon icon={faPhone} size={30} color={'green'}/></Text>
       
          </View>
        </View>
        
      </RBSheet>
    </>
  )
}


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({
          headerRight: props => <Menu navigation={navigation} {...props} />,

        })} />
        <Stack.Screen name="ListTiket" component={ListTiket} options={({ navigation, route }) => ({
          headerRight: props => <Menu navigation={navigation} {...props} />,
          headerTitle: ''

        })} />
        <Stack.Screen name="Transaksi" component={Transaksi} options={({ navigation, route }) => ({
          headerTitle: '',
          headerLeft: (props) => <Text></Text>


        })} />
        <Stack.Screen name="OrderList" component={OrderList} options={({ navigation, route }) => ({
          headerRight: props => <Menu navigation={navigation} {...props} />,
          headerTitle: ''

        })} />

        <Stack.Screen name="CancelList" component={OrderListCancel} options={({ navigation, route }) => ({
          headerRight: props => <Menu navigation={navigation} {...props} />,
          headerTitle: ''

        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});