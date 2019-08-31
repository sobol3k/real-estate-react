import React from 'react';

class AddingNewBuilding extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: '',
    }
  }

  handleChangeValue = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleAddNewBuilding = () => {
    const name = this.state.value;
    const buildings = this.props.buildings;
    if(name.length > 5){
      for(let i=0; i<buildings.length; i++){
        if(buildings[i].name === name){
          alert('Taki budynek już istnieje w bazie!');
          break;
        } else{
          return this.props.addBuilding(name);
        }
      }
    }
  }

  render(){
    const {value} = this.state;
    return(
      <div className="add-new-budiling">
        <button
          type="button"
          onClick={this.handleAddNewBuilding} 
          className="submit-building">
          +
        </button>
        <input 
          type="text"
          className="field-to-add-new-building"
          placeholder="Wprowadź nazwę nowego budynku..." 
          onChange={this.handleChangeValue} 
          value={value}> 
        </input>
      </div>
    );
  }
}

export default AddingNewBuilding;