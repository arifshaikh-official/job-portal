
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import { ClerkProvider } from '@clerk/react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppContextProvider>
            {/* Added the publishableKey prop here */}
            <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ClerkProvider>
        </AppContextProvider>
    </StrictMode>
)