import React from 'react';
import * as settingsService from '../services/settingsService'
import { Form, CustomInput, Label, FormGroup, Input, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux'
import { setSearch } from '../actions/index'
class SettingsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            location: '',
            radius: 1609,
            price: [],
            openNow: false,
            useLocation: false,
            isOpen: false
        }
        this.inputChange = this.inputChange.bind(this)
        this.submitBtn = this.submitBtn.bind(this);
        this.priceBtn = this.priceBtn.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        // if (this.props.match.params.id) {
        //     settingsService.getById(this.props.match.params.id)
        //         .then(response => {
        //             let setting = response.data
        //             this.setState({
        //                 term: setting.term,
        //                 location: setting.location,
        //                 radius: setting.radius,
        //                 price: JSON.parse(setting.price),
        //                 openNow: setting.openNow
        //             })
        //         })
        //         .catch(console.log)
        // }
    }

    inputChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value
        })
    }

    submitBtn(position) {
        const data = {
            term: this.state.term,
            radius: this.state.radius,
            price: JSON.stringify(this.state.price),
            openNow: this.state.openNow
        }
        if (position) {
            data.longitude = position.coords.longitude
            data.latitude = position.coords.latitude
        } else {
            data.location = this.state.location
        }
        //Use redux to store information after search request
        setSearch(data)
        // settingsService.create(data)
        //     .then(response => {
        //         if(response){
        //             setResponse(response)
        //             this.props.history.push("/settings")
        //         } else {
        //             alert("Error")
        //         }
        //     })
        //     .catch(console.log)
    }

    checkUseLocation = () => {
        if (this.state.useLocation) {
            navigator.geolocation.getCurrentPosition(this.submitBtn)
        } else {
            this.submitBtn()
        }
    }

    priceBtn(selected) {
        const index = this.state.price.indexOf(selected);
        if (index < 0) {
            this.state.price.push(selected);
        } else {
            this.state.price.splice(index, 1);
        }
        this.setState({ price: [...this.state.price] });
    }

    toggleModal(){
        this.setState(prevState => {
            return {
                isOpen: !prevState.isOpen
            }    
        })
    }

    render() {
        return (
            <React.Fragment>
                <a href="#" className="nav-link js-scroll-trigger" style={this.props.buttons} onClick={this.toggleModal}>Search</a>
                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} style={{textAlign: 'center'}}>Search</ModalHeader>
                    <ModalBody>
                        <Form className="col-sm-6">
                            <FormGroup>
                                <Label>Search Term</Label>
                                <Input type="text" name="term" value={this.state.term} onChange={this.inputChange} className="form-control" placeholder="Enter a Search Term" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Location</Label>
                                <Input type="text" name="location" value={this.state.location} onChange={this.inputChange} className="form-control" disabled={this.state.useLocation} placeholder="Enter a location" />
                                <CustomInput type="checkbox" name="useLocation" id="useLocation" onChange={this.inputChange} checked={this.state.useLocation} label="Use Current Location" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Distance</Label>
                                <Input type="select" name="radius" onChange={this.inputChange} value={this.state.radius}>
                                    <option value={1609}>1 mile</option>
                                    <option value={8046}>5 miles</option>
                                    <option value={16093}>10 miles</option>
                                    <option value={32186}>20 miles</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Price</Label>
                                <br></br>
                                <ButtonGroup>
                                    <Button color="secondary" onClick={() => this.priceBtn(1)} active={this.state.price.includes(1)}>$</Button>
                                    <Button color="secondary" onClick={() => this.priceBtn(2)} active={this.state.price.includes(2)}>$$</Button>
                                    <Button color="secondary" onClick={() => this.priceBtn(3)} active={this.state.price.includes(3)}>$$$</Button>
                                    <Button color="secondary" onClick={() => this.priceBtn(4)} active={this.state.price.includes(4)}>$$$$</Button>
                                </ButtonGroup>
                            </FormGroup>
                            <FormGroup>
                                <CustomInput type="checkbox" name="openNow" id="openNow" onClick={this.inputChange} checked={this.state.openNow} label="Open Now" />
                            </FormGroup>

                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" className="btn btn-secondary mx-auto" onClick={this.checkUseLocation}>RTD</Button>
                        <Button type="button" className="btn btn-secondary mx-auto" onClick={this.checkUseLocation}>WYR</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setSearch: data => dispatch(setSearch(data))
})

const mapStateToProps = state => ({
    response: state.search
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm)

//wait, worth, long, 