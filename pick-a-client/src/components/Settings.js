import React from 'react';
import axios from 'axios';

class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.getAllSettings()
    }

    getAllSettings(){
        let url = "/api/settings"
        const config = {
            method: 'GET'
        }
        let response = axios(url, config)
            .then(console.log)
            .catch(console.log)
        return response
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Settings