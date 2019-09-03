import React from 'react';
import AddingNewBuilding from './AddingNewBuilding';
import ManagementNav from './nav/ManagementNav';
import './css/BuildingsList.css';

class Buildings extends React.Component{
  constructor(props){
    super(props)
    this.container = React.createRef();
    this.state = {
      page: 'first-page',
      buildings: [
        {id: 0, picture: 'warsaw-spire.png', name: 'Warsaw Spire', owner: 'Immofinanz', totalSurface: 104300, category: 'A', status: 'istniejący',  
        year: 2015, leasingTime: 5, currency: 'EUR', rentFrom: 20.00, rentTo: '', serviceCharge: 25.90, addOnFactor: 10.00, groundParking: '', undergroundParking: 200,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.612276205334!2d20.982080715945173!3d52.23226166526537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc84baa5393b%3A0x52f498460abf56dc!2sWarsaw%20Spire%2C%20plac%20Europejski%201%2C%2000-844%20Warszawa!5e0!3m2!1spl!2spl!4v1567535965114!5m2!1spl!2spl',
        street: 'Europejski Plac 1', city: 'Warszawa', postcode: '00-844'},
        {id: 1, picture: 'szucha-premium-offices.png', name: 'Szucha Premium Offices', owner: 'Green Property Group', totalSurface: 12000, category: 'A', status: 'istniejący',  
        year: 2017, leasingTime: 5, currency: 'EUR', rentFrom: 22.00, rentTo: 25.00, serviceCharge: 23.00, addOnFactor: 7.00, groundParking: '', undergroundParking: 250.00,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.49639191984!2d21.02056741594481!3d52.21619876645125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecce0d4df15e1%3A0x502bb3c1a6848e77!2sSzucha%20Premium%20Offices!5e0!3m2!1spl!2spl!4v1567536151688!5m2!1spl!2spl',
        street: 'Aleja Szucha 19', city: 'Warszawa', postcode: '00-580'},
        {id: 2, picture: 'centrum-marszalkowska.png', name: 'Centrum Marszałkowska', owner: 'Liebrecht & Wood', totalSurface: 16500, category: 'A', status: 'istniejący',  
        year: 2018, leasingTime: 5, currency: 'EUR', rentFrom: 22.00, rentTo: 25.00, serviceCharge: 25.00, addOnFactor: 3.06, groundParking: 200.00, undergroundParking: 200.00,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.4772165629597!2d21.007303815945313!3d52.23471516508433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd81cc52b7d7%3A0xe38a9d353ad4c96e!2sCentrum%20Marsza%C5%82kowska!5e0!3m2!1spl!2spl!4v1567536313335!5m2!1spl!2spl',
        street: 'Marszałkowska 126/134', city: 'Warszawa', postcode: '00-008'},
        {id: 3, picture: 'prosta-office-center.png', name: 'Prosta Office Center', owner: 'Cromwell Property group', totalSurface: 104300, category: 'A', status: 'istniejący',  
        year: 2007, leasingTime: 5, currency: 'EUR', rentFrom: 17.50, rentTo: '', serviceCharge: 22.32, addOnFactor: 5.95, groundParking: '', undergroundParking: 150.00,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7064382268495!2d20.98509161594505!3d52.23055106539167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc9ad1f3573f%3A0x30d739f4c98d1450!2sProsta%20Office%20Centre!5e0!3m2!1spl!2spl!4v1567536387196!5m2!1spl!2spl',
        street: 'Prosta 51', city: 'Warszawa', postcode: '00-838'},
        {id: 4, picture: 'skylight.png', name: 'Skylight', owner: 'Globalworth Poland', totalSurface: 21500, category: 'A', status: 'istniejący',  
        year: 2007, leasingTime: 5, currency: 'EUR', rentFrom: 22.00, rentTo: '', serviceCharge: 24.00, addOnFactor: 6.20, groundParking: '', undergroundParking: 180.00,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.730625173404!2d21.000498415945078!3d52.23011166542417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8da58f0dd5%3A0x5dff6f01b36829b7!2sSkylight%20Office!5e0!3m2!1spl!2spl!4v1567536511644!5m2!1spl!2spl',
        street: 'Złota 59', city: 'Warszawa', postcode: '00-120'},
        {id: 5, picture: 'rondo1.png', name: 'Rondo 1', owner: 'Deutsche Bank Real Estate', totalSurface: 103000, category: 'A', status: 'istniejący',  
        year: 2006, leasingTime: 5, currency: 'EUR', rentFrom: 20.00, rentTo: 26.50, serviceCharge: 21.50, addOnFactor: 6.36, groundParking: '', undergroundParking: 250.00,
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5624577160424!2d20.99754401579681!3d52.233166679760956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8ebec44dfb%3A0x5556c6cfea536839!2sRondo%201!5e0!3m2!1spl!2spl!4v1567534477096!5m2!1spl!2spl',
        street: 'Rondo ONZ 1', city: 'Warszawa', postcode: '00-384'},
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

  handleAddNewBuildingToState = (city, map, name, postcode, street) => {
    const buildings = [...this.state.buildings];
    const id = this.state.buildings.length;
    const newBudilding = {
      id: id,
      picture: 'default-building-picture.png',
      name: name,
      owner: 'do ustalenia',
      totalSurface: '',
      category: 'A',
      status: 'istniejący',
      year: '',
      leasingTime: '',
      currency: 'EUR',
      rentFrom: '',
      rentTo: '',
      serviceCharge: '',
      addOnFactor: '',
      groundParking: '',
      undergroundParking: '',
      map: map,
      street: street,
      city: city,
      postcode: postcode,
    }
    // adding new building do copied array of state
    buildings.push(newBudilding);
    // updating buildings state
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
    const {page} = this.state;
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
              left: page === 2 ? 0 : 600 + 'px',
              opacity: page === 2 ? 1 : 0,
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
          <div className="third-page-information" 
            style={{
              width: 100 + '%',
              height: 100 + '%',
              position: 'absolute',
              top: 0,
              left: page === 3 ? 0 : 1200 + 'px',
              opacity: page === 3 ? 1 : 0,
              background: '#d9d9d9',
              borderRadius: 10 + 'px',
            }}>
            <iframe src={building.map}  
              allowFullScreen="" 
              frameBorder="0" 
              style={{
                width: 100 + '%',
                height: 200 + 'px',
                borderTopLeftRadius: 10 + 'px',
                borderTopRightRadius: 10 + 'px',  
              }}>
            </iframe>
            <div className="building-address">
              <address>
                <p>{building.street}</p>
                <p>{building.city}</p>
                <p>{building.postcode}</p>
              </address>
            </div>
          </div>
          <div className="building-description-menu">
              <ul>
                <li onClick={() => this.setState({page: 1})}></li>
                <li onClick={() => this.setState({page: 2})}></li>
                <li onClick={() => this.setState({page: 3})}></li>
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
          reference={this.container} 
        />
        {buildings}
      </div>
    );
  }
}

export default Buildings;