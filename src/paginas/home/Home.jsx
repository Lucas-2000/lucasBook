import { Button, Card, CardContent, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    button: {
        marginTop: '10px'
    },
    card: {
        heigth: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '400px'
    },
    cardContent: {
        flexGrow: 1
    }
}))


const Home = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nomeError, setNomeError] = useState(false)
    const [sobrenomeError, setSobrenomeError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [senhaError, setSenhaError] = useState(false)

    const [email2, setEmail2] = useState('')
    const [senha2, setSenha2] = useState('')
    const [emailError2, setEmailError2] = useState(false)
    const [senhaError2, setSenhaError2] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setNomeError(false)
        setSobrenomeError(false)
        setEmailError(false)
        setSenhaError(false)

        if (nome == '') {
            setNomeError(true)

        }
        if (sobrenome == '') {
            setSobrenomeError(true)
        }
        if (email == '') {
            setEmailError(true)
        }
        if (senha == '') {
            setSenhaError(true)
        }
    }
    const handleSubmit2 = (e) => {
        e.preventDefault()
        setEmailError2(false)
        setSenhaError2(false)

        if (email2 == '') {
            setEmailError2(true)
        }
        if (senha2 == '') {
            setSenhaError2(true)
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const dias = [
        { value: '1', dia: '1' },
        { value: '2', dia: '2' },
        { value: '3', dia: '3' },
        { value: '4', dia: '4' },
        { value: '5', dia: '5' },
        { value: '6', dia: '6' },
        { value: '7', dia: '7' },
        { value: '8', dia: '8' },
        { value: '9', dia: '9' },
        { value: '10', dia: '10' },
        { value: '11', dia: '11' },
        { value: '12', dia: '12' },
        { value: '13', dia: '13' },
        { value: '14', dia: '14' },
        { value: '15', dia: '15' },
        { value: '16', dia: '16' },
        { value: '17', dia: '17' },
        { value: '18', dia: '18' },
        { value: '19', dia: '19' },
        { value: '20', dia: '20' },
        { value: '21', dia: '21' },
        { value: '22', dia: '22' },
        { value: '23', dia: '23' },
        { value: '24', dia: '24' },
        { value: '25', dia: '25' },
        { value: '26', dia: '26' },
        { value: '27', dia: '27' },
        { value: '28', dia: '28' },
        { value: '29', dia: '29' },
        { value: '30', dia: '30' },
        { value: '31', dia: '31' }
    ]

    const meses = [
        { value: '1', mes: 'Jan' },
        { value: '2', mes: 'Fev' },
        { value: '3', mes: 'Mar' },
        { value: '4', mes: 'Abr' },
        { value: '5', mes: 'Mai' },
        { value: '6', mes: 'Jun' },
        { value: '7', mes: 'Jul' },
        { value: '8', mes: 'Aug' },
        { value: '9', mes: 'Set' },
        { value: '10', mes: 'Out' },
        { value: '11', mes: 'Nov' },
        { value: '12', mes: 'Dez' }
    ]

    const anos = [
        { value: '1', ano: '2021' },
        { value: '2', ano: '2020' },
        { value: '3', ano: '2019' },
        { value: '4', ano: '2018' },
        { value: '5', ano: '2017' },
        { value: '6', ano: '2016' },
        { value: '7', ano: '2015' },
        { value: '8', ano: '2014' },
        { value: '9', ano: '2013' },
        { value: '10', ano: '2012' },
        { value: '11', ano: '2011' },
        { value: '12', ano: '2010' },
        { value: '13', ano: '2009' },
        { value: '14', ano: '2008' },
        { value: '15', ano: '2007' },
        { value: '16', ano: '2006' },
        { value: '17', ano: '2005' },
        { value: '18', ano: '2004' },
        { value: '19', ano: '2003' },
        { value: '20', ano: '2002' },
        { value: '21', ano: '2001' },
        { value: '22', ano: '2000' },
        { value: '23', ano: '1999' },
        { value: '24', ano: '1998' },
        { value: '25', ano: '1997' },
        { value: '26', ano: '1996' },
        { value: '27', ano: '1995' },
        { value: '28', ano: '1994' },
        { value: '29', ano: '1993' },
        { value: '30', ano: '1992' },
        { value: '31', ano: '1991' },
        { value: '32', ano: '1990' },
        { value: '33', ano: '1989' },
        { value: '34', ano: '1989' },
        { value: '35', ano: '1988' },
        { value: '36', ano: '1987' },
        { value: '37', ano: '1986' },
        { value: '38', ano: '1985' },
        { value: '39', ano: '1984' },
        { value: '40', ano: '1983' },
        { value: '41', ano: '1982' },
        { value: '42', ano: '1981' },
        { value: '43', ano: '1980' },
        { value: '44', ano: '1979' },
        { value: '45', ano: '1978' },
        { value: '46', ano: '1977' },
        { value: '47', ano: '1976' },
        { value: '48', ano: '1975' },
        { value: '49', ano: '1974' },
        { value: '50', ano: '1973' },
        { value: '51', ano: '1972' },
        { value: '52', ano: '1971' },
        { value: '53', ano: '1970' },
        { value: '54', ano: '1969' },
        { value: '55', ano: '1968' },
        { value: '56', ano: '1967' },
        { value: '57', ano: '1966' },
        { value: '58', ano: '1965' },
        { value: '59', ano: '1964' },
        { value: '60', ano: '1963' },
        { value: '61', ano: '1962' },
        { value: '62', ano: '1961' },
        { value: '63', ano: '1960' },
        { value: '64', ano: '1959' },
        { value: '65', ano: '1958' },
        { value: '66', ano: '1957' },
        { value: '67', ano: '1956' },
        { value: '68', ano: '1955' },
        { value: '69', ano: '1954' },
        { value: '70', ano: '1953' },
        { value: '71', ano: '1952' },
        { value: '72', ano: '1951' },
        { value: '73', ano: '1950' },
        { value: '74', ano: '1949' },
        { value: '75', ano: '1948' },
        { value: '76', ano: '1947' },
        { value: '77', ano: '1946' },
        { value: '78', ano: '1945' },
        { value: '79', ano: '1944' },
        { value: '80', ano: '1943' },
        { value: '81', ano: '1942' },
        { value: '82', ano: '1941' },
        { value: '83', ano: '1940' },
        { value: '84', ano: '1939' },
        { value: '85', ano: '1938' },
        { value: '86', ano: '1937' },
        { value: '87', ano: '1936' },
        { value: '88', ano: '1935' },
        { value: '89', ano: '1934' },
        { value: '90', ano: '1933' },
        { value: '91', ano: '1932' },
        { value: '92', ano: '1931' },
        { value: '93', ano: '1930' },
        { value: '94', ano: '1929' },
        { value: '95', ano: '1928' },
        { value: '96', ano: '1927' },
        { value: '97', ano: '1926' },
        { value: '98', ano: '1925' },
        { value: '99', ano: '1924' },
        { value: '100', ano: '1923' },
        { value: '101', ano: '1922' },
        { value: '102', ano: '1921' }
    ]

    return (
        <main>
            <div>
                <Container style={{ marginTop: '100px' }}>
                    <Grid spacing={2}>
                        <Typography variant="h2" align="center" color="textPrimary">
                            LucasBook
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary">
                            Entre na nossa rede social e curta com os amigos
                        </Typography>
                    </Grid>
                </Container>
            </div>
            <div>
                <Container style={{ marginTop: '50px' }}>
                    <Grid container spacing={2} justify="center">
                        <Card className={classes.card}>
                            <CardContent className={classes.CardContent}>
                                <Grid item>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        variant="outlined"
                                        placeholder="Email"
                                        required className={classes.button}>
                                    </TextField>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        fullWidth
                                        label="Senha"
                                        variant="outlined"
                                        placeholder="Senha"
                                        required
                                        className={classes.button}
                                        type="password">
                                    </TextField>
                                </Grid>
                                <Grid item>
                                    <Button
                                        component={Link}
                                        to="/feed"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}>
                                        Entrar
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        onClick={handleClickOpen2}>
                                        Esqueceu a senha
                                    </Button>
                                    <Dialog open={open2} onClose={handleClose2}>
                                        <DialogTitle>Recuperar senha</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Digite as informações pedidas nos campos abaixo para recuperar a senha
                                            </DialogContentText>
                                            <TextField
                                                label="Email"
                                                variant="outlined"
                                                placeholder="Celular ou Email"
                                                required
                                                fullWidth
                                                style={{ marginTop: '15px' }}
                                                onChange={(e) => setEmail2(e.target.value)}
                                                error={emailError2}        >
                                            </TextField>
                                            <TextField
                                                label="Senha"
                                                variant="outlined"
                                                placeholder="Senha"
                                                required
                                                fullWidth
                                                style={{ marginTop: '15px' }}
                                                onChange={(e) => setSenha2(e.target.value)}
                                                error={senhaError2}                                           >
                                            </TextField>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button
                                                onClick={handleClose2}
                                                variant="contained"
                                                color="secondary"
                                                style={{ marginTop: '15px' }}                                            >
                                                Cancelar
                                            </Button>
                                            <Button
                                                onClick={handleSubmit2}
                                                variant="contained"
                                                color="primary"
                                                style={{ marginTop: '15px' }}                                          >
                                                Solicitar
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Grid>
                                <Grid item>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        onClick={handleClickOpen}>
                                        Criar usuário
                                    </Button>
                                    <Dialog open={open} onClose={handleClose}>
                                        <DialogTitle>Cadastrar</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Digite seus dados nos campos abaixo para realizar o cadastro
                                            </DialogContentText>
                                            <TextField
                                                label="Nome"
                                                variant="outlined"
                                                placeholder="Nome"
                                                required
                                                fullWidth
                                                style={{ marginTop: '15px' }}
                                                onChange={(e) => setNome(e.target.value)}
                                                error={nomeError}>
                                            </TextField>
                                            <TextField
                                                label="Sobrenome"
                                                variant="outlined"
                                                placeholder="Sobrenome"
                                                required
                                                fullWidth
                                                style={{ marginTop: '15px' }}
                                                onChange={(e) => setSobrenome(e.target.value)}
                                                error={sobrenomeError}>
                                            </TextField>
                                            <TextField
                                                label="Email"
                                                variant="outlined"
                                                placeholder="Email"
                                                required
                                                fullWidth
                                                style={{ marginTop: '15px' }}
                                                onChange={(e) => setEmail(e.target.value)}
                                                error={emailError}
                                            >
                                            </TextField>
                                            <TextField
                                                label="Senha"
                                                variant="outlined"
                                                placeholder="Senha"
                                                required
                                                fullWidth
                                                style={{ marginTop: '15px' }}
                                                onChange={(e) => setSenha(e.target.value)}
                                                error={senhaError}
                                            >
                                            </TextField>
                                            <InputLabel style={{ marginTop: '15px' }}>
                                                Data de nascimento
                                            </InputLabel>
                                            <FormControl>
                                                <Select
                                                    variant="outlined"
                                                    style={{ marginRight: '30px' }}
                                                    required
                                                >
                                                    {dias.map((dia) => (
                                                        <MenuItem value={dia.value}>
                                                            {dia.dia}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            <FormControl>
                                                <Select
                                                    variant="outlined"
                                                    style={{ marginRight: '30px' }}
                                                    required>
                                                    {meses.map((mes) => (
                                                        <MenuItem value={mes.value}>
                                                            {mes.mes}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                            <FormControl>
                                                <Select
                                                    variant="outlined"
                                                    required>
                                                    {anos.map((ano) => (
                                                        <MenuItem value={ano.value}>
                                                            {ano.ano}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button
                                                onClick={handleClose}
                                                variant="contained"
                                                color="secondary">
                                                Cancelar
                                            </Button>
                                            <Button
                                                onClick={handleSubmit}
                                                variant="contained"
                                                color="primary">
                                                Cadastrar
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Container>
            </div>
            <div>
                <Container style={{ marginTop: '50px' }}>
                    <Grid spacing={2}>
                        <Typography variant="h5" color="textSecondary" align="center">
                            Powered by React
                        </Typography>
                    </Grid>
                </Container>
            </div>
        </main >
    )
}

export default Home
