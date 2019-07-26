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
    
    render() {
        return (
            <div>
                <LocationDropdown defaultLabel="จังหวัด" locations={this.provinces} />
                <LocationDropdown defaultLabel="เขต/อำเภอ" locations={this.provinces} />
                <LocationDropdown defaultLabel="แขวง/ตำบล" locations={this.provinces} />
            </div>
        )
    }
}
