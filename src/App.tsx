
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/homePage'
import ContactPage from './pages/contactPage'
import RegisterPage from './pages/registerPage'
import ErrorPage from './pages/errorPage'

const queryClient = new QueryClient()

function App(): React.ReactElement {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </QueryClientProvider>
    </div>
  )
}

export default App
