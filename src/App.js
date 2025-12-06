import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    // Fetch data from an API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ monsters: data });
      })
  }
  onSearchHandler = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({ searchField });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchHandler} />
          
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}
export default App;
