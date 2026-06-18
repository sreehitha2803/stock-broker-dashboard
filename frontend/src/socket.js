import { io } from "socket.io-client";

const socket = io("https://stock-broker-dashboard-u432.onrender.com");

export default socket;