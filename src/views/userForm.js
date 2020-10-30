import React, { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import UsersContext from '../context/UserContext';

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)

    return (
        <View style={styles.form}>
            <Text> Nome:</Text>
            <TextInput
                style={styles.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o nome"
                value={user.name}
            />

            <Text>E-mail:</Text>
            <TextInput
                style={styles.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o nome"
                value={user.email}
            />
            <Text>Url do avatar:</Text>
            <TextInput
                style={styles.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe o nome"
                value={user.avatarUrl}
            />

            <Button
                title='Salvar'
                color="#A0522D"
                onPress={() => { 
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload : user
                    })
                    navigation.goBack() }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 12
    },

    input: {
        backgroundColor: '#FFF',
        height: 40,
        borderRadius: 10,
        borderColor: 'gray',
        //borderLeftWidth: 0.,
        marginBottom: 10,
    }

})