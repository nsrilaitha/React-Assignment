class Test extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //FirstName
    if(!fields["fname"]){
      formIsValid = false;
      errors["fname"] = "Cannot be empty";
    }

    if(typeof fields["fname"] !== "undefined"){
      if(!fields["fname"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["fname"] = "Only letters";
      }      	
    }
    
     //LastName
    if(!fields["lname"]){
      formIsValid = false;
      errors["lname"] = "Cannot be empty";
    }

    if(typeof fields["lname"] !== "undefined"){
      if(!fields["lname"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["lname"] = "Only letters";
      }      	
    }
   //Class
    if(!fields["cclass"]){
      formIsValid = false;
      errors["cclass"] = "Cannot be empty";
    }

    if(typeof fields["cclass"] !== "undefined"){
      if(!fields["cclass"].match(/^[a-zA-Z0-9]+$/)){
        formIsValid = false;
        errors["class"] = "Only letters and numbers";
      }      	
    }
    
     //Year of Passing
    if(!fields["year"]){
      formIsValid = false;
      errors["class"] = "Cannot be empty";
    }

    if(typeof fields["year"] !== "undefined"){
      if(!fields["year"].match(/^[0-9]+$/)){
        formIsValid = false;
        errors["class"] = "Only numbers";
      }      	
    }
    
    //Percentage of Marks
    if(!fields["percentage"]){
      formIsValid = false;
      errors["class"] = "Cannot be empty";
    }

    if(typeof fields["percentage"] !== "undefined"){
      if(!fields["percentage"].match(/^[0-9]+$/)){
        formIsValid = false;
        errors["class"] = "Only numbers";
      }      	
    }
    

    this.setState({errors: errors});
    return formIsValid;
  }

  studentSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
    }else{
      alert("Form has errors.")
    }

  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }

  render(){
    return (
      <div>        	
        <form name="studentform" className="studentform" onSubmit= {this.studentSubmit.bind(this)}>
        
        
          <div className="col-md-6">
          <h1 bold="true">Student Form</h1>
            <fieldset>
              <input ref="fname" type="text" maxLength="20" size="20" placeholder="First Name" onChange={this.handleChange.bind(this, "fname")} value={this.state.fields["fname"]}/>
              <span className="error">{this.state.errors["fname"]}</span>
              <br/>
              <input ref="lname" type="text" maxLength="20" size="20" placeholder="Last Name" onChange={this.handleChange.bind(this, "lname")} value={this.state.fields["lname"]}/>
              <span className="error">{this.state.errors["lname"]}</span>
              <br/>
              <input ref="cclass" type="text" maxLength="3" size="20" placeholder="Class" onChange={this.handleChange.bind(this, "cclass")} value={this.state.fields["cclass"]}/>
              <span className="error">{this.state.errors["cclass"]}</span>
              <br/>
               <input ref="year" type="number" min={1990} max={2016}  size="20" maxLength="4" placeholder="Year Of Passing" onChange={this.handleChange.bind(this, "Year")} value={this.state.fields["class"]}/>
              <span className="error">{this.state.errors["year"]}</span>
              <br/>
              <input ref="percentage" type="number" min={50} max={100}  size="20" maxLength="3" placeholder="Marks Percentage" onChange={this.handleChange.bind(this, "percentage")} value={this.state.fields["class"]}/>
              <span className="error">{this.state.errors["percentage"]}</span>
              <br/>
             
            </fieldset>
          </div>
        
          <div className="col-md-12">
            <fieldset>
              <button className="btn btn-lg pro" id="submit" value="Submit">Submit</button>
            </fieldset>
          </div>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<Test />, document.querySelector("#app"))
