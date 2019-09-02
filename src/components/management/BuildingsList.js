import React from 'react';
import AddingNewBuilding from './AddingNewBuilding';
import ManagementNav from './nav/ManagementNav';
import './css/BuildingsList.css';

class Buildings extends React.Component{
  constructor(props){
    super(props)
    this.container = React.createRef();
    this.state = {
      isClicked: false,
      buildings: [
        {id: 0, picture: 'warsaw-spire.png', name: 'Warsaw Spire', owner: 'Immofinanz', totalSurface: 104300, category: 'A', status: 'istniejący',  
        year: 2015, leasingTime: 5, currency: 'EUR', rentFrom: 20.00, rentTo: null, serviceCharge: 25.90, addOnFactor: 10.00, groundParking: null, undergroundParking: 200},
        {id: 1, picture: 'szucha-premium-offices.png', name: 'Szucha Premium Offices', owner: 'Green Property Group', totalSurface: 12000, category: 'A', status: 'istniejący',  
        year: 2017, leasingTime: 5, currency: 'EUR', rentFrom: 22.00, rentTo: 25.00, serviceCharge: 23.00, addOnFactor: 7.00, groundParking: null, undergroundParking: 250.00},
        {id: 2, picture: 'centrum-marszalkowska.png', name: 'Centrum Marszałkowska', owner: 'Liebrecht & Wood', totalSurface: 16500, category: 'A', status: 'istniejący',  
        year: 2018, leasingTime: 5, currency: 'EUR', rentFrom: 22.00, rentTo: 25.00, serviceCharge: 25.00, addOnFactor: 3.06, groundParking: 200.00, undergroundParking: 200.00},
        {id: 3, picture: 'prosta-office-center.png', name: 'Prosta Office Center', owner: 'Cromwell Property group', totalSurface: 104300, category: 'A', status: 'istniejący',  
        year: 2007, leasingTime: 5, currency: 'EUR', rentFrom: 17.50, rentTo: null, serviceCharge: 22.32, addOnFactor: 5.95, groundParking: null, undergroundParking: 150.00},
        {id: 4, picture: 'skylight.png', name: 'Skylight', owner: 'Globalworth Poland', totalSurface: 21500, category: 'A', status: 'istniejący',  
        year: 2007, leasingTime: 5, currency: 'EUR', rentFrom: 22.00, rentTo: null, serviceCharge: 24.00, addOnFactor: 6.20, groundParking: null, undergroundParking: 180.00},
        {id: 5, picture: 'rondo1.png', name: 'Rondo 1', owner: 'Deutsche Bank Real Estate', totalSurface: 103000, category: 'A', status: 'istniejący',  
        year: 2006, leasingTime: 5, currency: 'EUR', rentFrom: 20.00, rentTo: 26.50, serviceCharge: 21.50, addOnFactor: 6.36, groundParking: null, undergroundParking: 250.00},
      ],
    }
  }

  handleChangeValue = (id, event) => {
    const buildings = [...this.state.buildings];
    const index = buildings.findIndex(element => element.id === id);
    if(event.target.name === 'totalSurface'){
      buildings[index].totalSurface = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else if(event.target.name === 'category'){
      buildings[index].category = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else if(event.target.name === 'status'){
      buildings[index].status = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else if(event.target.name === 'year'){
      buildings[index].year = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else if(event.target.name === 'leasingTime'){
      buildings[index].leasingTime = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else if(event.target.name === 'currency'){
      buildings[index].currency = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else if(event.target.name === 'rentFrom'){
      buildings[index].rentFrom = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else if(event.target.name === 'rentTo'){
      buildings[index].rentTo = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else if(event.target.name === 'serviceCharge'){
      buildings[index].serviceCharge = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else if(event.target.name === 'addOnFactor'){
      buildings[index].addOnFactor = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else if(event.target.name === 'groundParking'){
      buildings[index].groundParking = event.target.value;
      this.setState({
        buildings: buildings,
      })
    } else{
      buildings[index].undergroundParking = event.target.value;
      this.setState({
        buildings: buildings,
      })
    }
  }

  handleAddNewBuildingToState = (name) => {
    const buildings = [...this.state.buildings];
    const id = this.state.buildings.length;
    const newBudilding = {
      id: id,
      picture: 'default-building-picture.png',
      name: name,
      owner: 'do ustalenia',
      totalSurface: null,
      category: 'A',
      status: 'istniejący',
      year: null,
      leasingTime: null,
      currency: 'EUR',
      rentFrom: null,
      rentTo: null,
      serviceCharge: null,
      addOnFactor: null,
      groundParking: null,
      undergroundParking: null,
    }
    buildings.push(newBudilding);
    this.setState({
      buildings: buildings,
    })
    /* when building will be added extend section element */
    const section = document.querySelector('section');
    const height = getComputedStyle(section).getPropertyValue('height').split('p')[0];
    const extendedHeight = parseFloat(height) + 70;
    return section.style.height = extendedHeight + 'px';
    /* -------------------------------------------------- */
  }

  handleBuildingInformation = (event) => {
    if(event.target.classList.contains('building-information') || 
       event.target.classList.contains('fa-info')){
      this.container.current.classList.add('building-information-is-open');
      event.target.closest('.building').lastElementChild.style.display = 'block';
    } else{
      this.container.current.classList.remove('building-information-is-open');
      event.target.closest('.building-description').style.display = 'none';
    }
  }

  handleRemoveBuilding = (id) => {
    const buildings = [...this.state.buildings];
    const index = buildings.findIndex(element => element.id === id);
    buildings.splice(index, 1);
    this.setState({
      buildings: buildings,
    })
  }

  render(){
    const {isClicked} = this.state;
    const array = [...this.state.buildings];
    const url = "buildings-images/";
    const buildings = array.map(building => (
      <div key={building.id} className="building">
        <div className="building-picture">
          <img 
            src={url + building.picture} 
            alt={building.name}>
          </img>
        </div>
        <strong 
          className="building-name">
          {building.name}
        </strong>
        <span 
          className="building-onwer">
          ({building.owner})
        </span>
        <button 
          className="building-information"
          onClick={this.handleBuildingInformation}
          type="button">
          <span className="fas fa-info"></span>
        </button>
        <button 
          className="building-remove"
          onClick={() => this.handleRemoveBuilding(building.id)}
          type="button">
          <span className="fas fa-trash"></span>
        </button>
        <div className="building-description">
          <span className="building-description-close-modal">
            <span 
              onClick={this.handleBuildingInformation} 
              className="fas fa-times">
            </span>
          </span>
          <div className="first-page-information"> 
            <div className="building-description-picture">
              <img src={url + building.picture} alt={building.name}></img>
            </div>
            <h2 className="building-description-header">
              {building.name}
            </h2>
            <p className="building-description-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer ullamcorper tincidunt condimentum. 
              Ut vehicula turpis ipsum, ut posuere neque facilisis vitae. 
              In urna magna, elementum ac justo cursus, gravida venenatis ipsum. 
              Fusce mollis pretium tortor sed maximus. 
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Quisque scelerisque purus id metus egestas semper. Cras tristique lectus eget magna aliquam, vel scelerisque magna hendrerit. 
              Aliquam facilisis purus diam, nec laoreet sapien tincidunt eget. Duis eleifend nec risus sit amet mattis. 
              Maecenas sit amet sapien sollicitudin, euismod tortor et, luctus purus. In ac orci quam. 
              Mauris eu massa at lectus commodo egestas. Aliquam tincidunt leo eget dolor tincidunt malesuada.
            </p>
          </div>
          <div className="second-page-information" 
            style={{
              width: 100 + '%',
              height: 100 + '%',
              position: 'absolute',
              top: 0,
              left: isClicked === true ? 0 : 600 + 'px',
              opacity: isClicked === true ? 1 : 0,
              background: '#d9d9d9',
              borderRadius: 10 + 'px',
            }}>
            <div className="particulars">
              <div className="particulars-row">
                <label>powierzchnia całkowita</label>
                <input
                  onChange={(event) => this.handleChangeValue(building.id, event)}  
                  type="number" 
                  name="totalSurface" 
                  value={building.totalSurface}>
                </input>
              </div>
              <div className="particulars-row">
                <label>klasa budynku</label>
                <select
                  onChange={(event) => this.handleChangeValue(building.id, event)}   
                  name="category" 
                  value={building.category}>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
              </div>
              <div className="particulars-row">
                <label>status</label>
                <select
                  onChange={(event) => this.handleChangeValue(building.id, event)}  
                  name="status" 
                  value={building.status}>
                    <option>istniejący</option>
                    <option>w budowie</option>
                    <option>planowany</option>
                </select>
              </div>
              <div className="particulars-row">
                <label>data oddania</label>
                <input
                  onChange={(event) => this.handleChangeValue(building.id, event)}  
                  type="number" 
                  name="year" 
                  value={building.year}>
                </input>
              </div>
              <div className="particulars-row">
                <label>minimalny czas najmu</label>
                <input
                  onChange={(event) => this.handleChangeValue(building.id, event)}   
                  type="number" 
                  name="leasingTime" 
                  value={building.leasingTime}>
                </input>
              </div>
              <div className="particulars-row">
                <label>waluta</label>
                <select
                  onChange={(event) => this.handleChangeValue(building.id, event)}   
                  name="currency" 
                  value={building.currency}>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                    <option>CHF</option>
                </select>
              </div>
              <div className="particulars-row">
                <label>czynsz od</label>
                <input
                  onChange={(event) => this.handleChangeValue(building.id, event)}   
                  type="number" 
                  name="rentFrom" 
                  value={building.rentFrom}>
                </input>
              </div>
              <div className="particulars-row">
                <label>czynsz do</label>
                <input
                  onChange={(event) => this.handleChangeValue(building.id, event)}   
                  type="number" 
                  name="rentTo" 
                  value={building.rentTo}>
                </input>
              </div>
              <div className="particulars-row">
                <label>koszty eksploatacyjne</label>
                <input
                  onChange={(event) => this.handleChangeValue(building.id, event)}   
                  type="number" 
                  name="serviceCharge" 
                  value={building.serviceCharge}>
                </input>
              </div>
              <div className="particulars-row">
                <label>wsp. pow. wspólnej</label>
                <input
                  onChange={(event) => this.handleChangeValue(building.id, event)}   
                  type="number" 
                  name="addOnFactor" 
                  value={building.addOnFactor}>
                </input>
              </div>
              <div className="particulars-row">
                <label>parking naziemny</label>
                <input
                  onChange={(event) => this.handleChangeValue(building.id, event)}   
                  type="number" 
                  name="groundParking" 
                  value={building.groundParking}>
                </input>
              </div>
              <div className="particulars-row">
                <label>parking podziemny</label>
                <input
                  onChange={(event) => this.handleChangeValue(building.id, event)}   
                  type="number" 
                  name="undergroundParking" 
                  value={building.undergroundParking}>
                </input>
              </div>
            </div>   
          </div>
          <div className="building-description-menu">
              <ul>
                <li onClick={() => this.setState({isClicked: false})}></li>
                <li onClick={() => this.setState({isClicked: true})}></li>
              </ul>
            </div>
        </div>
      </div>
    ));
    return(
      <div ref={this.container} className="container-buildings">
        <ManagementNav handleLogin={this.props.handleLogin}  />
        <AddingNewBuilding 
          addBuilding={this.handleAddNewBuildingToState} 
          buildings={this.state.buildings} 
        />
        {buildings}
      </div>
    );
  }
}

export default Buildings;