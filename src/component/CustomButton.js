import React from 'react';
import { Button } from '@material-ui/core';

function CustomButton(props) {
  return <Button variant="contained" color="primary">{props.title}</Button>;
}

export default CustomButton;