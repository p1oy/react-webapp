import React, { Component } from 'react'
import LocationDropdown from './LocationDropdown';

export default class ThaiLocationSelectForm extends Component {
    provinces = [
        {
            name: 'กรุงเทพ', id: 1, districts: [
                {
                    name: 'บางรัก', id: 1, khwangs: [
                        { name: 'บางรัก' },
                        { name: 'สีลม' }
                    ]
                },
            ]
        },
        {
            name: 'นนทบุรี', id: 2, districts: [
                {
                    name: 'เมืองนนทบุรี', id: 1, khwangs: [
                        { name: 'บางไผ่' },
                        { name: 'ท่าทราย' },
                        { name: 'สวนใหญ่' }
                    ]
                },
                {
                    name: 'บางกรวย', id: 2, khwangs: [
                        { name: 'บางขนุน' },
                        { name: 'ศาลากลาง' }
                    ]
                }
            ]
        }
    ]

    state = {}

    selectedProvince = (provinceName) => {
        console.log('เลือกจังหวัด' + provinceName);
        let chosenProvince = this.provinces.find( province =>{
            return province.name === provinceName;
        });

        this.setState({
            selectedProvince: chosenProvince
        });
    }

    selectedDistrict = (districtName) => {
        console.log(`เลือกเขต/อำเภอ ${districtName}`);

        let chosenDistrict = this.state.selectedProvince.districts.find(district => {
            return district.name === districtName
        })

        this.setState({
            selectedDistrict: chosenDistrict
        });
    }
    
    render() {
        let districtDropdown;
        
        if(this.state.selectedProvince){
            let districts = this.state.selectedProvince.districts;
            districtDropdown =  <LocationDropdown defaultLabel="เขต/อำเภอ" locations={districts} selectedCallback={this.selectedDistrict}  />
        }


        let khwangDropDown;

        if(this.state.selectedDistrict) {
            let khwangs = this.state.selectedDistrict.khwangs;
            khwangDropDown = <LocationDropdown defaultLabel="แขวง/ตำบล" locations={khwangs}/>
        }

        return (
            <div>
                <LocationDropdown defaultLabel="จังหวัด" locations={this.provinces} selectedCallback={this.selectedProvince} />
                {/* <LocationDropdown defaultLabel="เขต/อำเภอ" locations={this.provinces} /> */}
                {districtDropdown}
                {/* <LocationDropdown defaultLabel="แขวง/ตำบล" locations={this.provinces} /> */}
                {khwangDropDown}
            </div>
        )
    }
}
