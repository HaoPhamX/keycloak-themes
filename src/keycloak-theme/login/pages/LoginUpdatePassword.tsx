import type { PageProps } from 'keycloakify/login/pages/PageProps'
// import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { Label } from 'components/ui/label'
import { Input } from 'components/ui/input'
import { Checkbox } from 'components/ui/checkbox'
import { Button, buttonVariants } from 'components/ui/button'

export default function LoginUpdatePassword(
    props: PageProps<
        Extract<KcContext, { pageId: 'login-update-password.ftl' }>,
        I18n
    >
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

    // const { getClassName } = useGetClassName({
    //     doUseDefaultCss,
    //     classes,
    // })

    const { msg, msgStr } = i18n

    const { url, isAppInitiatedAction, username } = kcContext

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg('updatePasswordTitle')}
        >
            <form
                className="space-y-6"
                id="kc-passwd-update-form"
                action={url.loginAction}
                method="post"
            >
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    readOnly={true}
                    autoComplete="username"
                    style={{ display: 'none' }}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    style={{ display: 'none' }}
                />

                <div className={'grid gap-2 items-center'}>
                    <Label htmlFor="password-new">{msg('passwordNew')}</Label>
                    <Input
                        type="password"
                        id="password-new"
                        name="password-new"
                        autoFocus
                        autoComplete="new-password"
                    />
                </div>

                <div className={'grid gap-2 items-center'}>
                    <Label htmlFor="password-confirm">
                        {msg('passwordConfirm')}
                    </Label>
                    <Input
                        type="password"
                        id="password-confirm"
                        name="password-confirm"
                        autoComplete="new-password"
                    />
                </div>
                {!isAppInitiatedAction && (
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="logout-sessions"
                            name="logout-sessions"
                            defaultChecked
                        />
                        <Label htmlFor="logout-sessions">
                            {msgStr('logoutOtherSessions')}
                        </Label>
                    </div>
                )}
                {isAppInitiatedAction ? (
                    <div className="flex justify-center space-x-2">
                        <input
                            className={buttonVariants({
                                size: 'lg',
                            })}
                            type="submit"
                            defaultValue={msgStr('doSubmit')}
                        />
                        <Button
                            variant={'secondary'}
                            type="submit"
                            size={'lg'}
                            name="cancel-aia"
                            value="true"
                        >
                            {msg('doCancel')}
                        </Button>
                    </div>
                ) : (
                    <input
                        className={buttonVariants({
                            size: 'lg',
                            className: 'w-full',
                        })}
                        type="submit"
                        value={msgStr('doSubmit')}
                    />
                )}
            </form>
        </Template>
    )
}
