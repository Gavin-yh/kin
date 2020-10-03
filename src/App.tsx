import React from 'react';
import Button, {ButtonType, ButtonSize} from './component/Button/index'
import Menu from './component/menu/menu'
import MenuItem  from './component/menu/menuItem'

function App() {
  return (
    <div className="App">
      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
        className='gavin'
      >确定 </Button>

      <Menu
      >
        <MenuItem>
          gavin 1
        </MenuItem >
        <MenuItem>
          gavin 2
        </MenuItem>
        <MenuItem >
          gavin 3
        </MenuItem>
      </Menu>
    </div>
  );
}

Button.defaultProps = {
  btnType: ButtonType.Default,
  disabled: false,
}

export default App;
