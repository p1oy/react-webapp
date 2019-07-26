import React, { Component } from 'react'

// same export.modules = class
export default class LocationDropdown extends Component {

    state = {
        label: this.props.defaultLabel
    }

    locationSelected(e){
        console.log(e.target);// ตอนนั้นอยู่ที่ไหน
        let locationName = e.target.getAttribute('data-name');
        console.log(locationName);
    }

    render() {
        let locations = this.props.locations;

        // let defaultLabel = this.props.defaultLabel;

        return (
            <div class="dropdown">
                <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                {/* {defaultLabel} */}
                {this.state.label}
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {/* <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a> */}

                {/* for loop */}
                    {
                        locations.map((location,index)=>{
                            return <a class="dropdown-item" onClick={e => this.locationSelected(e)} href="#" key={location.id} data-id={location.id} data-name={location.name} >{location.name}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}
