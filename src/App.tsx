import React from 'react';
import Button, {ButtonType, ButtonSize} from './component/Button/index'

function App() {
  return (
    <div className="App">
      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
        className='gavin'
      >确定 </Button>

      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Small}
        className='gavin'
      >确定</Button>

      <Button
        btnType={ButtonType.Danger}
        size={ButtonSize.Large}
        className='gavin'
      >确定</Button>

      <Button
        btnType={ButtonType.Default}
        size={ButtonSize.Large}
        className='gavin'
      >确定</Button>
    </div>
  );
}

Button.defaultProps = {
  btnType: ButtonType.Default,
  disabled: false,
}

export default App;
