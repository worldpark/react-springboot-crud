import React, { Component } from 'react';
import NavBar from './PCNavBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class PCMain extends Component {

    render(){
        return(
            <div>
                <Container>
                    <NavBar />
                </Container>
                <div className="cdiv">
                    <center>
                    <Typography variant="h2" style={style}>
                        Spring & React Project
                    </Typography>
                    </center>
                </div>
            </div>
        );
    }

}

const style = {
    flexGrow: 1
}

export default PCMain