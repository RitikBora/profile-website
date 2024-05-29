
import { RecoilRoot } from 'recoil'
import './App.css'
import { Appbar } from './components/Appbar'


function App() {

  return (
    <RecoilRoot>
      <div className='h-screen w-screen bg-customGray'>
        <Appbar/>
      </div>
    </RecoilRoot>
  )
}

export default App
