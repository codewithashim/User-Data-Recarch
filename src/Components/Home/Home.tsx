import React from 'react'
import { Container } from '@material-ui/core'
import Loader from '../Loader/Loader'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useFatch from '../../Hooks/useFatch'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


const Home = () => {
    const classes = useStyles();
    const { data, loading, error } = useFatch('https://jsonplaceholder.typicode.com/users')
    console.log(data)

    return (
        <>
            {
                loading && <>
                    <Loader></Loader>
                </>
            }

            <section>
                <Container>
                    <div className='grid grid-col-3  '>
                        {
                            (loading === false && error === false) && data.map((user: any) => {
                                console.log(user)
                                return (
                                    <>
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image="/static/images/cards/contemplative-reptile.jpg"
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {
                                                            user?.name
                                                        }
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {
                                                            user?.email
                                                        }
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    Share
                                                </Button>
                                                <Button size="small" color="primary">
                                                    Learn More
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </>
                                )
                            })
                        }

                    </div>



                </Container>
            </section>
        </>
    )
}

export default Home