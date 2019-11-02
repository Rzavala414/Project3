import React, { Component } from 'react'
import LoginForm from "../../components/LoginForm";

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>This is LoginPage</h1>
            <LoginForm/>
            </div>
        )
    };
}
// function LoginPage() {
//     return (
//         <div>
//             <LoginForm/>
//                 <h1>This is LoginPage</h1>
//             </div>
//     );
// }

// export default LoginPage;