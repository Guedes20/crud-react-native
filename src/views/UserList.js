import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';
import UsersContext from '../context/UserContext'


export default props => {

    const { state , dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário? ', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }

        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />

                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="#FF0000" />}
                />

            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider
                leftAvatar={{ source: { uri: user.avatarUrl } }}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                onPress={() => props.navigation.navigate('UserForm')}
                rightElement={getActions(user)}

            />
        )
    }


    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem} />
        </View>
    )
}
