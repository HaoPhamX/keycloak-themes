import { useState } from 'react'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import Template from '../Template'
import { UserProfileFormFields } from './shared/UserProfileFormFields'
import { buttonVariants } from 'components/ui/button'

export default function IdpReviewUserProfile(
    props: PageProps<
        Extract<KcContext, { pageId: 'idp-review-user-profile.ftl' }>,
        I18n
    >
) {
    const { kcContext, i18n, doUseDefaultCss, classes } = props

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes,
    })

    const { msg, msgStr } = i18n

    const { url } = kcContext

    const [isFomSubmittable, setIsFomSubmittable] = useState(false)

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg('loginIdpReviewProfileTitle')}
        >
            <form
                id="kc-idp-review-profile-form"
                className={'space-y-6'}
                action={url.loginAction}
                method="post"
            >
                <UserProfileFormFields
                    kcContext={kcContext}
                    onIsFormSubmittableValueChange={setIsFomSubmittable}
                    i18n={i18n}
                    getClassName={getClassName}
                />
                <input
                    className={buttonVariants({
                        className: 'w-full',
                    })}
                    type="submit"
                    value={msgStr('doSubmit')}
                    disabled={!isFomSubmittable}
                />
            </form>
        </Template>
    )
}
