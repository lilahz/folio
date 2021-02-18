class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch("/home/projects")
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }
  render() {
    return this.state.items
  }
}
export default Data;
