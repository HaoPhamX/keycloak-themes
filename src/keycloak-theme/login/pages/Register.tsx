// ejected using 'npx eject-keycloak-page'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { Input } from 'components/ui/input'
import { Label } from 'components/ui/label'
import { cn } from 'lib/utils'
import { Button, buttonVariants } from 'components/ui/button'

export default function Register(
    props: PageProps<Extract<KcContext, { pageId: 'register.ftl' }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

    const {
        url,
        messagesPerField,
        register,
        realm,
        passwordRequired,
        recaptchaRequired,
        recaptchaSiteKey,
    } = kcContext

    const { msg, msgStr } = i18n

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg('registerTitle')}
        >
            <form
                className={'space-y-6'}
                action={url.registrationAction}
                method="post"
            >
                <div className={'form-group'}>
                    <Label htmlFor="firstName">{msg('firstName')}</Label>
                    <Input
                        type="text"
                        id="firstName"
                        className={cn(
                            messagesPerField.printIfExists(
                                'firstName',
                                'border-destructive'
                            )
                        )}
                        name="firstName"
                        defaultValue={register.formData.firstName ?? ''}
                    />
                </div>

                <div className={'form-group'}>
                    <Label htmlFor="lastName">{msg('lastName')}</Label>
                    <Input
                        type="text"
                        id="lastName"
                        className={cn(
                            messagesPerField.printIfExists(
                                'lastName',
                                'border-destructive'
                            )
                        )}
                        name="lastName"
                        defaultValue={register.formData.lastName ?? ''}
                    />
                </div>
                <div className={'form-group'}>
                    <Label htmlFor="email">{msg('email')}</Label>
                    <Input
                        type="text"
                        id="email"
                        className={cn(
                            messagesPerField.printIfExists(
                                'email',
                                'border-destructive'
                            )
                        )}
                        name="email"
                        defaultValue={register.formData.email ?? ''}
                        autoComplete="email"
                    />
                </div>
                {!realm.registrationEmailAsUsername && (
                    <div className={'form-group'}>
                        <Label htmlFor="username">{msg('username')}</Label>
                        <Input
                            type="text"
                            id="username"
                            className={cn(
                                messagesPerField.printIfExists(
                                    'username',
                                    'border-destructive'
                                )
                            )}
                            name="username"
                            defaultValue={register.formData.username ?? ''}
                            autoComplete="username"
                        />
                    </div>
                )}
                {passwordRequired && (
                    <>
                        <div className={'form-group'}>
                            <Label htmlFor="password">{msg('password')}</Label>
                            <Input
                                type="password"
                                id="password"
                                className={cn(
                                    messagesPerField.printIfExists(
                                        'password',
                                        'border-destructive'
                                    )
                                )}
                                name="password"
                                autoComplete="new-password"
                            />
                        </div>

                        <div className={'form-group'}>
                            <Label htmlFor="password-confirm">
                                {msg('passwordConfirm')}
                            </Label>
                            <Input
                                type="password"
                                id="password-confirm"
                                className={cn(
                                    messagesPerField.printIfExists(
                                        'password-confirm',
                                        'border-destructive'
                                    )
                                )}
                                name="password-confirm"
                            />
                        </div>
                    </>
                )}
                {recaptchaRequired && (
                    <div
                        className="g-recaptcha"
                        data-size="compact"
                        data-sitekey={recaptchaSiteKey}
                    ></div>
                )}
                <Button className="h-auto p-0" variant={'link'}>
                    <a href={url.loginUrl}>{msg('backToLogin')}</a>
                </Button>
                <input
                    className={cn(buttonVariants(), 'block w-full')}
                    type="submit"
                    value={msgStr('doRegister')}
                />
            </form>
        </Template>
    )
}
