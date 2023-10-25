import JwtPassport from "passport-jwt";

import { UserModel } from "../database/user";
import passport from "passport";

const JwtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoApp"
};

export default (passport) => {
    passport.use(
        new JwtStrategy(options, async(jwt__payload, done) => {
            try {
                const doesUserExist = UserModel.findById(jwt__payload.user);
                if(!doesUserExist) return done(null, false);

                return done(null, doesUserExist);
            } catch (e) {
                throw new Error(e);
            }
        })
    );
};