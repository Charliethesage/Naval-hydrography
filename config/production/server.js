module.exports = ({ env }) => ({
    url: "https://naval-hydrography963.onrender.com",
    dirs: {
      public: "/data/public"
    },
    app: {
    keys: env.array('APP_KEYS'),
  },
  });