'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const QueryProvider = ({children}:any) => {
    const Query =new QueryClient()
  return (
    <QueryClientProvider client={Query}>
        <div>
        <Toaster />
            {children}
            
        </div>
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default QueryProvider