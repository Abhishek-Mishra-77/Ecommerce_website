import React, { Fragment } from 'react';
import Kids from './Kids';
import Mens from './Mens';
import Ladies from './Ladies';

const Store = () => {
    return (
        <Fragment>
            <Kids />
            <Mens />
            <Ladies />
        </Fragment>
    )
}

export default Store