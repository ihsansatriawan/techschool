import React, { Component, Fragment } from 'react';
import { fetchList } from '../../../helper/services/PokemonService';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class ListContainer extends Component {

  state = {
    pokemon: []
  }

  handleClickDetail = (data) => {
    console.log("handleClickCard: ", data)
  }

  renderContent = () => {
    const { pokemon } = this.state;

    const IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    return (
      <Container  maxWidth="md">
        <Grid container spacing={4}>
          {
            pokemon.map((card, idx) => {

              const split = card.url.split("/");
              const id = split[split.length - 2];
              const imgUrl = IMAGE_URL + id + ".png";

              return (
                <Grid item key={idx} xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      style={{
                        paddingTop: '56.25%', // 16:9
                      }}
                      image={imgUrl}
                      title={card.name}
                    />
                    <CardContent >
                      <Typography style={{ textTransform: 'capitalize' }} gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      {/* <Typography>
                        This is a media card. You can use this section to describe the content.
                      </Typography> */}
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => { this.handleClickDetail(card) }} size="small" color="primary">
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    )
  }

  componentDidMount = async () => {
    const data = await fetchList();
    this.setState({ pokemon: data.results })
  }

  render() {
    return (<Fragment>
      <h1>List Pokemon</h1>
      {this.renderContent()}
    </Fragment>)
  }
}

export default ListContainer;