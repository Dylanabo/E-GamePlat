import React from 'react';
import { io } from "socket.io-client";

const URL = "http://localhost:8078";
const socket = io(URL, { autoConnect: false, cors: false });

socket.onAny((event, ...args) => {
    console.log(event, args);
});

export default socket;