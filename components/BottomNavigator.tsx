import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const BottomNavigator = () => {
  return (
     <Tabs>
        <Tabs.Screen name='Home' options={{
            href: "/app/screens/home.tsx",
            tabBarLabel: "Home"
        }}/>
     </Tabs>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})