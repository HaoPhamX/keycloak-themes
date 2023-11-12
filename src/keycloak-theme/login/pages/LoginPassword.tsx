import { useState } from 'react'
import { useConstCallback } from 'keycloakify/tools/useConstCallback'
import type { FormEventHandler } from 'react'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { Label } from 'components/ui/label'
import { Input } from 'components/ui/input'
import { Button, buttonVariants } from 'components/ui/button'

export default function LoginPassword(
    props: PageProps<Extract<KcContext, { pageId: 'login-password.ftl' }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

    const { realm, url, login } = kcContext

    const { msg, msgStr } = i18n

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)

    const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(
        (e) => {
            e.preventDefault()

            setIsLoginButtonDisabled(true)

            const formElement = e.target as HTMLFormElement

            formElement.submit()
        }
    )

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg('doLogIn')}
        >
            <form
                className="space-y-6"
                onSubmit={onSubmit}
                action={url.loginAction}
                method="post"
            >
                <div className="form-group">
                    <Label htmlFor="password">{msg('password')}</Label>
                    <Input
                        tabIndex={2}
                        id="password"
                        name="password"
                        type="password"
                        autoFocus={true}
                        autoComplete="on"
                        defaultValue={login.password ?? ''}
                    />
                </div>
                {realm.resetPasswordAllowed && (
                    <Button variant={'link'} className="h-auto p-0">
                        <a tabIndex={5} href={url.loginResetCredentialsUrl}>
                            {msg('doForgotPassword')}
                        </a>
                    </Button>
                )}

                <input
                    tabIndex={4}
                    className={buttonVariants({
                        className: 'w-full',
                    })}
                    name="login"
                    id="kc-login"
                    type="submit"
                    value={msgStr('doLogIn')}
                    disabled={isLoginButtonDisabled}
                />
            </form>
        </Template>
    )
}
