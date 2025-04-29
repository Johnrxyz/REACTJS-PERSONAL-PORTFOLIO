import { useState } from 'react';

function Try() {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
    return (
      <div>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
        />
        {isChecked ? <p style={{color:'white'}}>Checkbox is checked!</p> : <p style={{color:'white'}}>Checkbox is not checked.</p>}
      </div>
    );
  }
export default Try