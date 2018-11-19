import React from 'react';
import * as settingsService from '../services/settingsService'
import { Label, FormGroup, Input, Button, ButtonGroup } from 'reactstrap'

class SettingsForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            location: '',
            radius: '',
            price: [],
            openNow: ''
        }
        this.inputChange = this.inputChange.bind(this)
        this.submitBtn = this.submitBtn.bind(this);
        this.priceBtn = this.priceBtn.bind(this)
    }

    componentDidMount(){
        if(this.props.match.params.id){
            settingsService.getById(this.props.match.params.id)
                .then(response => {
                    let setting = response.data
                    this.setState({
                        name: setting.name,
                        location: setting.location,
                        radius: setting.radius,
                        price: JSON.parse(setting.price),
                        openNow: setting.openNow
                    })
                })
                .catch(console.log)
        }
    }

    inputChange(e){
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value
        })
    }

    submitBtn(){
        const data = {
            name: this.state.name,
            location: this.state.location,
            radius: this.state.radius,
            price: JSON.stringify(this.state.price),
            openNow: this.state.openNow
        }
        settingsService.create(data)
            .then(response => {
                this.props.history.push("/settings")
            })
            .catch(console.log)
    }

    priceBtn(selected) {
        debugger
        const index = this.state.price.indexOf(selected);
        if (index < 0) {
          this.state.price.push(selected);
        } else {
          this.state.price.splice(index, 1);
        }
        this.setState({ price: [...this.state.price] });
      }

    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <h1></h1>
                    <div className="col-sm-6">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <label>Location</label>
                        <input type="text" name="location" value={this.state.location} onChange={this.inputChange} className="form-control" />

                    </div>
                    <div className="col-sm-6">
                        <FormGroup>
                            <Label>Distance</Label>
                            <Input type="select" name="radius" onChange={this.inputChange} value={this.state.radius}>
                                <option value={1609}>1 mile</option>
                                <option value={8046}>5 miles</option>
                                <option value={16093}>10 miles</option>
                                <option value={32186}>20 miles</option>
                            </Input>
                        </FormGroup>
                    </div>
                    <div className="col-sm-6">
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="openNow" onChange={this.inputChange} checked={this.state.openNow} />
                                Open Now
                            </Label>
                        </FormGroup>
                        <br></br>
                    </div>
                    <div className="col-sm-6">
                        <ButtonGroup>
                            <Button color="secondary" onClick={() => this.priceBtn(1)} active={this.state.price.includes(1)}>$</Button>
                            <Button color="secondary" onClick={() => this.priceBtn(2)} active={this.state.price.includes(2)}>$$</Button>
                            <Button color="secondary" onClick={() => this.priceBtn(3)} active={this.state.price.includes(3)}>$$$</Button>
                            <Button color="secondary" onClick={() => this.priceBtn(4)} active={this.state.price.includes(4)}>$$$$</Button>
                        </ButtonGroup>
                    </div>
                    <br></br>
                    <div className="col-sm-2">
                        <button type="button" className="btn btn-secondary mx-auto" onClick={this.submitBtn}>Search</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SettingsForm