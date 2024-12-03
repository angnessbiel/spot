import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { AppContext } from '../scripts/appContext';

export default function FullStack() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { userInfo, setUserInfo } = useContext(AppContext)


    const router = useRouter()

    const handleLogin = async () => {
        if (!username || !password ) {
            alert('Preencha todos os campos');
            return;
        }
         try {
            const response = await fetch('http://localhost:8000/autenticacao/login/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: username,
                    senha: password
                })
            });
    
            const data = await response.json();
            setUserInfo(data.userInfo)
            if (response.status === 404) {
                alert('Email não encontrado');
                return
            }
            if (response.status === 403){
                alert('Senha incorreta');
                return
            }

            router.push('../home')
    
        } catch (error) {
            console.error('Erro:', error);
        } 
    }


    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Text style={styles.logo}>Listenin</Text>
                <View style={styles.labelContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Pressable onPress={() => { }}>
                        <Text style={styles.esqueciSenha}>Esqueci a senha!</Text>
                    </Pressable>

                    <Pressable style={styles.botao} onPress={handleLogin}>
                        <Text style={styles.textoBotao}>Acessar</Text>
                    </Pressable>
                    <Link href="./cadastro">
                    <Pressable onPress={() => {router.push('./cadastro')}}>
                        <Text style={styles.signup}>Não possuo cadastro</Text>
                    </Pressable>
                    </Link>
                </View>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', 
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#333', 
        color: '#fff', 
    },
    button: {
        backgroundColor: '#800080', 
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '80%',
    },
    buttonText: {
        color: '#fff', 
        fontWeight: 'bold',
    },
    link: {
        marginTop: 10,
        color: '#800080', 
        
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', 
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#333', 
        color: '#fff', 
    },
    button: {
        backgroundColor: '#800080', 
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '80%',
    },
    buttonText: {
        color: '#fff', 
        fontWeight: 'bold',
    },
    link: {
        marginTop: 10,
        color: '#800080', 
        
    },

    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        backgroundColor: '#333',
        alignItems: 'center',
        width: '100',
        maxWidth: 400, 
        borderRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    logo: {
        color: 'white',
        marginBottom: 30,
        fontSize: 30,
    },
    labelContainer: {
        width: '100%',
    },
    input: {
        backgroundColor: '#888',
        width: '100%',
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
        marginVertical: 15,
        color: '#333',
    },
    esqueciSenha: {
        color: 'white',
        textDecorationLine: 'underline',
        fontSize: 14,
        alignSelf: 'flex-start',
        marginTop: -10,
    },
    botao: {
        backgroundColor: '#800080',
        width: '100%',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
    },
    textoBotao: {
        color: 'white',
        fontSize: 18,
    },
    signup: {
        color: 'white',
        marginTop: 20,
        fontSize: 16,
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
});
