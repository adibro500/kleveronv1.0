import { Injectable } from '@angular/core';

export class Employee {
    ActiveProject: string[];
    Invoiced: string[];
    UnInvoiced: string[];
    TotalExpense: string[];
    Budget: string[];
    Members: number[];
    BilledHours: number[];

}

export class State {
    ID: number;
    Name: string;
}

let employees: Employee[] = [{
    "ActiveProject": ["Design and Develop Websites in PHP"],
    "Invoiced": ["$2500"],
    "UnInvoiced": ['$200'],
    "TotalExpense": ["$24500"],
    "Budget": ["$60500"],
    "Members": [23],
    "BilledHours": [200.00]

}, {
    "ActiveProject": ["Logo Design for New Venture"],
    "Invoiced": ["$25000"],
    "UnInvoiced": ["$250"],
    "TotalExpense": ["$14500"],
    "Budget": ["$62500"],
    "Members": [2],
    "BilledHours": [120.00]

}, {
    "ActiveProject": ["Design and Develop Websites in PHP"],
    "Invoiced": ["$2800"],
    "UnInvoiced": ["$150"],
    "TotalExpense": ["$23500"],
    "Budget": ["$59500"],
    "Members": [23],
    "BilledHours": [250.00]

}, {
    "ActiveProject": ["Design and Develop Websites in PHP"],
    "Invoiced": ["$7500"],
    "UnInvoiced": ["$200"],
    "TotalExpense": ["$20500"],
    "Budget": ["$61500"],
    "Members": [23],
    "BilledHours": [220.00]

}, {
    "ActiveProject": ["Design and Develop Websites in PHP"],
    "Invoiced": ["$2500"],
    "UnInvoiced": ["$200"],
    "TotalExpense": ["$21500"],
    "Budget": ["$112500"],
    "Members": [23],
    "BilledHours": [400.00]

}, {
    "ActiveProject": ["Design and Develop Websites in PHP"],
    "Invoiced": ["$9500"],
    "UnInvoiced": ["$280"],
    "TotalExpense": ["$10500"],
    "Budget": ["$62900"],
    "Members": [23],
    "BilledHours": [250.00]

}];

let states: State[] = [{
    "ID": 1,
    "Name": "Alabama"
}, {
    "ID": 2,
    "Name": "Alaska"
}, {
    "ID": 3,
    "Name": "Arizona"
}, {
    "ID": 4,
    "Name": "Arkansas"
}, {
    "ID": 5,
    "Name": "California"
}, {
    "ID": 6,
    "Name": "Colorado"
}, {
    "ID": 7,
    "Name": "Connectictu"
}, {
    "ID": 8,
    "Name": "Delaware"
}, {
    "ID": 9,
    "Name": "District of Columbia"
}, {
    "ID": 10,
    "Name": "Florida"
}, {
    "ID": 11,
    "Name": "Georgia"
}, {
    "ID": 12,
    "Name": "Hawaii"
}, {
    "ID": 13,
    "Name": "Idaho"
}, {
    "ID": 14,
    "Name": "Illinois"
}, {
    "ID": 15,
    "Name": "Indiana"
}, {
    "ID": 16,
    "Name": "Iowa"
}, {
    "ID": 17,
    "Name": "Kansas"
}, {
    "ID": 18,
    "Name": "Kentucky"
}, {
    "ID": 19,
    "Name": "Louisiana"
}, {
    "ID": 20,
    "Name": "Maine"
}, {
    "ID": 21,
    "Name": "Maryland"
}, {
    "ID": 22,
    "Name": "Massachusetts"
}, {
    "ID": 23,
    "Name": "Michigan"
}, {
    "ID": 24,
    "Name": "Minnesota"
}, {
    "ID": 25,
    "Name": "Mississippi"
}, {
    "ID": 26,
    "Name": "Missouri"
}, {
    "ID": 27,
    "Name": "Montana"
}, {
    "ID": 28,
    "Name": "Nebraska"
}, {
    "ID": 29,
    "Name": "Nevada"
}, {
    "ID": 30,
    "Name": "New Hampshire"
}, {
    "ID": 31,
    "Name": "New Jersey"
}, {
    "ID": 32,
    "Name": "New Mexico"
}, {
    "ID": 33,
    "Name": "New York"
}, {
    "ID": 34,
    "Name": "North Carolina"
}, {
    "ID": 35,
    "Name": "Ohio"
}, {
    "ID": 36,
    "Name": "Oklahoma"
}, {
    "ID": 37,
    "Name": "Oregon"
}, {
    "ID": 38,
    "Name": "Pennsylvania"
}, {
    "ID": 39,
    "Name": "Rhode Island"
}, {
    "ID": 40,
    "Name": "South Carolina"
}, {
    "ID": 41,
    "Name": "South Dakota"
}, {
    "ID": 42,
    "Name": "Tennessee"
}, {
    "ID": 43,
    "Name": "Texas"
}, {
    "ID": 44,
    "Name": "Utah"
}, {
    "ID": 45,
    "Name": "Vermont"
}, {
    "ID": 46,
    "Name": "Virginia"
}, {
    "ID": 47,
    "Name": "Washington"
}, {
    "ID": 48,
    "Name": "West Virginia"
}, {
    "ID": 49,
    "Name": "Wisconsin"
}, {
    "ID": 50,
    "Name": "Wyoming"
}, {
    "ID": 51,
    "Name": "North Dakota"
}];

@Injectable()
export class Service {
    getEmployees() {
        return employees;
    }
    getStates() {
        return states;
    }
}