import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class GamecardsList extends Component {
  state = {
    count: 0
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  makeClickedTrue = props => {
    // console.log('id: ' + props);
    // console.log(this.props.gamecards);

    let toChange = this.props.gamecards.find(obj => 
      obj.id === props
    )
    // console.log('to Change: '+ toChange.id)
    toChange.clicked = true;
    // console.log (this.props.gamecards);
  };

  loseGame = () => {
    // console.log(this.props.gamecards);
    this.props.gamecards.map(item => {
      item.clicked = false;
      this.state.count = 0;
      console.log(item.clicked);
      // this.shuffle(this.props.gamecards);
    });
  }

  isClicked = (props,props2) => {
    if (props === false) {
      this.setState({ count: this.state.count += 1 });
      console.log('count: ' + this.state.count);

      this.makeClickedTrue(props2);

      this.shuffle(this.props.gamecards);
      console.log(this.props);

      
    }
    else {
      console.log('you lost. try again');
      this.loseGame();
    }
  };

  render() {
    return (
      <Row>
        {this.props.gamecards.map(item => (
          <Col sm="6" xs="6" md="3" key={item.id}>
            <img className="img" src={"img/" + item.src} data-id={item.id} alt="" data-clicked={item.clicked}
              onClick={() => this.isClicked(item.clicked,item.id)}></img>
          </Col>
        ))}
      </Row>
    );
  }
}

export default GamecardsList;