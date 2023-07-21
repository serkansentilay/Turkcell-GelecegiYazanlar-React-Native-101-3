import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { useFormik, Formik, validateYupSchema } from "formik"
import yup from "yup"
import validationSchema from './validations'
import { Box, FormControl, Input, WarningOutlineIcon, Button } from 'native-base'

const FormWithFormik = () => {

    const { values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            passwordConfirm: ""
        },
        onSubmit: async (values, bag) => {
            await new Promise((r) => setTimeout(r, 1000));
            //yukarıda 1 saniye bekledikten sonra aşağıdaki işleme geçiyor normalde backend da işlemleri yaparsın sonra aşağı geçer

            if (values.email === "test@123") {
                // return bag.setErrors({ email: "Bu e-posta zaten kullanılıyor" })
                return bag.setFieldError("email", "Bu e-posta zaten kullanılıyor")
            }

            bag.resetForm();

            console.log(values)
            console.log(bag)
            //bag a fonksiyonlarda 
            //resetForm: formu initial durumuna, ilk durumuna getiriyor,formu resetleyecektir
            //setErrors örneğin kayıtlı bir eposta var onu kontrol etmek için kullanılabilir
            //setFieldError alana göre er
        },
        validationSchema
        //handleblur ve touched birlikte inputtan ayrılma anını yakalar

    })


    return (
        <View style={styles.container}>
            {/* <Formik initialValues={{
                username: "",
                email: "",
                password: "",
                passwordConfirm: ""
            }}
                onSubmit={(values) => console.log(values)}
            >
                {
                    ({ values, handleChange, handleSubmit }) => (
                        <> */}

            <Box alignItems="center" mb={4}>
                <FormControl isInvalid={errors.username && touched.username} w="75%" maxW="300px">
                    <FormControl.Label>Username</FormControl.Label>
                    <Input placeholder="Username"
                        value={values.username}
                        onChangeText={handleChange("username")}
                        onBlur={handleBlur("username")}
                        editable={!isSubmitting} />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {errors.username}
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>

            {/* <View style={styles.item}>
                <TextInput
                    style={styles.input}
                    placeholder='username'
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    editable={!isSubmitting}
                />
                {errors.username && touched.username && <Text style={styles.errors}>{errors.username}</Text>}
            </View> */}

            <Box alignItems="center" mb={4}>
                <FormControl isInvalid={errors.email && touched.email} w="75%" maxW="300px">
                    <FormControl.Label>Email</FormControl.Label>
                    <Input placeholder="Email"
                        value={values.email}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        editable={!isSubmitting} />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {errors.email}
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>

            {/*             
            <View style={styles.item}>
                <TextInput
                    style={styles.input}
                    placeholder='email'
                    value={values.email}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    editable={!isSubmitting}
                />
                {errors.email && touched.email && <Text style={styles.errors}>{errors.email}</Text>}
            </View> */}


            <Box alignItems="center" mb={4}>
                <FormControl isInvalid={errors.password && touched.password} w="75%" maxW="300px">
                    <FormControl.Label>Password</FormControl.Label>
                    <Input placeholder="password"
                        value={values.password}
                        secureTextEntry
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        editable={!isSubmitting} />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {errors.password}
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>

            {/* 
            <View style={styles.item}>
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    value={values.password}
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    editable={!isSubmitting}
                />
                {errors.password && touched.password && <Text style={styles.errors}>{errors.password}</Text>}
            </View> */}


            <Box alignItems="center" mb={4}>
                <FormControl isInvalid={errors.passwordConfirm && touched.passwordConfirm} w="75%" maxW="300px">
                    <FormControl.Label>Password Confirm</FormControl.Label>
                    <Input placeholder="Password Confirm"
                        value={values.passwordConfirm}
                        secureTextEntry
                        onChangeText={handleChange("passwordConfirm")}
                        onBlur={handleBlur("passwordConfirm")}
                        editable={!isSubmitting} />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {errors.passwordConfirm}
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>

            {/* <View style={styles.item}>
                <TextInput
                    style={styles.input}
                    placeholder='Password Confirm'
                    value={values.passwordConfirm}
                    secureTextEntry
                    onChangeText={handleChange("passwordConfirm")}
                    onBlur={handleBlur("passwordConfirm")}
                    editable={!isSubmitting}
                />
                {errors.passwordConfirm && touched.passwordConfirm && <Text style={styles.errors}>{errors.passwordConfirm}</Text>}
            </View> */}






            <Button
                size={"lg"}
                onPress={handleSubmit}
                disabled={isSubmitting}
                isLoading={isSubmitting}
                isLoadingText='Submitting'
            >
                REGISTER
            </Button>




            {/* </>
                    )
                }
            </Formik> */}

        </View>
    )
}

export default FormWithFormik

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
    },
    errors: {
        color: 'red'
    }
})