import dotenv from "dotenv";

dotenv.config();

const config = {
  byma: {
    IpAddress: process.env.REACT_APP_IP_BYMA,
    Dni: process.env.REACT_APP_DNI_BYMA,
    Usuario: process.env.REACT_APP_USER_BYMA,
    Password: process.env.REACT_APP_PASS_BYMA,
    token: process.env.REACT_APP_ACCESSTOKEN_BYMA,
  },
  matba: {
    Usuario: process.env.REACT_APP_USER_MATBA,
    Password: process.env.REACT_APP_PASS_MATBA,
  },
};

export default config;
