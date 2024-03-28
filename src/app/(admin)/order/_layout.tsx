import React from 'react';
import { Tabs } from 'expo-router';


export default function orderLayout() {

  return (
    <Tabs screenOptions={{
        tabBarStyle: {
          display:  'none',
        }}}>

      <Tabs.Screen
        name="list"
        options={{
          href:null,
          title:'Order ',
          headerShown:false,
          // headerTitleAlign:'center',
          // tabBarShowLabel:false,
          // title: 'Orders ',
        //   tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
          />
          
      <Tabs.Screen
        name="[id]"
        options={{
          href:null,
        //   headerShown: false,
          tabBarShowLabel:false,
        //   title: 'Orders ',
        //   tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
          />
    </Tabs>
  );
}
