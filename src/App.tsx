import React from 'react'
import Button, { ButtonSize, ButtonType } from '@components/Button/button'

function App() {
  return (
    <div className='App' style={{ padding: 24, display: 'flex', justifyContent: 'space-between', width: 1000 }}>
      <Button disabled>hello</Button>
      <Button
        onClick={e => {
          alert(123)
        }}>
        normal
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large Primary
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        small Danger
      </Button>
      <Button btnType={ButtonType.Link} href={'https://www.baidu.com'} target={'_blank'}>
        Baidu Link
      </Button>
      <Button disabled btnType={ButtonType.Link} href={'https://www.baidu.com'}>
        Disable Link
      </Button>
    </div>
  )
}

export default App
