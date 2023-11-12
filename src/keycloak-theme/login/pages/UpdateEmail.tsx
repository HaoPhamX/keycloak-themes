import type { PageProps } from 'keycloakify/login/pages/PageProps'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { Label } from 'components/ui/label'
import { Input } from 'components/ui/input'
import { Button, buttonVariants } from 'components/ui/button'
import Template from '../Template'

export default function UpdateEmail(
    props: PageProps<Extract<KcContext, { pageId: 'update-email.ftl' }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, classes } = props

    const { msg, msgStr } = i18n

    const { url, messagesPerField, isAppInitiatedAction, email } = kcContext

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg('updateEmailTitle')}
        >
            <form className="space-y-6" action={url.loginAction} method="post">
                <div className={'form-group'}>
                    <Label htmlFor="email">{msg('email')}</Label>
                    <Input
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={email.value ?? ''}
                        className={messagesPerField.printIfExists(
                            'email',
                            'border-destructive'
                        )}
                        aria-invalid={messagesPerField.existsError('email')}
                    />
                </div>
                {isAppInitiatedAction ? (
                    <>
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
                    </>
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
