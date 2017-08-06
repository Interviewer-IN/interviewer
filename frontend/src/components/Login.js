import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div className="auth">
                <div className="auth-container">
                    <div className="card">
                        <header className="auth-header">
                            <h1 className="auth-title">
                                <div className="logo">
                                    <span className="l l1"></span>
                                    <span className="l l2"></span>
                                    <span className="l l3"></span>
                                    <span className="l l4"></span>
                                    <span className="l l5"></span>
                                </div>
                                ModularAdmin
                            </h1>
                        </header>
                        <div className="auth-content">
                            <p className="text-xs-center">LOGIN TO CONTINUE</p>
                            <form id="login-form" action="/index.html" method="GET" novalidate="novalidate">
                                <div className="form-group">
                                    <label for="username">Username</label>
                                    <input type="email" className="form-control underlined" name="username"
                                           id="username" placeholder="Your email address" required=""
                                           aria-required="true"/>
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control underlined" name="password"
                                           id="password" placeholder="Your password" required="" aria-required="true"/>
                                </div>
                                <div className="form-group">
                                    <label for="remember">
                                        <input className="checkbox" id="remember" type="checkbox"/>
                                        <span>Remember me</span>
                                    </label>
                                    <a href="reset.html" className="forgot-btn pull-right">Forgot password?</a>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                                </div>
                                <div className="form-group">
                                    <p className="text-muted text-xs-center">Do not have an account?&emsp;
                                        <a href="signup.html">Sign Up!</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="text-xs-center">
                        <a href="index.html" className="btn btn-secondary rounded btn-sm">
                            <i className="fa fa-arrow-left"></i> Back to dashboard </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;