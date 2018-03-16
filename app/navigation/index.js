import React, { Component } from "react";
import { BackHandler } from "react-native";
import { connect } from "react-redux";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import NavigationStack from "./stack";
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';

class AppNavigation extends Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, navigationState } = this.props;
        if (navigationState.stateForLoggedIn.index <= 1) {
            BackHandler.exitApp();
            return;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const middleware = createReactNavigationReduxMiddleware("root");
        const addListener = createReduxBoundAddListener("root");

        const { navigationState, dispatch, isLoggedIn } = this.props;
        const state = isLoggedIn
            ? navigationState.stateForLoggedIn
            : navigationState.stateForLoggedOut;
        return (
            <NavigationStack 
                navigation = {
                    addNavigationHelpers({ 
                        dispatch, 
                        state, 
                        addListener 
                    })
                } 
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.LoginReducer.isLoggedIn,
        navigationState: state.NavigationReducer
    };
};

export default connect(mapStateToProps)(AppNavigation);
