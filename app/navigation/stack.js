import { StackNavigator } from "react-navigation";

import Screen1 from "../components/Screen1";
import Logout from "../components/Logout";
import Login from "../components/Login";

const navigator = StackNavigator({
    login: {
        screen: Login
    },
    screen1: {
        screen: Screen1
    },
    screen2: {
        screen: Logout
    }
});

export default navigator;
