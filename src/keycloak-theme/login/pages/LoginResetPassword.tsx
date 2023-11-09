import type { PageProps } from 'keycloakify/login/pages/PageProps'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { Label } from 'components/ui/label'
import { Input } from 'components/ui/input'
import { Button, buttonVariants } from 'components/ui/button'

export default function LoginResetPassword(
    props: PageProps<
        Extract<KcContext, { pageId: 'login-reset-password.ftl' }>,
        I18n
    >
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

    const { url, realm, auth } = kcContext

    const { msg, msgStr } = i18n

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            displayMessage={false}
            headerNode={msg('emailForgotTitle')}
            infoNode={msg('emailInstruction')}
        >
            <form
                id="kc-reset-password-form"
                className={'space-y-6'}
                action={url.loginAction}
                method="post"
            >
                <div className={'grid items-center gap-2'}>
                    <Label htmlFor="username">
                        {!realm.loginWithEmailAllowed
                            ? msg('username')
                            : !realm.registrationEmailAsUsername
                            ? msg('usernameOrEmail')
                            : msg('email')}
                    </Label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        autoFocus
                        defaultValue={
                            auth !== undefined && auth.showUsername
                                ? auth.attemptedUsername
                                : undefined
                        }
                    />
                    <div>
                        <Button variant={'link'} className="p-0">
                            <a href={url.loginUrl}>{msg('backToLogin')}</a>
                        </Button>
                    </div>
                </div>
                <input
                    className={buttonVariants({
                        size: 'lg',
                        className: 'w-full',
                    })}
                    type="submit"
                    value={msgStr('doSubmit')}
                />
            </form>
        </Template>
    )
}
