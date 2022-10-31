import React from 'react';
import Body from './firstPage/Body';
import Rule from './secondPage/Rule';
import Result from './thirdPage/Result';
import Calculator from './thirdPage/Calculator';
import Faq from './fifthPage/Faq';
import About from './firstPage/About';
import BiznesItem from './firstPage/BiznesItem';
import Recomendations from './fourthPage/Recomendations';
import Biznes from './firstPage/Biznes';
import News from './firstPage/News';
import NewsItem from './firstPage/NewsItem';
import Contact from './firstPage/Contact';
import Arizachi from './statement/Arizachi';
import Manzil from './statement/Manzil';
import NewsItem2 from './firstPage/NewsItem2';
import NewsItem3 from './firstPage/NewsItem3';
import NewsItem4 from './firstPage/NewsItem4';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Spends from './statement/Harajatlar/Spends';
import Increments from './statement/Increments/Increments';
import Total from './statement/Total';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from './firstPage/Contact';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Navigate}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Item"
        component={BiznesItem}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsItem"
        component={NewsItem}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsItem2"
        component={NewsItem2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsItem3"
        component={NewsItem3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsItem4"
        component={NewsItem4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Ariza"
        component={ArizaStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export function Navigate() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          tabBarIcon: () => <AntDesign name="home" color="#111" size={24} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Rule"
        component={Rule}
        options={{
          tabBarIcon: () => (
            <AntDesign name="solution1" color="#111" size={24} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarOptions: {
            labelStyle: {
              paddingTop: 20,
            },
          },
        }}
      />
      <Tab.Screen
        name="Stack"
        component={StackNavigator}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="calculator" color="#111" size={24} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarOptions: {
            labelStyle: {
              paddingTop: 20,
            },
          },
        }}
      />
      <Tab.Screen
        name="Recomendations"
        component={Recomendations}
        options={{
          tabBarIcon: () => <AntDesign name="like2" color="#111" size={26} />,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarOptions: {
            labelStyle: {
              paddingTop: 20,
            },
          },
        }}
      />
      <Tab.Screen
        name="Faq"
        component={Faq}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="question" color="#111" size={26} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarOptions: {
            labelStyle: {
              paddingTop: 20,
            },
          },
        }}
      />
    </Tab.Navigator>
  );
}
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calculator"
        component={Calculator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Body}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Stack.Navigator>
  );
};

export function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="OilaKredit"
        component={Body}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Loyiha haqida"
        component={About}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Biznes rejalar"
        component={Biznes}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Yangiliklar"
        component={News}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Boglanish"
        component={Contact}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
function ArizaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Arizachi"
        component={Arizachi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Manzil"
        component={Manzil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Spends"
        component={Spends}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Increments"
        component={Increments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Total"
        component={Total}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
