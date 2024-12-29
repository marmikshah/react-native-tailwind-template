import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import "../global.css";


const RootLayout = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <View className='w-[100px] h-[100px] items-center justify-center bg-green-200 rounded-xl'>
        <Text>Hello World</Text>
      </View>
    </View>
  )
}

export default RootLayout
