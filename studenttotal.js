/* 
  Row component written as a simple function:
  https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components
  
  Any components that do not have state should be written this way,
  see: https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
*/
const Row = ({Name, RollNumber, TotalMarks, Status}) => (
  <div className="row">
    <div>{Name}</div>
    <div>{RollNumber}</div>
    <div>{TotalMarks}</div>
    <div>{Status}</div>    
       
  </div>
);

/*
  Table component written as an ES6 class
*/
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {Name: 'Abhishek', RollNumber: 'KV2017-5A1', TotalMarks: 110, Status: 'Pass'}, 
        {Name: 'Rajiv',  RollNumber: 'KV2017-5A2', TotalMarks: 82, Status: 'Fail'}, 
        {Name: 'Zoya', RollNumber: 'KV2017-5A3', TotalMarks: 123, Status: 'Topper' },
      ],
    };
    
    // http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
    // bind the context for compareBy & sortBy to this component instance
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }
  
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
    
  render() {
    const rows = this.state.data.map( (rowData) => <Row {...rowData} />);

    return (
      <div className="table">
        <div className="header">
          <div onClick={() => this.sortBy('Name')} >Name</div>
          <div onClick={() => this.sortBy('RollNumber')}>Roll Number</div>
          <div onClick={() => this.sortBy('TotalMarks')}>Total Marks</div>
          <div onClick={() => this.sortBy('Status')}>Status</div>
          
        </div>
        <div className="body">
          {rows}
        </div>
      </div>
    );
    
  }
}

/*
 * Render the above component into the div#app
 */
ReactDOM.render(<Table />, document.getElementById('app'));