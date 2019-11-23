#!/bin/bash

while [ true ]; do
    sleep 15m
    echo "Restarting heroku"
    heroku restart
done
