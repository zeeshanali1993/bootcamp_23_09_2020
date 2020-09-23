import React from 'react';
import ReceiveValue from './childObject.js'


function App()
{
  return (
    <div>
      <ReceiveValue dishName1="Chicken Pulao" dishName2="Kaabli Pulao" />
      <br /><hr />
      <ReceiveValue dishName1="Dish 3" dishName2="Dish 4" />
      <br /><hr />
    </div>
  );
}

export default App;
