import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import {config} from "dotenv";
config();
const emails = ["jorge.ruizlopez0904@gmail.com"];
passport.use(new GoogleStrategy("auth-google",{
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google',
  scope: [ 'profile' ],
  state: true
},
function verify(accessToken, refreshToken, profile, cb) {
  const response = emails.includes(profile.email[0].value);
    if(response){
      done(null, profile);
    }else{
      emails.push(profile.email[0].value);
      done(null, profile);
    }
}));