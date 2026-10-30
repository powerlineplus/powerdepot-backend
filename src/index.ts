import dotenv from 'dotenv';
import app from './app.ts';

dotenv.config();

const port = process.env.PORT || 2099;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
