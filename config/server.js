module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['6Cnpm6gYtd6sh321OiVG6A==','MKVnr3VPt1TZZjq5EcB3rQ==','vLRkv5MpSC1YADRs/REQyQ==','kcNkFP0XztSWOLFD04USxg=='],
  },
});
