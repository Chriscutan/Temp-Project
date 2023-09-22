import { Button, StyleSheet, Text, TextInput, View} from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const login = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
            <TextInput placeholder='Email' style={styles.emailInput}/>
            <TextInput placeholder='Password'  style={styles.pwdInput}/>
            <Button title='Sign In' onPress={() => router.push('/screens/home')}/>

            <View style={styles.register}>
                <Text>Don't have an account? <Link href="/register" style={styles.regLink}>Sign Up</Link></Text>
            </View>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    emailInput: {
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    pwdInput: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginTop: 5,
    },
    register: {
        marginTop: 10,
    },
    regLink: {
        color: "blue"
    }
})