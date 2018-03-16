import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { StyleSheet, Keyboard } from "react-native";

import {
    Container,
    Content,
    Footer,
    FooterTab,
    Form,
    Item,
    Input,
    Text,
    Button,
    Label
} from 'native-base';
import Header from '../Navigation/Header'

import {
    login,
    changeEmail,
    changePassword
} from "../../actions";

class LoginScreen extends Component {
    static navigationOptions = {
        title: "Login",
        header: null
    };

    render() {
        const { login_state } = this.props;
        const { message, email, password, error, token } = login_state;
            return (
                <Container style={styles.container}>
                <Header title="React Native"/>
                    <Content>
                        <Form style={styles.loginForm}>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    value={email}
                                    returnKeyType="next"
                                    onChangeText={email => this.props.onChangeEmail(email)}
                                    onSubmitEditing={(event) => {
                                        this.refs.Password.focus();
                                    }}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input
                                    secureTextEntry={true}
                                    ref='Password'
                                    underlineColorAndroid="rgba(0,0,0,0)"
                                    returnKeyType="done"
                                    value={password}
                                    onChangeText={password => this.props.onChangePassword(password)}
                                />
                            </Item>
                        </Form>
                        <Button
                            style={styles.loginButton}
                            onPress={this.props.userLogin(email, password)}
                        >
                            <Text style={styles.loginButtonText}> Login </Text>
                        </Button>
                    </Content>
                </Container>
            );
        }
    }


export function mapDispatchToProps(dispatch) {
    return {
        onChangeEmail: (email) => {
            dispatch(changeEmail(email));
        },
        onChangePassword: (password) => {
            dispatch(changePassword(password));
        },
        userLogin: (email, password) => () =>{
            dispatch(login(email, password));
            Keyboard.dismiss();
        },
        dispatch,
    }
}

const mapStateToProps = state => ({
    login_state: state.LoginReducer
});

const styles = StyleSheet.create({
    loginButton: {
        marginTop: 20,
        alignSelf:'center',
    },
    loginButtonText: {
        paddingLeft: 30,
        paddingRight: 30,
    },
});


const Login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default Login;
