import { Button, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, Toolbar, Typography } from '@material-ui/core'
import { CalendarTodayOutlined, CameraAltOutlined, CreateOutlined, DashboardOutlined, HomeOutlined, HouseOutlined, PeopleOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100%",
        color: "white",
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
    },
    icon: {
        marginLeft: theme.spacing(1),
    },
    text: {
        fontWeight: 500,
    }
}));

const Leftbar = () => {

    const classes = useStyles()

    const menuItens = [
        { id: '2', nome: 'Feed', icon: <DashboardOutlined /> },
        { id: '3', nome: 'Eventos', icon: <CalendarTodayOutlined /> },
        { id: '4', nome: 'Portfolio', icon: <CameraAltOutlined /> },
        { id: '5', nome: 'Criar Página', icon: <CreateOutlined /> },
        { id: '6', nome: 'Comunidades', icon: <PeopleOutlined /> },
    ]

    return (
        <div>
            <Drawer variant="permanent" className={classes.container}>
                <Toolbar />
                <Grid className={classes.item}>
                    <List>
                        {menuItens.map((itens) => (
                            <ListItem>
                                <Button>                   
                                    <ListItemIcon className={classes.icon}>
                                        {itens.icon}
                                    </ListItemIcon>
                                    <Typography className={classes.text}>
                                        {itens.nome}
                                    </Typography>
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Drawer>
        </div>
    )
}

export default Leftbar
