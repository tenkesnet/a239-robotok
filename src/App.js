import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: []
    };
  }
  componentDidMount() {
    // Fetch data from an API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ monster: data });
    })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}
export default App;
