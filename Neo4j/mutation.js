

Get - Mutation Users----------->

  query{
  users{
    edges{
      node{
        id
        email
        password
        dfa
      }
    }
  }
}
===================================>
  "node": {
    "id": "44311373-8b52-491f-86d4-521143e0cd21",
    "email": "nilla@gmail.com",
    "dfa": false
  }

===================================>
mutation{
    updateUser(input:{
      data:{

          id:"44311373-8b52-491f-86d4-521143e0cd21",
          dfa:true,
        firstName:"jilala",
        lastName:"dummy",
        email:"fk@gmail.com",
        gender:"male",
        password:"fk"

      }
    }){
      node{
        id
        dfa
        email
      }
    }
  }

========================================================

val query = """
                |MATCH (n:${nodesType.simpleName})
                |WHERE n.name =~ '(?i)${name}.*'
                |RETURN n
                """.trimMargin()
        return session.query(nodesType, query, EventRepositoryImpl.noParameters)

        =================================================================>

        {
          "data": {
            "findEventsByName": [
              {
                "id": "ffeb0af0-04f2-4fcf-8293-1c9fbad8273e",
                "name": "jilla fest",
                "description": "jilla fest event 001"
              }
            ]
          }
        }


        query{
          findEventsByName(name: "jilla fest")
           {
             id
             name
             description
           }
           
         }

         =============================================================>
         query{
          getDfaUsers(userId:"ffeb0af0-04f2-4fcf-8293-1c9fbad8273e",name:"jilla fest"){
            users{
              hasOpenChat
              connected
              hasRequestSent
              distance
            }
          }
        }

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>>>>>>>>

mutation{
  createUser(input:{
      data:{
    firstName:"naveen"
    lastName:"natarajan"
    password:"navynnj"
    email:"navyn12"
    dfa:true
    soundOn:false
  }
  }){
    node{
      id
      firstName
      lastName
      email
      password
      dfa
      soundOn
    }
  }
}



{
  "data": {
    "createUser": {
      "node": {
        "id": "28a0ccb0-fd11-431f-b839-d8710028b5d4",
        "firstName": "naveen",
        "lastName": "natarajan",
        "email": "navyn12",
        "password": "$2a$10$iFiQOdLFCKOSY.q2hoHPwObyMwR0lbpZaQh54nCz6gbTYf2iVxERi",
        "dfa": true,
        "soundOn": false
      }
    }
  }
}


mutation{
  updateUser(input:{
      data:{
        id:"28a0ccb0-fd11-431f-b839-d8710028b5d4"
    firstName:"naveen"
    lastName:"natarajan"
    password:"navynnj"
    email:"navyn12"
    dfa:false
    soundOn:false
  }
  }){
    node{
      id
      firstName
      lastName
      email
      password
      dfa
      soundOn
    }
  }
}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

MATCH (u:User)-[:LOCATION]-(l:Location)-[r]-(p:PostalCode)
WHERE id(u)=0
RETURN l, r, p


MATCH (n:User) WHERE id(n)=123 RETURN n

MATCH (u1:User)-[r:OTHERUSERS]-(u2:User)
WHERE id(u1)= 0 AND id(u2)= 1 AND (r.lowFriendState = 'ACCEPTED' AND r.highFriendState = 'ACCEPTED')
 RETURN count(r) > 0

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>>>>>>

MATCH (u:User)-[r:ATTENDS]-(e:Event)
WHERE id(u) =278  AND id(e) = 394
SET r.cohost = true

>>>>>>>>>>>>>>>>>>>>???????????????????????????????????>>>>>>>>>>>>>>>

MATCH (event:Event)-[r:ATTENDS]-(user:User)
WHERE ID(user)= 278 and r.creator = true 
and (event.startDate < 1522551300000 or event.endDate < 1522558500000)
RETURN id(event) AS eventId, r.creator, r.detached, r.approvalStatus

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

code bkup---->

var event =repository.findById(eventId);
        println("event data 0- > "+event?.name)
        val timeDateFormat = SimpleDateFormat("MM/dd/yy hh:mm:ss")
        if (event == null || event.name == null) {
            return null;
        }
        val sortedEventMessages = ArrayList<EventMessage>()
        sortedEventMessages.addAll(event.eventMessages)
        sortedEventMessages.sortedWith(compareBy({ it.sendDate }))
        var fullMessage = ""
        for (eventMessage in sortedEventMessages) {
            fullMessage += eventMessage.user!!.email + " (" + timeDateFormat.format(eventMessage.sendDate) + "): " + eventMessage.text + "<br>"
        }
        return fullMessage

**********************************************************************************************
query{
  getApprovedUsers(eventId:"ffeb0af0-04f2-4fcf-8293-1c9fbad8273e",userId: "44311373-8b52-491f-86d4-521143e0cd21"){
    creator
    cohost
    detached
    paid
  }
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

resetRelationshipStatus-------------->

MATCH (user1:User)-[r]-(user2:User)
WHERE id(user1)=212
AND r.lowFriendState='ACCEPTED' AND r.highFriendState='ACCEPTED'
RETURN id(user2)

****************************************************************************************************
get user all --->

MATCH (u:User)-[r:ATTENDS]->(e:Event) WHERE id(e)=394 AND r.approvalStatus='Approved' RETURN r

{
  "approvalStatus": "Approved",
  "detached": false,
  "zimId": "59b531e8-b80d-4f4e-830b-2a38110c6b72",
  "creator": true,
  "paid": false,
  "cohost": true,
  "pointsPending": 35
}

***********************************************************************************************************
getConnectedUsers  ============>

query{
  getConnectedUsers(userId:"28a0ccb0-fd11-431f-b839-d8710028b5d4"){
    users{
      hasOpenChat
      connected
      hasRequestSent
    }
  }
}

***************************************************************************************************
resetRelationshipStatus =======================>

query{
  resetRelationshipStatus(userId:"28a0ccb0-fd11-431f-b839-d8710028b5d4",dfaValue: true)
}

****************************************************************************************

mutation{
  createUser(input:{
      data:{
    firstName:"Navyn"
    lastName:"nJoBae"
    password:"N4v33n"
    email:"navyn12"
    dfa:true
  soundOn:false
   pointBalance:12345
  pointsPending:67890
    groups:["powerRangers","MysticForce","SPD","WildForce","MonkeyKing"]
  }
  }){
    node{
      id
      firstName
      lastName
      password
      email
      dfa
      soundOn
      pointBalance
      pointsPending
      groups
    }
  }
}

============================================================================================================>

{
  "location": null,
  "name": "joBae",
  "description": "hey! this is N4v33n",
  "eventMessages": {
    "EventMessage": [
      {
        "text": "hiyooooooooo",
        "sendDate": null,
        "user": "User"
      }
    ]
  },
  "userAttendsRels":[
      {
        "review": "N4v33n",
        "creator": "true",
        "paid": "false",
        "detached": "true",
        "cohost": "false",
        "pointsPending": "1234567890"
      }
    ]
  
}

============================================================================================================>>>>>>

{
  "data": {
    "createUser": {
      "node": {
        "id": "9d946198-3c8f-4e4c-a599-52ef01a6c4d6",
        "firstName": "Navyn",
        "lastName": "nJoBae",
        "password": "$2a$10$NxW2m.USUUtCOKwkrQVfxOYNVryiw0W1JC1bY4899uFBfh5ywmVhu",
        "email": "joNavynLa",
        "dfa": true,
        "soundOn": false,
        "pointBalance": 12345,
        "pointsPending": 67890,
        "groups": [
          "WildForce",
          "SPD",
          "powerRangers",
          "MysticForce",
          "MonkeyKing"
        ]
      }
    }
  }
}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

query{
  getGroups(userId:"9d946198-3c8f-4e4c-a599-52ef01a6c4d6")
}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
query{
  user(id:"9d946198-3c8f-4e4c-a599-52ef01a6c4d6"){
    id
    groups
  }
}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


query{
  getUpcomingEvents(userId:"30e7f60e-9a70-49f0-95bd-89c04ecf67e7"){
    events{
      id
      name
      startDate
      endDate
      privateEvent
      payingEvent
      bringAnything
      bringToEvent
      anySpecialCriteria
      specialCriteria
      description
      pictureURL
      sponsored
      fromChat
      openEvent
      creator
      detached
      approvalStatus      
    }
  }
}



{
  "data": {
    "getUpcomingEvents": {
      "events": [
        {
          "id": "faf3057e-7830-42b2-ad98-32bed892816b",
          "name": "Navyn BdaeeE",
          "startDate": 1528363560000,
          "endDate": 1528802760000,
          "privateEvent": true,
          "payingEvent": false,
          "bringAnything": true,
          "bringToEvent": "Concert coupon",
          "anySpecialCriteria": true,
          "specialCriteria": "Navyn party",
          "description": "BdaeeE vibes",
          "pictureURL": "https://www.freewalldownload.com/super-star-rajinikanth/super-star-rajinikanth-kaala-movie-stills-free-hd-mobile-desktop-download-wallpapers.jpg",
          "sponsored": true,
          "fromChat": false,
          "openEvent": true,
          "creator": null,
          "detached": null,
          "approvalStatus": null
        }
      ]
    }
  }
}  

***************************************************************************

mutation {
 createEvent(input: {
 data: {
 location:{
 latitude:12.9998898797
 longitude:89.875664535
 address:"chennai"
 fuzzyLocation: "bessy bay"
 locality:"chennai arena"
 name: "Papu special"
 reviews:"Awesome"
 }
 startDate:1528426800000
 endDate:1528772400000
	name:"Papu"
 description :"Music vibes"
 creatorUserId:"fb32dda0-6055-43f9-b546-0cf64fbf976e"
 eventType:"Papu party"
 eventSubType:"Papu concert"
 tags:"#party"
 address:"Chennai mall"
 rating:"5 star"
 website:"www.Papu.com"
 placeId:"chennai001"
 placeType:"Papu concert"
 countryCode:"600001"
 postalCode:"600041"
 groups:["FLNS","XMAS_APP"]
 privateEvent:true
 maxAttendees:100
 bringAnything:true
 bringToEvent:"Concert coupon"
 anySpecialCriteria:true
 specialCriteria:"Papu party"
 pictureURL:"https://www.freewalldownload.com/super-star-rajinikanth/super-star-rajinikanth-kaala-movie-stills-free-hd-mobile-desktop-download-wallpapers.jpg"
 website:"www.Papu.in"
 sponsored:true
 openEvent:true
 fromChat:true
 pointsCost:89
 add2rewardEvent:true
 friendIds:[45,50,100] 
 }
 }) {
 node {
 id
 location{
 latitude
 longitude
 address
 fuzzyLocation
 locality
 name
 reviews
 }
 startDate
 endDate
	name
 description
 creator{
 id
 email
 }
 eventType
 eventSubType
 tags
 address
 rating
 website
 placeId
 placeType
 countryCode
 postalCode
 groups
 privateEvent
 maxAttendees
 bringAnything
 bringToEvent
 anySpecialCriteria
 specialCriteria
 pictureURL
 website
 sponsored
 openEvent
 fromChat
 pointsCost
 add2rewardEvent
 friendIds
 }
}
}



{
  "data": {
    "createEvent": {
      "node": {
        "id": "5ff7886f-f6e6-419a-8dfa-c9582ae5bf9f",
        "location": {
          "latitude": 12.9998898797,
          "longitude": 89.875664535,
          "address": "chennai",
          "fuzzyLocation": "bessy bay",
          "locality": "chennai arena",
          "name": "Papu special",
          "reviews": "Awesome"
        },
        "startDate": 1528426800000,
        "endDate": 1528772400000,
        "name": "Papu",
        "description": "Music vibes",
        "creator": {
          "id": "fb32dda0-6055-43f9-b546-0cf64fbf976e",
          "email": "dhina@gmail.com"
        },
        "eventType": "Papu party",
        "eventSubType": "Papu concert",
        "tags": "#party",
        "address": "Chennai mall",
        "rating": "5 star",
        "website": "www.Papu.in",
        "placeId": "chennai001",
        "placeType": "Papu concert",
        "countryCode": "600001",
        "postalCode": "600041",
        "groups": [
          "XMAS_APP",
          "FLNS"
        ],
        "privateEvent": true,
        "maxAttendees": 100,
        "bringAnything": true,
        "bringToEvent": "Concert coupon",
        "anySpecialCriteria": true,
        "specialCriteria": "Papu party",
        "pictureURL": "https://www.freewalldownload.com/super-star-rajinikanth/super-star-rajinikanth-kaala-movie-stills-free-hd-mobile-desktop-download-wallpapers.jpg",
        "sponsored": true,
        "openEvent": true,
        "fromChat": true,
        "pointsCost": 89,
        "add2rewardEvent": true,
        "friendIds": [
          50,
          100,
          45
        ]
      }
    }
  }
}


*******************************************************************************************************

mutation {
 createEvent(input: {
 data: {
 location:{
 latitude:12.9998898797
 longitude:89.875664535
 address:"chennai"
 fuzzyLocation: "bessy bay"
 locality:"chennai arena"
 name: "D16 special"
 reviews:"Awesome"
 }
 startDate:1528363560000
 endDate:1528772400000
	name:"D16"
 description :"D16 vibes"
 creatorUserId:"87d428bd-c59a-4508-ab52-892d40de9efc"
 eventType:"D16 party"
 eventSubType:"D16 concert"
 tags:"#party"
 address:"Chennai mall"
 rating:"5 star"
 website:"www.D16.com"
 placeId:"chennai001"
 placeType:"D16 concert"
 countryCode:"600001"
 postalCode:"600041"
 groups:["FLNS","XMAS_APP"]
 privateEvent:true
 maxAttendees:100
 bringAnything:true
 bringToEvent:"Concert coupon D16"
 anySpecialCriteria:true
 specialCriteria:"D16 party"
 pictureURL:"https://www.freewalldownload.com/super-star-rajinikanth/super-star-rajinikanth-kaala-movie-stills-free-hd-mobile-desktop-download-wallpapers.jpg"
 website:"www.Papu.in"
 sponsored:true
 openEvent:true
 fromChat:true
 pointsCost:89
 add2rewardEvent:true
 friendIds:[45,50,100] 
 }
 }) {
 node {
 id
 location{
 latitude
 longitude
 address
 fuzzyLocation
 locality
 name
 reviews
 }
 startDate
 endDate
	name
 description
 creator{
 id
 email
 }
 eventType
 eventSubType
 tags
 address
 rating
 website
 placeId
 placeType
 countryCode
 postalCode
 groups
 privateEvent
 maxAttendees
 bringAnything
 bringToEvent
 anySpecialCriteria
 specialCriteria
 pictureURL
 website
 sponsored
 openEvent
 fromChat
 pointsCost
 add2rewardEvent
 friendIds
 }
}
}

*******************************************************************


query{
  getUpcomingEventsExt(userId:"30e7f60e-9a70-49f0-95bd-89c04ecf67e7"){
    events{
      id
      name
      startDate
      endDate
      privateEvent
      payingEvent
      bringAnything
      bringToEvent
      anySpecialCriteria
      specialCriteria
      description
      pictureURL
      sponsored
      fromChat
      openEvent
      creator
      detached
      approvalStatus    
    }
  }
}


{
  "data": {
    "getUpcomingEventsExt": {
      "events": [
        {
          "id": "faf3057e-7830-42b2-ad98-32bed892816b",
          "name": "Navyn BdaeeE",
          "startDate": 1528363560000,
          "endDate": 1528802760000,
          "privateEvent": true,
          "payingEvent": false,
          "bringAnything": true,
          "bringToEvent": "Concert coupon",
          "anySpecialCriteria": true,
          "specialCriteria": "Navyn party",
          "description": "BdaeeE vibes",
          "pictureURL": "https://www.freewalldownload.com/super-star-rajinikanth/super-star-rajinikanth-kaala-movie-stills-free-hd-mobile-desktop-download-wallpapers.jpg",
          "sponsored": true,
          "fromChat": false,
          "openEvent": true,
          "creator": true,
          "detached": false,
          "approvalStatus": "Approved"
        }
      ]
    }
  }
}

*******************************************************************

