//env variable
require ("dotenv").config();

import express  from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//CONFIG
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Restaurant";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Reviews from "./API/Reviews";

//DATABASE CONNECTION
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(cors());
zomato.use(helmet());

zomato.use(require('express-session')({ 
    secret: 'paznic kamisama',
    resave: true,
    saveUninitialized: true
  }));
zomato.use(passport.initialize());
zomato.use(passport.session());


// passport configuration
googleAuthConfig(passport);
routeConfig(passport);


//For applicaiton routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/review", Reviews);
zomato.use("/order", Order);

const port = 3000;

zomato.get("/", (req,res) => {
    res.json({message: "SetUp Success!"})
});

zomato.listen(port, () => {
    ConnectDB().then(() => console.log(`Server is up and running at port ${port}`))
    .catch(() => console.log("Connection to database Failed!"));
});