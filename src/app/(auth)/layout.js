import React from 'react'
import AuthLayout from '@/components/auth/authLayout'

export default function layout({ children }) {
    return (
        <AuthLayout> {children}</AuthLayout>
    )
}
  
