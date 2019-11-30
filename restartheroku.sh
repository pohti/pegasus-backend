#!/bin/bash

while [ true ]; do
    sleep 5m
    echo "Restarting heroku"
    heroku restart
done
