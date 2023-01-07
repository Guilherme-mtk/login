import React from 'react'
import { Container } from './styles';
import { Form } from './styles';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const sign = () => {
  return (
    <Container>
      <Form>
      <h1>Sign-in</h1>
        <TextField fullWidth className='form'   id="standard-basic" label="Email" color="secondary" variant="standard" type="email"    />
        <TextField fullWidth className='form'  id="standard-basic" label="Password" color="secondary" variant="standard" type="password" />
        <Button fullWidth className='button' variant="contained" color="secondary">Login</Button>
     </Form>
    </Container>
  )
}
export default sign