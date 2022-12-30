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

    const [search, setSearch] = React.useState('')

    const handleSearch = (e: any) => {
        setSearch(e.target.value)

    }

    return (
        <>
            {
                loading && <>
                    <Loader></Loader>
                </>
            }

            <div>
                <form >
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full" />
                    <button className="btn btn-primary mx-2" onClick={handleSearch}>Search</button>
                </form>
            </div>


            <section>
                <Container>
                    <div className='felx gap-4'>
                        {
                            (loading === false && error === false) && data.map((user: any) => {
                                console.log(user)
                                return (
                                    <div className="card w-96 bg-base-300 shadow-xl m-4">
                                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {
                                                    user?.name
                                                }
                                            </h2>
                                            <p>
                                                {
                                                    user?.email
                                                }
                                            </p>
                                            <p>
                                                {
                                                    user?.phone
                                                }
                                            </p>
                                            <p>
                                                {
                                                    user?.website
                                                }
                                            </p>
                                            <p>
                                                {
                                                    user?.company?.name
                                                }
                                            </p>

                                        </div>
                                    </div>

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