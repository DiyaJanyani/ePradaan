import { Injectable } from '@angular/core';
import { Drives } from '../shared/interfaces/drive.interface';
import { Fundraiser } from '../shared/interfaces/fundraiser.interface';
import { Detail } from '../shared/interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getDetailById(id: number) {
    return this.Details.filter((value:any)=>value.id==id)[0];
  }
  getFundraiserById(id: number) {
    return this.Fundraiser.filter((value:any)=>value.id==id)[0];
  }

  Details: Detail[]=[
    {
      "id":5,
      "ngo_name": "Anna Daan",
      "district": "Mumbai",
      "city": "Mumbai",
      "location": "JUHU",
      "contact": "9345600935",
    },{
    "id":1,
    "ngo_name": "ROBIN HOOD ARMY",
    "district": "Thane",
    "city": "Mumbai",
    "location": "Balcom Colony",
    "contact": "9191919191"
  }, {
    "id":2,
    "ngo_name": "Feeding India",
    "district": "Delhi",
    "city": "New Delhi",
    "location": "Vasant Kunj",
    "contact": "7309130243"
  }, {
    "id":3,
    "ngo_name": "Roti Bank",
    "district": "Mumbai",
    "city": "Mumbai",
    "location": "Mulund East",
    "contact": "5100700424"
  }, {
    "id":4,
    "ngo_name": "Wrap It. Don't Waste It ",
    "district": "Chennai",
    "city": "Chennai",
    "location": "Chola Nadu",
    "contact": "8172195176"
  },  {
    "id":6,
    "ngo_name": "Saad Foundation",
    "district": "Thane",
    "city": "Kalyan",
    "location": "Railway Station",
    "contact": "8077158617"
  }, {
    "id":7,
    "ngo_name": "Community development Centre",
    "district": "Mumbai",
    "city": "Malad",
    "location": "Marve Road",
    "contact": "9020239864"
  }, {
    "id":8,
    "ngo_name": "Université Dakar Bourguiba",
    "district": "Red Cloud",
    "city": "Lewotukan",
    "location": "Reinke",
    "contact": "3318266809"
  }, {
    "id":9,
    "ngo_name": "Ecole Supérieure de Commerce de Lille",
    "district": "Sundown",
    "city": "Shigu",
    "location": "International",
    "contact": "8720041950"
  }, {
    "id":10,
    "ngo_name": "Phillips Graduate Institute",
    "district": "Straubel",
    "city": "Dingbao",
    "location": "Sutteridge",
    "contact": "6065905763"
  }, {
    "id":11,
    "ngo_name": "Latvian Academy of Culture",
    "district": "Lotheville",
    "city": "Polanica-Zdrój",
    "location": "La Follette",
    "contact": "5615677120"
  }, {
    "id":12,
    "ngo_name": "Universidad Santa Maria Caracas",
    "district": "Ilene",
    "city": "Neuquén",
    "location": "Huxley",
    "contact": "5595423404"
  }, {
    "id":13,
    "ngo_name": "Universidad de Puerto Rico, Humacao",
    "district": "Dahle",
    "city": "Zhoushizhuang",
    "location": "Porter",
    "contact": "9582671815"
  }, {
    "id":14,
    "ngo_name": "Randolph-Macon Woman's College",
    "district": "Walton",
    "city": "Shangtang",
    "location": "Northridge",
    "contact": "4994495394"
  }, {
    "id":15,
    "ngo_name": "Universitas Advent Indonesia",
    "district": "Carpenter",
    "city": "Zhishan",
    "location": "4th",
    "contact": "7282165424"
  }, {
    "id":16,
    "ngo_name": "University of Berne",
    "district": "Clove",
    "city": "Mangga Dua",
    "location": "Trailsway",
    "contact": "1548292729"
  }, {
    "id":17,
    "ngo_name": "National University of Laos",
    "district": "Upham",
    "city": "Handegate",
    "location": "Mallory",
    "contact": "3566126101"
  }, {
    "id":18,
    "ngo_name": "University of the Sacred Heart Tokyo",
    "district": "Pierstorff",
    "city": "Kodinsk",
    "location": "Ilene",
    "contact": "8787966794"
  }, {
    "id":19,
    "ngo_name": "St. Matthews University",
    "district": "Blaine",
    "city": "Nouméa",
    "location": "Becker",
    "contact": "5355006779"
  }, {
    "id":20,
    "ngo_name": "Universidade Santa Cecília dos Bandeirantes",
    "district": "Sunfield",
    "city": "Douniani",
    "location": "Merrick",
    "contact": "6586776570"
  }, {
    "id":21,
    "ngo_name": "University of Indianapolis in Athens",
    "district": "Eggendart",
    "city": "Balaka",
    "location": "4th",
    "contact": "2301238067"
  }, {
    "id":22,
    "ngo_name": "Seian University of Art & Design",
    "district": "Dakota",
    "city": "Jishi",
    "location": "Melrose",
    "contact": "9458689449"
  }, {
    "id":23,
    "ngo_name": "Soka University of America",
    "district": "Declaration",
    "city": "Longtang",
    "location": "Armistice",
    "contact": "1030812276"
  }, {
    "id":24,
    "ngo_name": "East-Siberian State University",
    "district": "Pond",
    "city": "Puunage",
    "location": "Manley",
    "contact": "9209106636"
  }, {
    "id":25,
    "ngo_name": "National Institute of Technology, Trichy",
    "district": "Anhalt",
    "city": "Tauca",
    "location": "Spenser",
    "contact": "7778497875"
  }, {
    "id":26,
    "ngo_name": "King's College",
    "district": "Meadow Vale",
    "city": "Oelaba",
    "location": "La Follette",
    "contact": "6497451056"
  }, {
    "id":27,
    "ngo_name": "Notre Dame of Marbel University",
    "district": "Melody",
    "city": "Halden",
    "location": "Sugar",
    "contact": "9936891856"
  }, {
    "id":28,
    "ngo_name": "Lake Superior State University",
    "district": "Banding",
    "city": "Penghu",
    "location": "Scofield",
    "contact": "4272709356"
  }, {
    "id":29,
    "ngo_name": "Ahmedabad University",
    "district": "Summerview",
    "city": "Västerås",
    "location": "Hanson",
    "contact": "8636911303"
  }, {
    "id":30,
    "ngo_name": "Buckinghamshire New University",
    "district": "Gale",
    "city": "Krajan Keboromo",
    "location": "Vera",
    "contact": "5607845818"
  }]
  fetchDetail():Detail[]{
    return this.Details
  }
  Fundraiser:Fundraiser[]=[{
    "id":5,
    "fundraiser_name": "Ratan Tata",
    "district": "Mumbai",
    "city": "Mumbai",
    "location": "JUHU",
    "contact": "9345600935",
  },{
  "id":1,
  "fundraiser_name": "Anupam Mital",
  "district": "Thane",
  "city": "Mumbai",
  "location": "Balcom Colony",
  "contact": "9191919191"
}, {
  "id":2,
  "fundraiser_name": "Namita Thappar",
  "district": "Delhi",
  "city": "New Delhi",
  "location": "Vasant Kunj",
  "contact": "7309130243"
}, {
  "id":3,
  "fundraiser_name": "Aman Gupta",
  "district": "Mumbai",
  "city": "Mumbai",
  "location": "Mulund East",
  "contact": "5100700424"
}, {
  "id":4,
  "fundraiser_name": "Vineeta Singh",
  "district": "Chennai",
  "city": "Chennai",
  "location": "Chola Nadu",
  "contact": "8172195176"
},  {
  "id":6,
  "fundraiser_name": "Peyush Bhansal",
  "district": "Thane",
  "city": "Kalyan",
  "location": "Railway Station",
  "contact": "8077158617"
}, {
  "id":7,
  "fundraiser_name": "Gautam Adani",
  "district": "Mumbai",
  "city": "Malad",
  "location": "Marve Road",
  "contact": "9020239864"
}, {
  "id":8,
  "fundraiser_name": "Mukesh Ambani ",
  "district": "Red Cloud",
  "city": "Lewotukan",
  "location": "Reinke",
  "contact": "3318266809"
}, {
  "id":9,
  "fundraiser_name": "Anil Agarwal",
  "district": "Sundown",
  "city": "Shigu",
  "location": "International",
  "contact": "8720041950"
}, {
  "id":10,
  "fundraiser_name": "Sunil Vaswani",
  "district": "Straubel",
  "city": "Dingbao",
  "location": "Sutteridge",
  "contact": "6065905763"
},]

fetchFundraiser():Fundraiser[]{
  return this.Fundraiser
}
Drives:Drives[]=[{
  "id":5,
  "drive_name": "Food Drive",
  "district": "Mumbai",
  "city": "Mumbai",
  "location": "JUHU",
  "ngo": "Anna Daan",
},{
"id":1,
"drive_name": "Mid day meal",
"district": "Thane",
"city": "Mumbai",
"location": "Balcom Colony",
"ngo": "Robin Hood Army"
}, {
"id":2,
"drive_name": "Uniform Donation",
"district": "Delhi",
"city": "New Delhi",
"location": "Vasant Kunj",
"ngo": "Feeding India"
}, {
"id":3,
"drive_name": "Street Food Drive ",
"district": "Mumbai",
"city": "Mumbai",
"location": "Mulund East",
"ngo": "Roti bank"
}, {
"id":4,
"drive_name": "Winter wear",
"district": "Chennai",
"city": "Chennai",
"location": "Chola Nadu",
"ngo": "Saad Foundation"
},  {
"id":6,
"drive_name": "Stationary",
"district": "Thane",
"city": "Kalyan",
"location": "Railway Station",
"ngo": "Umang foundation"
}, {
"id":7,
"drive_name": "Education",
"district": "Mumbai",
"city": "Malad",
"location": "Marve Road",
"ngo": "Aarine Foundation"
}, {
"id":8,
"drive_name": "Donation for Specially Challenged",
"district": "Red Cloud",
"city": "Lewotukan",
"location": "Reinke",
"ngo": "3318266809"
}, {
"id":9,
"drive_name": "Clothes Donation drive",
"district": "Sundown",
"city": "Shigu",
"location": "International",
"ngo": "CHCF"
}, {
"id":10,
"drive_name": "Grocery Donation Drive",
"district": "Straubel",
"city": "Dingbao",
"location": "Sutteridge",
"ngo": "Imperial"
},]

fetchDrives():Drives[]{
return this.Drives
}


}
