
import { RecoilRoot } from 'recoil'
import './App.css'
import { Appbar } from './components/Appbar'
import { Landing } from './components/Landing'



function App() {

  return (
    <RecoilRoot>
      <div className='min-h-screen bg-customGray'>
        <Appbar/>
        <div className='flex justify-center image center'>
          <Landing/>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
