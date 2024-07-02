
# Car Configurator Web App 

## Overview

The objective of this project is to develop a simple web application that allows users to interact with, and customise, a virtual car model. The idea is that, through this web app, users can change various features of the car such as color and wheels, adjust the camera angle to view different perspectives, and toggle between exterior and interior views. These interactions are registered transmitted from the front end via WebSocket (WS) to a backend server. These websocket messages would then be used to  enables live updates of the car model on digital billboards in Out-Of-Home (OOH) advertising campaigns.

## Setup and Deployment 

Using your preferred terminal, take the following steps: 

1. Clone Repository: git clone 
2. Install Dependencies: npm install
3. Run Development Servers: npm run dev 
4. Please note that this project has been set up to concurrently start Next.js server on localhost:3000 and WebSocket server on localhost:8080.
5. Access Application: Open http://localhost:3000 in a web browser to interact with the car configurator.
6. Monitor WebSocket server reponses logged into your as you alter your choices in the selector 

## Project Structure 

This project stems from a standard next.js deployment, it differs that, in addition to the next.js server, there is a WebSocket server that has been setup with socket.io 

The structure of the files follow best practices and closely aligns with Next.js standard App router folder structure.

The app itself is a single page app, found in src/app/page.tsx 

It contains a single client component "src/components/car-configurator.tsx"

UI components have been primarily derived from ShadCn and can be seen in "src/components/ui"

All photos and assets can be found in the public folder 

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) 

The project uses TypeScript, React, Tailwind CSS, Socket.io for the web socket server 

Server-side implementation can be found in ws-server.js (root) and client side in socket.js 

## Features
 
* Color Customisation: Users can select from a range of car colors available.
* Wheel Selection: Option to choose different types and sizes of wheels for the car.
* Camera Angle Adjustment: Implemented slider functionality to rotate the camera around the car model.
* Exterior and Interior Views: Toggle switch to alternate between viewing the car's exterior and interior.


## Example Websocket reponse

 Car configuration received: {
 colour: 'Metallic Sunset Orange',
 wheel: '18" - 2',
 sliderValue: [ 75 ],
 interiorView: true
 }


## Additional Notes 

This project demonstrates the integration of frontend user interaction with backend WebSocket communication, enabling real-time updates in a digital billboard environment.
Future enhancements could include user authentication, configuration saving, and sharing options to enhance user engagement and campaign effectiveness.
