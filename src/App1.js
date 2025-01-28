import React, { useEffect, useState } from 'react'
         
import Load from './Loader'
const App1 = () => {
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
          
// Wait for 3 seconds
setTimeout(() => {
setIsLoading(false);
}, 3000);
}, []);
          
return (
isLoading ?
<Load/>:
          
          
<div>
          
home page
</div>
          
)
}
export default App1