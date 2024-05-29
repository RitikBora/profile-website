
import { RecoilRoot } from 'recoil'
import './App.css'
import { Appbar } from './components/Appbar'
import { Landing } from './components/Landing'


function App() {

  return (
    <RecoilRoot>
      <div className='min-h-screen bg-customGray'>
        <Appbar/>
        <Landing/>
      </div>
    </RecoilRoot>
  )
}

export default App
