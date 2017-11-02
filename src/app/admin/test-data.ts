/*
 * Use this object when testing components that depend on data from injected services.
 *
 * Available properties
 *   orgList: the organizations list
 *   projectList: the project list
 *   activitiesList: the activities list
 *   donorList: the list of donors.
 *
 * Example usage:
 *
 * In the following code, in the beforeEach() function of the unit test file, we are getting
 * the service from the injector, and spying on the appropriate property, then returning the
 * value from the test data instead of getting the data from the server.
 *

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationPageComponent);
    component = fixture.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let orgSpy = spyOn(dataService,'getOrganizations').and.returnValue(Observable.of(testData.orgList));
  });

 * As we know the test data, we now know how the component should behave, and we can test that.
 *
 */

export const testData = {
    orgList: [
      {
        'organizationId': 1,
        'organizationNumber': 'ABCD01-BC01',
        'name': 'Jaway',
        'address': 'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName': 'Osker',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 2,
        'organizationNumber': 'ABCD01-BC02',
        'name': 'H&M',
        'address': 'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName': 'Marcus',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 3,
        'organizationNumber': 'ABCD01-BC03',
        'name': 'Nokia',
        'address': 'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName': 'Jabbar',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 4,
        'organizationNumber': 'ABCD01-BC04',
        'name': 'Com Hem',
        'address': 'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName': 'Amir',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 5,
        'organizationNumber': 'ABCD01-BC05',
        'name': 'Oracle',
        'address': 'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName': 'Najla',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 6,
        'organizationNumber': 'ABCD01-BC06',
        'name': 'Siemens',
        'address': 'Hans Michelsensgatan 10 SE-211 20 MalmÃ¶',
        'contactPersonName': 'Yahya',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 7,
        'organizationNumber': 'ABCD01-BC07',
        'name': 'Sybercom',
        'address': 'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName': 'Lillia',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 8,
        'organizationNumber': 'ABCD01-BC08',
        'name': 'Swedbank',
        'address': 'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName': 'Yunas',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 9,
        'organizationNumber': 'ABCD01-BC09',
        'name': 'Telia Company',
        'address': 'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName': 'Jabbar',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 10,
        'organizationNumber': 'ABCD01-BC10',
        'name': 'King',
        'address': 'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName': 'Thomas',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 11,
        'organizationNumber': 'ABCD01-BC11',
        'name': 'Handelsbanken',
        'address': 'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName': 'Lin',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 12,
        'organizationNumber': 'ABCD01-BC12',
        'name': 'Nordea',
        'address': 'Klara Ã–stra Kyrkogata 2B / SE-111 52 Stockholm',
        'contactPersonName': 'Carolin',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 13,
        'organizationNumber': '123546-3412',
        'name': 'Robert Project',
        'address': 'Malmövägen',
        'contactPersonName': 'Mr.RScania',
        'contactPersonEmail': 'sscaniaf@scania',
        'accountNumber': '123452346',
        'billingInformation': 'Malmö',
        'description': 'Truck Company'
      },
      {
        'organizationId': 21,
        'organizationNumber': '123546-3423',
        'name': 'Robert Project',
        'address': 'Malmövägen',
        'contactPersonName': 'Mr.RScania',
        'contactPersonEmail': 'sscaniaf@scania',
        'accountNumber': '123452346',
        'billingInformation': 'Malmö',
        'description': 'Truck Company'
      },
      {
        'organizationId': 22,
        'organizationNumber': 'ABXC01-BC01',
        'name': 'Jaway 2',
        'address': 'Hans Michelsensgatan 10 SE-211 20 Malmö',
        'contactPersonName': 'Osker',
        'contactPersonEmail': 'stockholm@jayway.com',
        'accountNumber': 'XYZ123',
        'billingInformation': 'SjÃ¦leboderne',
        'description': 'Charity'
      },
      {
        'organizationId': 23,
        'organizationNumber': '123456-7896',
        'name': 'Samatar\'s Charity',
        'address': 'kdsjhfkdsahfk',
        'contactPersonName': 'Samatar',
        'contactPersonEmail': 'samatar@charity.co',
        'accountNumber': '1111-1111-1111-1111',
        'billingInformation': '',
        'description': 'fldshfkdshfkjds'
      },
      {
        'organizationId': 24,
        'organizationNumber': '123t56-7896',
        'name': 'Samatars Charity',
        'address': 'kdsjhfkdsahfk',
        'contactPersonName': 'Samatar',
        'contactPersonEmail': 'samatar@charity.co',
        'accountNumber': '1111-1111-1111-1111',
        'billingInformation': '',
        'description': 'fldshfkdshfkjds'
      },
      {
        'organizationId': 25,
        'organizationNumber': '895672-4425',
        'name': 'Samatar\'s Charity fdsfds',
        'address': 'fdlkjfdskjfdskjf',
        'contactPersonName': 'fdsfds',
        'contactPersonEmail': 'vf@fd.vo',
        'accountNumber': '1111-2569-5874-6985',
        'billingInformation': '',
        'description': 'fdkjhfdskf'
      },
      {
        'organizationId': 26,
        'organizationNumber': '123456-1265',
        'name': 'Doctor Without Border',
        'address': 'Lund',
        'contactPersonName': 'Doctor',
        'contactPersonEmail': 'doctor@org.com',
        'accountNumber': '3212-4332-4555-8888',
        'billingInformation': 'Malmö',
        'description': 'Tryout to save'
      },
      {
        'organizationId': 35,
        'organizationNumber': '122323-2324',
        'name': 'Association of French People',
        'address': 'Lund',
        'contactPersonName': 'Ehsan',
        'contactPersonEmail': 'Ehsan.adnan@france.fr',
        'accountNumber': '2332-2232-3233-3232',
        'billingInformation': 'Malmö',
        'description': 'l´association des peuple francais vivant á l´outre mer '
      }
    ],
    projectList: [
      {
        'projectNumber': 'ACVDFR-1234',
        'projectName': 'Swedish Stuttering Association',
        'address': 'Slottsgatan 33, 211 33 Malmö',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 12.9925,
        'latitude': 55.6027,
        'amountToBeRaised': 900.0,
        'raisedFunding': 900.0,
        'description': 'Many people may be surprised to join the "club stuttering" - you have enough of their speech impediments.',
        'mainImage': './assets/photos/project004/main/001.jpg',
        'images': null,
        'projectManager': 'Jabbar',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 1,
        'id': 1
      },
      {
        'projectNumber': 'CFDRAX-1234',
        'projectName': 'Solidarity, Human Rights',
        'address': 'Regementsgatan 52, 21745 Malmö',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 12.9847,
        'latitude': 55.5977,
        'amountToBeRaised': 900.0,
        'raisedFunding': 0.0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'mainImage': './assets/photos/project001/main/001.jpg',
        'images': null,
        'projectManager': 'Amir',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 2,
        'id': 2
      },
      {
        'projectNumber': 'XXLMKI-1234',
        'projectName': 'Independent Living Institute',
        'address': 'Per Weijersgatan 6, 211 34 Malmö',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 12.9998,
        'latitude': 55.6036,
        'amountToBeRaised': 900.0,
        'raisedFunding': 0.0,
        'description': 'The Independent Living Institute (ILI) is a policy development center specializing in consumer-driven policies for disabled peoples.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'mainImage': './assets/photos/project003/main/001.jpg',
        'images': null,
        'projectManager': 'Amir',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 3,
        'id': 3
      },
      {
        'projectNumber': 'LXLMKI-1234',
        'projectName': 'Sustainable Economies',
        'address': 'SpÃ¥ngatan 7, 21144 MalmÃ¶',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 13.0044,
        'latitude': 55.5961,
        'amountToBeRaised': 900.0,
        'raisedFunding': 0.0,
        'description': 'The Independent Living Institute (ILI) is a policy development center specializing in consumer-driven policies for disabled peoples.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        'mainImage': './assets/photos/project004/main/001.jpg',
        'images': null,
        'projectManager': 'Yahya',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 4,
        'id': 4
      },
      {
        'projectNumber': 'NJDUWE-1234',
        'projectName': 'Caritas Sweden',
        'address': 'Triangeln 2, 211 43 Malmö',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 13.0015,
        'latitude': 55.5965,
        'amountToBeRaised': 1500.0,
        'raisedFunding': 550.0,
        'description': 'Many people may be surprised to join the "club stuttering" - you have enough of their speech impediments. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        'mainImage': './assets/photos/project005/main/001.jpg',
        'images': null,
        'projectManager': 'Jabbar',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 5,
        'id': 5
      },
      {
        'projectNumber': 'NJDUWB-1234',
        'projectName': 'Housing in Swedenn',
        'address': 'Baltzarsgatan 20, 21136 Malmö',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 13.0043,
        'latitude': 55.6045,
        'amountToBeRaised': 20000.0,
        'raisedFunding': 8500.0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'mainImage': './assets/photos/project006/main/001.jpg',
        'images': null,
        'projectManager': 'Jabbar',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 6,
        'id': 6
      },
      {
        'projectNumber': 'LXLPKI-1234',
        'projectName': 'Eden Foundation',
        'address': 'Mölevängsgatan 51, 21420 MalmÃ¶ ',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 13.0111,
        'latitude': 55.5927,
        'amountToBeRaised': 15000.0,
        'raisedFunding': 11500.0,
        'description': 'The Independent Living Institute (ILI) is a policy development center specializing in consumer-driven policies for disabled peoples.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'mainImage': './assets/photos/project007/main/001.jpg',
        'images': null,
        'projectManager': 'Yahya',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 7,
        'id': 7
      },
      {
        'projectNumber': 'PODGWD-1234',
        'projectName': 'Hunger Project In Sweden',
        'address': 'Tessins vÃ¤g 12, 21758 MalmÃ¶',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 12.9758,
        'latitude': 55.6005,
        'amountToBeRaised': 50000.0,
        'raisedFunding': 27600.0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Many people may be surprised to join the speech impediments.',
        'mainImage': './assets/photos/project008/main/001.jpg',
        'images': null,
        'projectManager': 'Jabbar',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 8,
        'id': 8
      },
      {
        'projectNumber': 'LNBCHS-1234',
        'projectName': 'Femenist Movement',
        'address': 'ALMTORGET 1, 21457 MalmÃ¶',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 13.0231,
        'latitude': 55.577,
        'amountToBeRaised': 900.0,
        'raisedFunding': 0.0,
        'description': 'Femenist Movements mission and commitment is to encourage and support relevant agents in their strive for a decreasing use of alcohol. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'mainImage': './assets/photos/project009/main/001.jpg',
        'images': null,
        'projectManager': 'Carolin',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 9,
        'id': 9
      },
      {
        'projectNumber': 'LMUYHS-1234',
        'projectName': 'Operation Mercy',
        'address': 'Berguvsgatan 10, 21559 MalmÃ¶',
        'fromDate': 1473026400000,
        'toDate': 1478300400000,
        'longitude': 13.011,
        'latitude': 55.5695,
        'amountToBeRaised': 35000.0,
        'raisedFunding': 24800.0,
        'description': 'Operation Mercy workers immerse themselves in the local culture, learning the local language before tackling anything else. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'mainImage': './assets/photos/project010/main/001.jpg',
        'images': null,
        'projectManager': 'Carolin',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 10,
        'id': 10
      },
      {
        'projectNumber': 'LMLOIU-1234',
        'projectName': 'Pan Asia Co-operation Society Pacs',
        'address': 'Berguvsgatan 10, 21559 MalmÃ¶',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 13.011,
        'latitude': 55.5695,
        'amountToBeRaised': 900.0,
        'raisedFunding': 0.0,
        'description': 'PACS -Pan Asia Co-operation Society is a Swedish NGO founded in 1971 and involved in developmental programs in Asia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'mainImage': './assets/photos/project005/main/001.jpg',
        'images': null,
        'projectManager': 'Carolin',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 11,
        'id': 11
      },
      {
        'projectNumber': 'OCPSHY-1234',
        'projectName': 'Eu Art Museum',
        'address': 'Dirigentgatan 4, 21585 MalmÃ¶',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 12.9912,
        'latitude': 55.5628,
        'amountToBeRaised': 1900.0,
        'raisedFunding': 100.0,
        'description': 'The EU Arts Museum is an EU Arts Museum based somewhere inside an EU member country and providing its services to All EU nationals and visitors. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'mainImage': './assets/photos/project008/main/001.jpg',
        'images': null,
        'projectManager': 'Carolin',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 4,
        'id': 12
      },
      {
        'projectNumber': 'KJFHUE-1234',
        'projectName': 'International Pen',
        'address': 'Erlandsrovägen 7, 21845 Vintrie',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 12.9766,
        'latitude': 55.549,
        'amountToBeRaised': 900.0,
        'raisedFunding': 0.0,
        'description': 'International PEN, the worldwide association of writers, exists to promote friendship and intellectual co-operation among writers everywhere, regardless of their political or other views.',
        'mainImage': './assets/photos/project004/main/001.jpg',
        'images': null,
        'projectManager': 'Carolin',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 3,
        'id': 13
      },
      {
        'projectNumber': 'ABCDEF-1234',
        'projectName': 'Swedish Maximization Association',
        'address': 'Hamngatan 10, MalmÃ¶, Sweden',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 13.0001,
        'latitude': 55.607,
        'amountToBeRaised': 11800.0,
        'raisedFunding': 1200.0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Many people may be surprised to join the "club stuttering" - you have enough of their speech impediments.',
        'mainImage': './assets/photos/project007/main/001.jpg',
        'images': null,
        'projectManager': 'Jabbar',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 2,
        'id': 14
      },
      {
        'projectNumber': 'ABCDEF-1244',
        'projectName': 'Swedish Minimization Association',
        'address': 'Hamngatan 10, MalmÃ¶, Sweden',
        'fromDate': 1507993184000,
        'toDate': 1539529184000,
        'longitude': 13.0001,
        'latitude': 55.607,
        'amountToBeRaised': 800.0,
        'raisedFunding': 0.0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Many people may be surprised to join the "club stuttering" - you have enough of their speech impediments.',
        'mainImage': './assets/photos/project003/main/001.jpg',
        'images': null,
        'projectManager': 'Jabbar',
        'nationalProject': true,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 1,
        'id': 15
      },
      {
        'projectNumber': '123456-1223',
        'projectName': 'Discovery research',
        'address': 'Lund',
        'fromDate': 1509547170000,
        'toDate': 1510268400000,
        'longitude': 13.191,
        'latitude': 55.7047,
        'amountToBeRaised': 19200.0,
        'raisedFunding': 100.0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'mainImage': './assets/photos/project002/main/001.jpg',
        'images': null,
        'projectManager': 'Ehsan',
        'nationalProject': true,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 11,
        'id': 16
      },
      {
        'projectNumber': '122334-3111',
        'projectName': 'Healthy Food',
        'address': 'Helsingborg',
        'fromDate': 1509550345000,
        'toDate': 1509663600000,
        'longitude': 12.6945,
        'latitude': 56.0465,
        'amountToBeRaised': 10000.0,
        'raisedFunding': 5500.0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'mainImage': './assets/photos/project001/main/001.jpg',
        'images': null,
        'projectManager': 'Bani',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 1,
        'id': 17
      },
      {
        'projectNumber': '123456-7895',
        'projectName': 'Freelance writter',
        'address': 'Oxie Panelgatan 13B',
        'fromDate': 1509618583000,
        'toDate': 1511910000000,
        'longitude': 13.0783,
        'latitude': 55.5464,
        'amountToBeRaised': 10000.0,
        'raisedFunding': 500.0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'mainImage': './assets/photos/project004/main/001.jpg',
        'images': null,
        'projectManager': 'Ahmed',
        'nationalProject': true,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 1,
        'id': 18
      },
      {
        'projectNumber': '',
        'projectName': 'Homeless Children',
        'address': 'Lund',
        'fromDate': 1509632210000,
        'toDate': 1498341600000,
        'longitude': 13.191,
        'latitude': 55.7047,
        'amountToBeRaised': 80000.0,
        'raisedFunding': 28500.0,
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'mainImage': './assets/photos/project001/main/001.jpg',
        'images': null,
        'projectManager': '',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 2,
        'id': 20
      },
      {
        'projectNumber': '212233-2223',
        'projectName': 'Assemblement des peuple francais en Suede',
        'address': 'Lund',
        'fromDate': 1506895200000,
        'toDate': 1509663600000,
        'longitude': 13.191,
        'latitude': 55.7047,
        'amountToBeRaised': 12000.0,
        'raisedFunding': 5500.0,
        'description': 'Essayant des rassembler le maximun de francais en suede. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'mainImage': './assets/photos/project009/main/001.jpg',
        'images': null,
        'projectManager': 'Redha ',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 35,
        'id': 21
      },
      {
        'projectNumber': '8e16d1aa-2d39-4a82-883e-721446fa4156',
        'projectName': 'Illumity',
        'address': 'Lake Avenue 337, Drummond, 4397',
        'fromDate': 1437463496000,
        'toDate': 1482161697000,
        'longitude': 175.833,
        'latitude': 80.2762,
        'amountToBeRaised': 9604.0,
        'raisedFunding': 4.0,
        'description': 'Do eu ipsum aute duis reprehenderit eiusmod. Lorem deserunt irure anim laborum incididunt pariatur voluptate excepteur tempor. Nostrud ullamco nulla consequat ea aute voluptate excepteur labore Lorem labore. Velit ea dolore aute sit exercitation. Veniam qui officia et ut occaecat.',
        'mainImage': '/assets/photos/project001/main/002.jpg',
        'images': null,
        'projectManager': 'Spears Drake',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 1,
        'id': 22
      },
      {
        'projectNumber': '607ed6d4-b46e-4d74-ba41-47fb66463d1e',
        'projectName': 'Cubix',
        'address': 'Rose Street 270, Franklin, 1535',
        'fromDate': 1444006739000,
        'toDate': 1461456118000,
        'longitude': 32.7133,
        'latitude': 75.5154,
        'amountToBeRaised': 5083.0,
        'raisedFunding': 7.0,
        'description': 'Enim commodo velit quis eu excepteur ex sit ea nisi dolor qui. Exercitation officia enim qui nostrud nulla aliquip occaecat adipisicing veniam. Deserunt proident Lorem pariatur qui ut adipisicing anim magna labore et nulla. Non reprehenderit proident est aliquip. Laboris incididunt cupidatat nulla Lorem Lorem eiusmod nisi laboris id consectetur.',
        'mainImage': '/assets/photos/project001/main/001.jpg',
        'images': null,
        'projectManager': 'Wendi Collier',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 3,
        'id': 23
      },
      {
        'projectNumber': 'efff07cb-c55b-4bfb-a3f8-fd858fdef5ec',
        'projectName': 'Isbol',
        'address': 'Voorhies Avenue 395, Vivian, 1155',
        'fromDate': 1413594431000,
        'toDate': 1470472487000,
        'longitude': 118.164,
        'latitude': 58.5109,
        'amountToBeRaised': 8761.0,
        'raisedFunding': 1.0,
        'description': 'Sint ipsum duis ullamco qui ea sunt non deserunt anim quis minim. Adipisicing eu culpa do eiusmod consequat culpa ut magna anim consequat cillum consectetur laboris. Nostrud quis culpa commodo anim adipisicing consectetur incididunt eu fugiat laborum do est aliqua anim.',
        'mainImage': '/assets/photos/project001/main/001.jpg',
        'images': null,
        'projectManager': 'Bettie Clay',
        'nationalProject': false,
        'recurringProject': false,
        'recurringProjectPublishingDate': null,
        'organizationId': 5,
        'id': 24
      }
    ],
    activitiesList: [
      {
        'eventId': 1,
        'projectId': 2,
        'eventTitle': 'Human rights in Sweden',
        'eventDescription': 'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'eventDate': 1508630400000,
        'eventImage': 'XYA'
      },
      {
        'eventId': 2,
        'projectId': 1,
        'eventTitle': 'Empower children who stutter',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'eventDate': 1508630400000,
        'eventImage': 'XYB'
      },
      {
        'eventId': 3,
        'projectId': 3,
        'eventTitle': 'Suburps of Malmö',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'eventDate': 1508630400000,
        'eventImage': 'XYC'
      },
      {
        'eventId': 5,
        'projectId': 4,
        'eventTitle': 'The Economic growth',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'eventDate': 1508637600000,
        'eventImage': 'XYB'
      },
      {
        'eventId': 6,
        'projectId': 13,
        'eventTitle': 'The new poems',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'eventDate': 1508637600000,
        'eventImage': 'XYB'
      },
      {
        'eventId': 9,
        'projectId': 1,
        'eventTitle': 'The new change',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'eventDate': 1484182800000,
        'eventImage': 'XYB'
      },
      {
        'eventId': 10,
        'projectId': 1,
        'eventTitle': 'Bring the light',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'eventDate': 1484182800000,
        'eventImage': 'XYB'
      },
      {
        'eventId': 12,
        'projectId': 2,
        'eventTitle': 'Solidarity with everyone',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'eventDate': 1508630400000,
        'eventImage': 'XYA'
      },
      {
        'eventId': 14,
        'projectId': 2,
        'eventTitle': 'Children Rights',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'eventDate': 1508630400000,
        'eventImage': 'XYA'
      },
      {
        'eventId': 15,
        'projectId': 2,
        'eventTitle': 'Immigrants in Sweden',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'eventDate': 1508630400000,
        'eventImage': 'XYA'
      },
      {
        'eventId': 16,
        'projectId': 15,
        'eventTitle': 'Let minimize the world',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'eventDate': 1511996400000,
        'eventImage': ''
      },
      {
        'eventId': 17,
        'projectId': 1,
        'eventTitle': 'Black and White',
        'eventDescription': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'eventDate': 1511996400000,
        'eventImage': ''
      },
      {
        'eventId': 18,
        'projectId': 21,
        'eventTitle': 'Le permiere rencontre',
        'eventDescription': 'Allez les Francais ',
        'eventDate': 1509490800000,
        'eventImage': ''
      }
    ],
    donorList: [
      {
        'id':  1,
        'userName':  'Natasa',
        'userSlogan':  'Do your home work in time',
        'userImage':  './assets/photos/userImage1.jpeg',
        'wallet':  {
          'total':  0,
          'donated':  125
        },
        'savedProject':  [
          1,
          2,
          3,
          4
        ]
      }
    ]
  };
