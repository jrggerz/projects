import express from "express";
import {loginRouter} from "./routes/login.js";
import passport from "passport";
import "./middlewares/google.js"
//
const app = express();
const port = 3000;
//middleware
app.use(express.json());
app.use(passport.initialize());
//routes
app.use('/auth', passport.authenticate("auth-google", {
    scope: 
        [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ],
        session: false
}),loginRouter);
//listening
app.listen(port, () => {console.log('Example app listening on port port!');});