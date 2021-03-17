import React from 'react';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),

  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),

  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
  cardMedia: {
    paddingTop: '50%', // 16:9

  },
  cardContent: {
    flexGrow: 1,

  },

}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      
      
      <main>

        <Container className={classes.cardGrid} maxWidth="md">
        <h1>SOBRE NOSOTOROS</h1>
        <br></br>
          {/* End hero unit */}
          <Grid container spacing={4}>
            
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://image.flaticon.com/icons/png/512/792/792006.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     QUIENES SOMOS
                    </Typography>
                    <Typography>
                    Somos una empresa con valores de solidaridad presentes en nuestra sociedad, nacemos de esos valores y debemos esforzarnos en ser coherentes con ellos, respetarlos, defenderlos y difundirlos.
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://innatos.com.mx/wp-content/uploads/2020/04/Innatos-Segundo-empresas-de-manufactura-SUBTITULO.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     MISIÓN
                    </Typography>
                    <Typography>
                    Promover el derecho de toda persona, en especial de la infancia y juventud, a disfrutar de una vida digna y plena en igualdad de oportunidades. 
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.vexels.com/media/users/3/200979/isolated/preview/f537facf601068284d8f6cdb96d7f65f-mano-con-icono-de-coraz-oacute-n-by-vexels.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     VISIÓN
                    </Typography>
                    <Typography>
                    Una organización responsable y comprometida con la justicia social y el desarrollo humano integral, con una identidad propia caracterizada por la defensa de los derechos
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
           
          </Grid>
        </Container>
      </main>
 
    </React.Fragment>
  );
}