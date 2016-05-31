#!/bin/bash

#run the application
PORT=$port CWS_KEY=$CWS_KEY MAPS_KEY=$MAPS_KEY FIREBASE=$firebase SQLITELOCATION=$sqlitelocation node server/app-server.js
