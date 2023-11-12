import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { Label } from 'components/ui/label'
import { Input } from 'components/ui/input'
import { Button, buttonVariants } from 'components/ui/button'

export default function LoginUpdateProfile(
    props: PageProps<
        Extract<KcContext, { pageId: 'login-update-profile.ftl' }>,
        I18n
    >
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes,
    })

    const { msg, msgStr } = i18n

    const { url, user, isAppInitiatedAction } = kcContext

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg('loginProfileTitle')}
        >
            <form className="space-y-6" action={url.loginAction} method="post">
                {user.editUsernameAllowed && (
                    <div className="form-group">
                        <Label htmlFor="username">{msg('username')}</Label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            defaultValue={user.username ?? ''}
                        />
                    </div>
                )}
                <div className="form-group">
                    <Label
                        htmlFor="email"
                        className={getClassName('kcLabelClass')}
                    >
                        {msg('email')}
                    </Label>
                    <Input
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={user.email ?? ''}
                    />
                </div>

                <div className="form-group">
                    <Label htmlFor="firstName">{msg('firstName')}</Label>
                    <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        defaultValue={user.firstName ?? ''}
                    />
                </div>

                <div className="form-group">
                    <Label htmlFor="lastName">{msg('lastName')}</Label>
                    <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        defaultValue={user.lastName ?? ''}
                    />
                </div>
                {isAppInitiatedAction ? (
                    <div className="flex items-center justify-center gap-2">
                        <input
                            className={buttonVariants()}
                            type="submit"
                            defaultValue={msgStr('doSubmit')}
                        />
                        <Button
                            variant={'secondary'}
                            type="submit"
                            name="cancel-aia"
                            value="true"
                        >
                            {msg('doCancel')}
                        </Button>
                    </div>
                ) : (
                    <input
                        className={buttonVariants({
                            className: 'w-full',
                        })}
                        type="submit"
                        defaultValue={msgStr('doSubmit')}
                    />
                )}
            </form>
        </Template>
    )
}
