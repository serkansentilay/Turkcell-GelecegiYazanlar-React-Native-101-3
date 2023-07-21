import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'

const Form = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [form, setForm] = useState({ username: "", email: "", password: "", passwordConfirm: "" })


    const handleSubmit = () => {
        if (!form.username) {
            return false
        }
        if (!form.email) {
            return false
        }
        if (!form.password) {
            return false
        }
        if (!form.passwordConfirm || form.password !== form.passwordConfirm) {
            return false
        }

        console.log(form)
    }

    const handleChange = (text, input) => {
        setForm((prev) => ({ ...prev, [input]: text }))
    }

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <TextInput
                    style={styles.input}
                    placeholder='username'
                    value={form.username}
                    onChangeText={(text) => handleChange(text, "username")}
                />
            </View>

            <View style={styles.item}>
                <TextInput
                    style={styles.input}
                    placeholder='email'
                    value={form.email}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={(text) => handleChange(text, "email")}
                />
            </View>

            <View style={styles.item}>
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    value={form.password}
                    secureTextEntry
                    onChangeText={(text) => handleChange(text, "password")}
                />
            </View>

            <View style={styles.item}>
                <TextInput
                    style={styles.input}
                    placeholder='Password Confirm'
                    value={form.passwordConfirm}
                    secureTextEntry
                    onChangeText={(text) => handleChange(text, "passwordConfirm")}
                />
            </View>

            <View>
                <Button title='Register' onPress={handleSubmit} />
            </View>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20
    },
    item: {
        marginBottom: 4
    },
    input: {
        borderWidth: 1,
        padding: 10,
        fontSize: 24,
        width: '100%',
        borderColor: '#999'
    }
})