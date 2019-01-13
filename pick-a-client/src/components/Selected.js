import React from 'react';

class Selected extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    search: state.search
})

export default connect(mapStateToProps)(Selected);