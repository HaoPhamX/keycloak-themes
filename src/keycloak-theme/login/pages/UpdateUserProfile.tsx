import { useState } from 'react'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import Template from '../Template'
import { Button, buttonVariants } from 'components/ui/button'
import { UserProfileFormFields } from './shared/UserProfileFormFields'

export default function UpdateUserProfile(
    props: PageProps<
        Extract<KcContext, { pageId: 'update-user-profile.ftl' }>,
        I18n
    >
) {
    const { kcContext, i18n, doUseDefaultCss, classes } = props

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes,
    })

    const { msg, msgStr } = i18n

    const { url, isAppInitiatedAction } = kcContext

    const [isFomSubmittable, setIsFomSubmittable] = useState(false)

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg('loginProfileTitle')}
        >
            <form
                id="kc-update-profile-form"
                className="space-y-6"
                action={url.loginAction}
                method="post"
            >
                <UserProfileFormFields
                    kcContext={kcContext}
                    onIsFormSubmittableValueChange={setIsFomSubmittable}
                    i18n={i18n}
                    getClassName={getClassName}
                />
                {isAppInitiatedAction ? (
                    <>
                        <input
                            className={buttonVariants()}
                            type="submit"
                            value={msgStr('doSubmit')}
                        />
                        <Button
                            variant={'secondary'}
                            type="submit"
                            name="cancel-aia"
                            value="true"
                            formNoValidate
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
                        disabled={!isFomSubmittable}
                    />
                )}
            </form>
        </Template>
    )
}
