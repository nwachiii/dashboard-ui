import React from 'react'
import { Grid } from '@chakra-ui/react';
import { Card } from '../Components/Cards';

const CardOverview = () => {
    return (
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Card minH={20}>
            <h5>Hey I'm alive!</h5>
        </Card>
      </Grid>
    );
}

export default CardOverview
