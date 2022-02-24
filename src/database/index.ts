import { createConnection } from 'typeorm';

createConnection().then(() =>{
  console.log('💾 BD OK!')
}).catch(err =>{
  console.log({ERROR_DATABASE: err.message})
});
