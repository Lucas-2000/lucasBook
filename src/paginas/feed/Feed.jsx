import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Container, FormControl, IconButton, InputBase, makeStyles, MenuItem, Select, Typography } from '@material-ui/core'
import { Favorite, MoreVert, Share } from '@material-ui/icons'
import React from 'react'
import paella from '../../imagens/paella.jpg'

const useStyles = makeStyles(tema => ({
    container: {
        paddingTop: tema.spacing(3),
        maxWidth: '700px'
    },
    card: {
        marginBottom: tema.spacing(5)
    },
}))

const Feed = () => {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar />
                    }
                    title="Criar post"
                    subheader="Digite abaixo para criar um post">
                </CardHeader>
                <CardContent>
                    <InputBase
                        placeholder="Digite o que esta pensando..."
                        fullWidth
                        multiline
                        rows={4}>
                    </InputBase>
                </CardContent>
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"
                        style={{ marginLeft: 'auto' }}>
                        Postar
                    </Button>
                    <FormControl>
                        <Select variant="outlined">
                            <MenuItem value={1}>Publico</MenuItem>
                            <MenuItem value={2}>Apenas Amigos</MenuItem>
                            <MenuItem value={3}>Privado</MenuItem>
                        </Select>
                    </FormControl>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar />
                    }
                    action={
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                >
                </CardHeader>
                <CardMedia
                    component="img"
                    height="194"
                    image={paella}
                    alt="Paella dish" />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton>
                        <Favorite />
                    </IconButton>
                    <IconButton>
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </Container>
    )
}

export default Feed
