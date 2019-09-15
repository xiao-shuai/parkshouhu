import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Shouhu from '../shouhu/Shouhu'
import Wenti from '../shouhu/Wenti'
import Record from '../shouhu/Record'
const SHOUHU=createStackNavigator({
    Shouhu:{screen:Shouhu},
    Wenti:{screen:Wenti},
    Record:{screen:Record}
})

export default createAppContainer(SHOUHU)
