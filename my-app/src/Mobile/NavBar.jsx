import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
    root: {
        flexGrow: 1,
    },
};

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }

    handleDrawerToggle = () => this.setState({
         toggle: !this.state.toggle 
        })

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <IconButton className={classes.menuButton} edge="start" aria-lable="Menu" color="inherit" onClick={this.handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={style}>
                            React User Application
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.toggle}>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/">
                            Home
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to="/board">
                            Board
                        </Link>
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}

const style = {
    flexGrow: 1
}

export default withStyles(styles)(NavBar);