import React, {Component} from 'react'
import {Icon, Container, Segment, Card, Button } from 'semantic-ui-react'

class App extends Component {
  stock = 5;
  state = {counter: 1};
  disminuir = (e) => {
    this.setState ({counter: this.state.counter - 1})
  }

  aumentar = (e) => {
    if (this.state.counter < this.stock){
      this.setState ({counter: this.state.counter + 1})
    }
  }


  render() {
    return (
      <Container>
        <Segment basic>
          <Card>
            <Card.Content>
              <Card.Header> {this.props.title || "Contador"}</Card.Header>
              <Card.Meta>{this.state.counter}</Card.Meta>
              <Card.Description>
                Presiona + o - para modificar
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button onClick={this.disminuir} basic color='green'><Icon name= "minus"/></Button>
                <Button onClick={this.aumentar} basic color='red'><Icon name= "plus"/></Button>  
              </div>
            </Card.Content>
          </Card>
        </Segment>
      </Container>
    );
  }

}

export default App;
