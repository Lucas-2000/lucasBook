import { AppBar, Avatar, Button, Grid, IconButton, InputAdornment, InputBase, Menu, MenuItem, TextField, Toolbar, Typography } from '@material-ui/core'
import { ChatBubbleOutlined, HelpOutlined, Search } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'

const useStyles = makeStyles(() => ({
    div: {
        display: 'flex'
    },
    procurar: {
        marginLeft: 'auto'
    },
    opcoes: {
        marginLeft: 'auto'
    },
    text: {
        width: '400px'
    }
}))

const Navbar = () => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.div}>
            <AppBar elevation={0} color="primary" position="fixed">
                <Toolbar>
                    <Grid>
                        <Typography variant="h4">
                            LucasBook
                        </Typography>
                    </Grid>
                    <Grid className={classes.procurar}>
                        <InputBase
                            className={classes.text}
                            placeholder="Digite algo..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            }>
                        </InputBase>
                    </Grid>
                    <Grid className={classes.opcoes}>
                        <IconButton>
                            <ChatBubbleOutlined />
                        </IconButton>
                        <IconButton>
                            <HelpOutlined />
                        </IconButton>
                        <IconButton
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <Avatar />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Perfil</MenuItem>
                            <MenuItem onClick={handleClose}>Minha conta</MenuItem>
                            <MenuItem onClick={handleClose}>Opções</MenuItem>
                            <MenuItem onClick={handleClose}>Sair</MenuItem>
                        </Menu>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
