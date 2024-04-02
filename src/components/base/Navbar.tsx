import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/" style={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
                  <Typography variant="h6">
                    Bridge Royale
                  </Typography>
                </Link>
                <Button color="inherit" component={Link} to="/signup">Sign-up</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar