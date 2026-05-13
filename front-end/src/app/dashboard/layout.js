import DashboardSidbar from '@/components/layout/DashboardSidbar'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const DashboardLayout = ({children}) => {
  return (
    <DashboardSidbar>
      {children}
      <Toaster position="top-right" reverseOrder={false} />

    </DashboardSidbar>
  )
}

export default DashboardLayout