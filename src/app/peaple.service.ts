import { Injectable } from "@angular/core";
@Injectable()
export class PeopleService {
  getPeople() {
    return [
      {
        name: "Leilani",
        lname: "Lenz",
        age: 3,
        tel: "(179)280-3868",
        address: "8761 Neque Ct",
        city: "Georgetown",
        state: "KY",
        zip: 24685
      },
      {
        name: "Larita",
        lname: "Comfort",
        age: 8,
        tel: "(617)694-3667",
        address: "6623 Nec Ct",
        city: "Duck River",
        state: "MT",
        zip: 15118
      },
      {
        name: "Milada",
        lname: "Morrison",
        age: 5,
        tel: "(633)124-6805",
        address: "2414 Amet Dr",
        city: "Elk River",
        state: "MT",
        zip: 50339
      },
      {
        name: "Althea",
        lname: "Flack",
        age: 6,
        tel: "(974)869-3535",
        address: "2410 Et Ave",
        city: "Cassatt",
        state: "CO",
        zip: 81006
      },
      {
        name: "Christa",
        lname: "Harper",
        age: 6,
        tel: "(328)664-4339",
        address: "7091 Magna St",
        city: "Lenoir",
        state: "SC",
        zip: 75839
      },
      {
        name: "Henry",
        lname: "Welld",
        age: 2,
        tel: "(311)086-8408",
        address: "6949 Risus Ct",
        city: "Austin",
        state: "IN",
        zip: 46405
      },
      {
        name: "Charlyne",
        lname: "Hess",
        age: 9,
        tel: "(710)388-0385",
        address: "3961 Sagittis Ave",
        city: "Saint Pauls",
        state: "WA",
        zip: 27566
      },
      {
        name: "Melanciaa",
        lname: "Entinger",
        age: 6,
        tel: "(668)085-9951",
        address: "1816 Sollicitudin Ct",
        city: "State College",
        state: "DC",
        zip: 63835
      },
      {
        name: "Fredric",
        lname: "Kahlig",
        age: 1,
        tel: "(367)833-4430",
        address: "1046 Sollicitudin Dr",
        city: "Spencer",
        state: "LA",
        zip: 91234
      },
      {
        name: "Wazir",
        lname: "Raslich",
        age: 5,
        tel: "(117)954-5692",
        address: "3317 Ipsum Ln",
        city: "Waukesha",
        state: "TX",
        zip: 52623
      }
    ];
  }
}
