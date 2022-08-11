const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.static(__dirname + "/build"));
app.get("*", (req, res) => {
    return res.sendFile("/build/index.html", { root: __dirname + "/" });
});
const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
    const { username, roomID } = socket.handshake.query;
    socket.join(roomID);
    io.to(roomID).emit("connect", username);
    socket.on("message", (msg) => {
        io.to(roomID).emit("message", msg);
    });
    socket.on("disconnect", () => {
        io.to(roomID).emit("disconnect", username);
    });
});
server.listen(PORT, () => console.log("listening"));
