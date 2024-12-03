import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { Link, router } from 'expo-router';


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
            const response = fetch('http://localhost:8000/autenticacao/registro', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    dataNascimento: dataNasc,
                    senha: senha
                })
            })
            if (response.status === 406) {
                alert('preencha todos os campos')
                return
            }

            if (response.status === 400) {
                alert('erro ao cadastrar')
                return
            }

            if (response.status === 201) {
                router.push('/')
            }
        } catch (erro) {
            console.log(erro)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.cadastro}>
                <Text style={styles.logo}>Listenin</Text>
                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.inputHalf]}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <TextInput
                        style={[styles.input, styles.inputHalf]}
                        placeholder="Sobrenome"
                        value={sobrenome}
                        onChangeText={setSobrenome}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.inputHalf]}
                        placeholder="Data de Nasc"
                        value={dataNasc}
                        onChangeText={setDataNasc}
                    />
                    <TextInput
                        style={[styles.input, styles.inputHalf]}
                        placeholder="CPF"
                        value={cpf}
                        onChangeText={setCpf}
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.inputHalf]}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={[styles.input, styles.inputHalf]}
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
                <Pressable style={styles.botao} onPress={handleLogin}>
                    <Text style={styles.textoBotao}>Acessar</Text>
                </Pressable>
                <Link href="../">
                <Pressable onPress={() => router.push('/')}>
                    <Text style={styles.signup}>Já tem cadastro? Faça seu login!</Text>
                </Pressable>
                </Link>
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
        padding: 10,
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cadastro: {
        backgroundColor: '#333',
        alignItems: 'center',
        width: '100',
        maxWidth: '100',
        borderRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
    
    },
    logo: {
        color: 'white',
        marginBottom: 20,
        fontSize: 30,
    },
    row: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#888',
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        color: '#000',
    },
    inputHalf: {
        width: '100',
        marginBottom: 10, 
    },
    botao: {
        backgroundColor: '#800080',
        width: '100%',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    textoBotao: {
        color: 'white',
        fontSize: 18,
    },
    signup: {
        color: 'white',
        marginTop: 10,
        fontSize: 14,
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
});
