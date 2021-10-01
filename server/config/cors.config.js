const cors = require('cors');

const whitelist = [process.env.ORIGIN, process.env.ORIGIN_ONLINE];

const corsOptions = {
    origin: (origin, cb) => {
        const isOriginWhiteListed = whitelist.includes(origin);
        cb(null, isOriginWhiteListed);
    },
    credentials: true
}


module.exports = (app) => app.use(cors(corsOptions));