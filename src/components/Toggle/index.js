import React from 'react'
import Toggle from './Toggle'
import SharedTitle from '../Utils/SharedTitle'

import './style.css'

const ToggleDemo = () => (
  <div>
    <SharedTitle/>
     <p>
          Try the toggle which controls the status and animation. The block
          itself is also clickable. The animation is created using React-Motion.
     </p>
         <hr />
     <Toggle/>
  </div>
)

export default ToggleDemo
