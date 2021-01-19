import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

export class GoogleBtn extends Component {
    render() {
        return (
            <div>
                <GoogleBtn
                clientId="984123359552-m0q70i6c34gfb986tk9bbvobjh9k8huq.apps.googleusercontent.com"
                buttonText=""
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_orgin'}
                />
            </div>
        )
    }
}

export default GoogleBtn;