import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';

const register = () => {
    const router = useRouter();
    const [pendingVerification, setPendingVerification] = useState(false);

    const verifyCode = () => {
        setPendingVerification(true);
    }
  return (
    <View>
        {!pendingVerification ? (<View>
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Password'/>
            <Button title='Sign Up' onPress={verifyCode}/>
       </View>) : (<View>
           <TextInput placeholder='Code'/>
           <Button title='Verify Code' onPress={() => router.replace('/screens/home')}/> 
       </View>)}
       

       
    </View>
  )
}

export default register

const styles = StyleSheet.create({})