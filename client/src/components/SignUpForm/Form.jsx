import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class SignupForm extends Component {
    constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
}

export default SignupForm;