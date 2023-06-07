
module.exports = ({ env }) => ({
//  email plugin
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.gmail.com',
          port:  587,
          auth: {
            user:"navalhydrography@gmail.com" ,
            pass:"gfsohashxwjzqgpk", 
          },
        },
        settings: {
          defaultFrom: 'navalhydrography@gmail.com',
          defaultReplyTo: 'navalhydrography@gmail.com',
        },
      },
    },


    'users-permissions': {
        jwtSecret: env('JWT_SECRET', 'FBleMhzTccg1jjMsE2JjWQ=='),
      },
})