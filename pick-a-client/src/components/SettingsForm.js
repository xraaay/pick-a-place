import React from 'react';
import { Form, CustomInput, Label, FormGroup, Input, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux'
import { setSearch } from '../actions/index'
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert2';


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
            showModal: false,
            selection: ''
        }
        this.inputChange = this.inputChange.bind(this)
        this.submitBtn = this.submitBtn.bind(this);
        this.priceBtn = this.priceBtn.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.grabValues = this.grabValues.bind(this);
        this.reroute = this.reroute.bind(this)
    }

    grabValues() {
        let { search } = this.props.data
        this.setState({
            term: search.term,
            location: search.location,
            radius: search.radius,
            price: JSON.parse(search.price),
            openNow: search.openNow,
            useLocation: search.currentLocation
        })
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
            openNow: this.state.openNow,
            currentLocation: this.state.useLocation
        }
        if (position) {
            data.longitude = position.coords.longitude
            data.latitude = position.coords.latitude
        } else {
            data.location = this.state.location
        }
        if(this.validation(data)){
            this.props.setSearch(data)
            this.setState({
                showModal: false
            })
            this.reroute()
        }
    }

    validation(data){
        let price = JSON.parse(data.price);
        let error
        if(!data.term){
            error = "Term is required"
        } else if(!data.longitude && !data.location){
            error = "Location required"
        } else if(!price[0]){
            error = "Price is required"
        } else {
            return true
        }
        swal({
            type: "error",
            title: error
        })
    }

    reroute = () => {
        switch(this.state.selection){
            case 'wyr':
                this.props.history.push("/wyr")
                break;
            case 'rtd':
                this.props.history.push("/rtd")
                break;
            default:
                console.log("error")
        }
    }

    checkUseLocation = selection => {
        this.setState({
            selection: selection
        })
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

    toggleModal(e){
        e.preventDefault()
        if(this.props.data.search){
            this.grabValues()
        }
        this.setState(prevState => {
            return {
                showModal: !prevState.showModal
            }    
        })
    }

    render() {
        return (
            <React.Fragment>
                <a href="#" className="nav-link js-scroll-trigger" style={this.props.buttons} onClick={this.toggleModal}>Search</a>
                <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
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
                                <CustomInput type="checkbox" name="openNow" id="openNow" onChange={this.inputChange} checked={this.state.openNow} label="Open Now" />
                            </FormGroup>

                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" className="btn btn-secondary mx-auto" onClick={()=> {this.checkUseLocation("rtd")}}>RollTheDice</Button>
                        <Button type="button" className="btn btn-secondary mx-auto" onClick={() => {this.checkUseLocation("wyr")}}>WouldYouRather</Button>
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
    data: state.search
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingsForm))