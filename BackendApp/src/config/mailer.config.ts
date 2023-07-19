// mailer.config.ts
export default {
    transport: {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Puedes ajustar esto según tu configuración de correo
      auth: {
        user: 'jmarchioniclv@gmail.com',
        pass: 'xbryplkxfzenzoex',
      },
    },
    defaults: {
      from: '"Grupo5" <jmarchioniclv@gmail.com>',
    },
  };
  