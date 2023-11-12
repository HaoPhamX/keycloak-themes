// ejected using 'npx eject-keycloak-page'
import { useState } from 'react'
import { UserProfileFormFields } from './shared/UserProfileFormFields'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { Button, buttonVariants } from 'components/ui/button'

export default function RegisterUserProfile(
    props: PageProps<
        Extract<KcContext, { pageId: 'register-user-profile.ftl' }>,
        I18n
    >
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes,
    })

    const { url, messagesPerField, recaptchaRequired, recaptchaSiteKey } =
        kcContext

    const { msg, msgStr } = i18n

    const [isFormSubmittable, setIsFormSubmittable] = useState(false)

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            displayMessage={messagesPerField.exists('global')}
            displayRequiredFields={true}
            headerNode={msg('registerTitle')}
        >
            <form
                className="space-y-6"
                id="kc-register-form"
                action={url.registrationAction}
                method="post"
            >
                <UserProfileFormFields
                    kcContext={kcContext}
                    onIsFormSubmittableValueChange={setIsFormSubmittable}
                    i18n={i18n}
                    getClassName={getClassName}
                />
                {recaptchaRequired && (
                    <div className={getClassName('kcInputWrapperClass')}>
                        <div
                            className="g-recaptcha"
                            data-size="compact"
                            data-sitekey={recaptchaSiteKey}
                        />
                    </div>
                )}
                <Button variant={'link'} className="h-auto p-0">
                    <a href={url.loginUrl}>{msg('backToLogin')}</a>
                </Button>
                <input
                    className={buttonVariants({
                        className: 'w-full',
                    })}
                    type="submit"
                    value={msgStr('doRegister')}
                    disabled={!isFormSubmittable}
                />
            </form>
        </Template>
    )
}
