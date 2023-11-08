import { useState, type FormEventHandler } from 'react'
import { useConstCallback } from 'keycloakify/tools/useConstCallback'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
// import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { retrieveQueryParamFromUrl } from 'oidc-spa/tools/urlQueryParams'
import { Button, buttonVariants } from 'components/ui/button'
import { Label } from 'components/ui/label'
import { Input } from 'components/ui/input'
import { Checkbox } from 'components/ui/checkbox'

const result = retrieveQueryParamFromUrl({
    url: window.location.href,
    name: 'my_custom_param',
})

if (result.wasPresent) {
    console.log('my_custom_param', result.value)
}

export default function Login(
    props: PageProps<Extract<KcContext, { pageId: 'login.ftl' }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

    // const { getClassName } = useGetClassName({
    //     doUseDefaultCss,
    //     classes,
    // })

    const {
        social,
        realm,
        url,
        usernameHidden,
        login,
        auth,
        registrationDisabled,
    } = kcContext

    const { msg, msgStr } = i18n

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)

    const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>(
        (e) => {
            e.preventDefault()

            setIsLoginButtonDisabled(true)

            const formElement = e.target as HTMLFormElement

            //NOTE: Even if we login with email Keycloak expect username and password in
            //the POST request.
            formElement
                .querySelector("input[name='email']")
                ?.setAttribute('name', 'username')

            formElement.submit()
        }
    )

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            displayInfo={social.displayInfo}
            displayWide={realm.password && social.providers !== undefined}
            headerNode={msg('loginTitle')}
            infoNode={
                realm.password &&
                realm.registrationAllowed &&
                !registrationDisabled && (
                    <div className="flex items-center justify-center w-full gap-2">
                        {msg('noAccount')}
                        <a tabIndex={6} href={url.registrationUrl}>
                            {msg('doRegister')}
                        </a>
                    </div>
                )
            }
        >
            {realm.password && (
                <form
                    className="space-y-6"
                    onSubmit={onSubmit}
                    action={url.loginAction}
                    method="post"
                >
                    <div className="grid w-full items-center gap-1.5">
                        {!usernameHidden &&
                            (() => {
                                const label = !realm.loginWithEmailAllowed
                                    ? 'username'
                                    : realm.registrationEmailAsUsername
                                    ? 'email'
                                    : 'usernameOrEmail'

                                const autoCompleteHelper: typeof label =
                                    label === 'usernameOrEmail'
                                        ? 'username'
                                        : label

                                return (
                                    <>
                                        <Label htmlFor={autoCompleteHelper}>
                                            {msg(label)}
                                        </Label>
                                        <Input
                                            tabIndex={1}
                                            id={autoCompleteHelper}
                                            //NOTE: This is used by Google Chrome auto fill so we use it to tell
                                            //the browser how to pre fill the form but before submit we put it back
                                            //to username because it is what keycloak expects.
                                            name={autoCompleteHelper}
                                            defaultValue={login.username ?? ''}
                                            type="text"
                                            autoFocus={true}
                                            autoComplete="off"
                                        />
                                    </>
                                )
                            })()}
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                        <Label htmlFor="password">{msg('password')}</Label>
                        <Input
                            tabIndex={2}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="off"
                        />
                    </div>
                    {((realm.rememberMe && !usernameHidden) ||
                        realm.resetPasswordAllowed) && (
                        <div className="flex items-center justify-between">
                            {realm.rememberMe && !usernameHidden ? (
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        defaultChecked={
                                            login.rememberMe === 'on'
                                        }
                                        id="rememberMe"
                                        name="rememberMe"
                                    />
                                    <Label
                                        htmlFor="rememberMe"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {msg('rememberMe')}
                                    </Label>
                                </div>
                            ) : (
                                <div />
                            )}
                            {realm.resetPasswordAllowed && (
                                <Button variant={'link'}>
                                    <a
                                        tabIndex={5}
                                        href={url.loginResetCredentialsUrl}
                                    >
                                        {msg('doForgotPassword')}
                                    </a>
                                </Button>
                            )}
                        </div>
                    )}
                    <input
                        type="hidden"
                        id="id-hidden-input"
                        name="credentialId"
                        {...(auth?.selectedCredential !== undefined
                            ? {
                                  value: auth.selectedCredential,
                              }
                            : {})}
                    />
                    <input
                        tabIndex={4}
                        className={buttonVariants({
                            size: 'lg',
                            className: 'w-full',
                        })}
                        name="login"
                        id="kc-login"
                        type="submit"
                        value={msgStr('doLogIn')}
                        disabled={isLoginButtonDisabled}
                    />
                </form>
            )}
            {/* TODO: login other of providers */}
            {/* {realm.password && social.providers !== undefined && (
                <div
                    id="kc-social-providers"
                    className={clsx(
                        getClassName('kcFormSocialAccountContentClass'),
                        getClassName('kcFormSocialAccountClass')
                    )}
                >
                    <ul
                        className={clsx(
                            getClassName('kcFormSocialAccountListClass'),
                            social.providers.length > 4 &&
                                getClassName(
                                    'kcFormSocialAccountDoubleListClass'
                                )
                        )}
                    >
                        {social.providers.map((p) => (
                            <li
                                key={p.providerId}
                                className={getClassName(
                                    'kcFormSocialAccountListLinkClass'
                                )}
                            >
                                <a
                                    href={p.loginUrl}
                                    id={`zocial-${p.alias}`}
                                    className={clsx('zocial', p.providerId)}
                                >
                                    <span>{p.displayName}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}
        </Template>
    )
}
