# Sandpiper



## UML Diagram
A UML Diagram modeling the data of our project is available [here](https://github.com/Eckerd-CS-Capstone/Sandpiper/blob/master/documents/RoomDiagram.xml).

To view it, download the diagram and open it on https://draw.io

## Relevant Documents
* [Tentative Schedule](/documents/schedule.md)
* [Design Document](/documents/design.pdf)
* [Requirements Document](/documents/requirements.pdf)
* [Database Setup Document](/documents/database.md)

## Setup Frontend
```
git clone https://github.com/Eckerd-CS-Capstone/Sandpiper.git
cd Sandpiper/frontend/
npm install
npm run serve
```

## Backend Information
### room_preference 
Field in submission table can have the following inputs:
```
squatting_new_room
squatting_same_room
off_rennovated
off_not_rennovated
omega_two_doubles
omega_four_singles
omega_doubles_with_single
* the complex/house/room num for squatting *
```