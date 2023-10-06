import AWS from 'aws-sdk';

AWS.config.update({
  region: 'sa-east-1', // Cambia a tu región
  credentials: {
    accessKeyId: 'AKIA3HUZS237EF6MUULQ',
    secretAccessKey: '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',
  },
});

export default AWS;