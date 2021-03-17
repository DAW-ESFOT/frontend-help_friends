import React, {useState} from 'react'
import withAuth from "@/hocs/withAuth";
import useSWR from "swr";
import {fetcher, pusher} from "@/lib/utils";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useAuth} from "@/lib/auth";
import {useRouter} from "next/router";
import {CardContent, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Comments from "@/components/Comments";
import TextField from "@material-ui/core/TextField";
import api from "@/lib/api";

const useStyles = makeStyles((theme) => ({
    textField: {
        width: "100%",
    },
    buttonWrapper: {
        textAlign: "center",
    },
    padd: {
        paddingLeft: 10
    },
    view: {
        minWidth: '100vh'
    },
    cover: {
        width: 160,
    },
    root: {
        maxWidth: 300,
        height: 200,
        heigth: 150,
        marginLeft: 20,
        marginBottom: 30,
    },
    rootComment: {
        marginBottom: 20
    },

}));

const Capitalized = (word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1)
    return word
}
const userId = (user) => {
    let regex = /\d+/g;
    let userId = parseInt(user.match(regex));
    return userId
}

const ArticleDetails = () => {
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const router = useRouter();
    const {articleId} = router.query
    const {user} = useAuth();
    console.log('user', user)
    const {data, error} = useSWR(`/articles/${articleId}`, fetcher)
    if (error) return <div>No se pudo cargar el articulo </div>
    if (!data) return <div>Cargando articulos </div>
    console.log('data', data)
    // if (user.id === userId(data.user_publicacion)) return alert('Usted publico este artículo!')
    return (
        <div>

            <Grid container style={{minHeight: '50vh'}}>
                <Grid container xs={8}>
                    <Grid container xs={12} spacing={3}>
                        {
                            data.images.map(image => {
                                return (
                                    <Card key={image.id} className={classes.root}>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            title={image.id}
                                            className={classes.cover}
                                            image={image.image}
                                        />
                                    </Card>
                                )
                            })
                        }
                    </Grid>
                    <Grid container xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>Donador</b>: {data.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>Artículo</b>: {data.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>Descripción</b>: {data.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12}>
                        <h3>Comentarios</h3>
                        <TextField id="filled-basic" label="Filled" variant="filled" className={classes.rootComment}/>
                        <Button
                            className={classes.rootComment}
                            color="secondary">Comentar</Button>
                        <Comments articleId={data.id}/>
                    </Grid>
                </Grid>
                <Grid xs={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Usuario: {user.user.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Correo: {user.user.email}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Teléfono: {user.user.phone}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Provincia: {Capitalized(user.user.province)}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Sector: {Capitalized(user.user.sector)}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {
                                user.id === data.id ? (
                                    <Button
                                        size="small"
                                        color="secondary"
                                        disabled={true}
                                    >
                                        Realizar petición
                                    </Button>
                                ) : (
                                    <Button
                                        size="small"
                                        color="secondary"
                                        disabled={false}
                                    >
                                        Realizar petición
                                    </Button>
                                )
                            }
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default withAuth(ArticleDetails);