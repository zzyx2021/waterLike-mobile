import './index.css'
import './App.module.less'
import { useUploadOSS } from './hooks/useUploadOSS'
import { ImageUploader } from 'antd-mobile'


function App() {
  const uploadHandler = useUploadOSS()

  return (
    <div>
      <ImageUploader upload={uploadHandler}/>
    </div>
  )
}

export default App
