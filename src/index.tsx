import { createRoot } from 'react-dom/client'
import { StrictMode, lazy, Suspense } from 'react'
import { kcContext as kcLoginThemeContext } from './keycloak-theme/login/kcContext'

import './index.css'

const KcLoginThemeApp = lazy(() => import('./keycloak-theme/login/KcApp'))
const App = lazy(() => import('./App'))

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Suspense>
            {(() => {
                if (kcLoginThemeContext !== undefined) {
                    return <KcLoginThemeApp kcContext={kcLoginThemeContext} />
                }

                return <App />
            })()}
        </Suspense>
    </StrictMode>
)
