import React from 'react';

class AddingNewBuilding extends React.Component{
  constructor(props){
    super(props)
    this.city = React.createRef();
    this.postcode = React.createRef();
    this.state = {
      isAdded: false,
      isOpened: false,
      city: 'Warszawa',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9785.777416895602!2d21.039472795795824!3d52.18079523329796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932b156c6cc41%3A0xd8137727c2754484!2sStegny%2C%2000-001%20Warszawa!5e0!3m2!1spl!2spl!4v1567544093511!5m2!1spl!2spl',
      name: '',
      postcode: '',
      street: '',
    }
  }

  handleAddNewBuilding = () => {
    const {city, map, name, postcode, street} = this.state;
    const buildings = this.props.buildings;
    if(name.length > 5){
      for(let i=0; i<buildings.length; i++){
        if(buildings[i].name === name){
          alert('Taki budynek już istnieje w bazie!');
          break;
        } else{
          return this.props.addBuilding(city, map, name, postcode, street);
        }
      }
    }
  }

  handleCloseBuilidingAddForm = () => {
    this.props.reference.current.classList.remove('building-information-is-open');
    this.setState({
      city: '',
      name: '',
      postcode: '',
      street: '',
      isAdded: false,
      isOpened: false,
    })
  }

  handleShowBuilidingAddForm = () => {
    this.props.reference.current.classList.add('building-information-is-open');
    this.setState({
      isOpened: true,
    })
  }

  handleChangeValue = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    })
  }
  
  handleSubmitForm = (event) => {
    const {map, name, street} = this.state;
    event.preventDefault();
    if(this.validateForm(this.city) && 
       this.validateForm(this.postcode) &&
       (map.length > 20 && street.length > 5 && name.length > 5)){
      this.setState({
        isAdded: true,
      })
      return this.handleAddNewBuilding();
    } else{
      this.setState({
        isAdded: false,
      })
    }
  }

  validateForm = (data) => {
    const {city, postcode} = this.state;
    switch(data.current.name){
      case 'city':
        const cityReg = new RegExp("^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$");
        if(cityReg.test(city)){
          return true;
        } else{
          return false;
        }
      case 'postcode':
        const postcodeReg = new RegExp("^[0-9]{2}-[0-9]{3}$");
        if(postcodeReg.test(postcode)){
          return true;
        } else{
          return false;
        }
      default:
        console.error('wystąpił nieoczekiwany błąd!');
    }
  }

  render(){
    const {isAdded, isOpened, city, map, name, postcode, street} = this.state;
    return(
      <>
        <div className="modal-with-new-building" style={{display: isOpened ? 'block' : 'none'}}>
          <div className="close-modal">
            <span 
              onClick={this.handleCloseBuilidingAddForm} 
              className="fas fa-times">
            </span>
          </div>
          <form onSubmit={this.handleSubmitForm}>
            <h1 className="header">Dane o budynku</h1>
            <div className="row-with-data-about-new-building">
              <label>Ulica:</label>
              <input
                ref={this.street}
                onChange={this.handleChangeValue}
                type="text"
                name="street"
                value={street}>
              </input>
            </div>
            <div className="row-with-data-about-new-building">
              <label>Miasto:</label>
              <input
                ref={this.city}
                onChange={this.handleChangeValue}
                type="text"
                name="city"
                value={city}>
              </input>
            </div>
            <div className="row-with-data-about-new-building">
              <label>Kod pocztowy:</label>
              <input
                ref={this.postcode}
                onChange={this.handleChangeValue}
                type="text"
                name="postcode"
                value={postcode}>
              </input>
            </div>
            <div className="row-with-data-about-new-building">
              <label>Link do mapy:</label>
              <input
                ref={this.map}
                onChange={this.handleChangeValue}
                type="text"
                name="map"
                value={map}>
              </input>
            </div>
            {isAdded && 
            <p className="ssuccess-in-adding-the-building">
              Dodano nowy budynek do bazy!
            </p>}
            <button type="submit">Dodaj</button>
          </form>  
          <p className="information-for-user">Uwaga, jeśli nie potrafisz wygenerować linka z mapą google pozostaw to pole tak jak jest.</p>
        </div>
        <div className="add-new-budiling">
          <button
            type="button"
            onClick={this.handleShowBuilidingAddForm} 
            className="submit-building">
            +
          </button>
          <input
            onChange={this.handleChangeValue}  
            type="text"
            className="field-to-add-new-building"
            placeholder="Wprowadź nazwę nowego budynku..."
            name="name" 
            value={name}> 
          </input>
        </div>
      </>
    );
  }
}

export default AddingNewBuilding;