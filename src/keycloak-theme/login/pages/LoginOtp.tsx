import { useEffect } from 'react'
import { headInsert } from 'keycloakify/tools/headInsert'
import { clsx } from 'keycloakify/tools/clsx'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { Label } from 'components/ui/label'
import { Input } from 'components/ui/input'
import { buttonVariants } from 'components/ui/button'

export default function LoginOtp(
    props: PageProps<Extract<KcContext, { pageId: 'login-otp.ftl' }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes,
    })

    const { otpLogin, url } = kcContext

    const { msg, msgStr } = i18n

    useEffect(() => {
        let isCleanedUp = false

        const { prLoaded, remove } = headInsert({
            type: 'javascript',
            src: `${kcContext.url.resourcesCommonPath}/node_modules/jquery/dist/jquery.min.js`,
        })

        ;(async () => {
            await prLoaded

            if (isCleanedUp) {
                return
            }

            evaluateInlineScript()
        })()

        return () => {
            isCleanedUp = true
            remove()
        }
    }, [])

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg('doLogIn')}
        >
            <form
                id="kc-otp-login-form"
                className={'space-y-6'}
                action={url.loginAction}
                method="post"
            >
                {otpLogin.userOtpCredentials.length > 1 && (
                    <div className={getClassName('kcFormGroupClass')}>
                        <div className={getClassName('kcInputWrapperClass')}>
                            {otpLogin.userOtpCredentials.map(
                                (otpCredential) => (
                                    <div
                                        key={otpCredential.id}
                                        className={getClassName(
                                            'kcSelectOTPListClass'
                                        )}
                                    >
                                        <input
                                            type="hidden"
                                            value="${otpCredential.id}"
                                        />
                                        <div
                                            className={getClassName(
                                                'kcSelectOTPListItemClass'
                                            )}
                                        >
                                            <span
                                                className={getClassName(
                                                    'kcAuthenticatorOtpCircleClass'
                                                )}
                                            />
                                            <h2 className="text-center">
                                                {otpCredential.userLabel}
                                            </h2>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}
                <div className={'form-group'}>
                    <Label htmlFor="otp">{msg('loginOtpOneTime')}</Label>
                    <Input
                        id="otp"
                        name="otp"
                        autoComplete="off"
                        type="text"
                        autoFocus
                    />
                </div>
                <input
                    className={buttonVariants({
                        className: 'w-full',
                    })}
                    name="login"
                    id="kc-login"
                    type="submit"
                    value={msgStr('doLogIn')}
                />
            </form>
        </Template>
    )
}

declare const $: any

function evaluateInlineScript() {
    $(document).ready(function () {
        // Card Single Select
        $('.card-pf-view-single-select').click(function (this: any) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).children().removeAttr('name')
            } else {
                $('.card-pf-view-single-select').removeClass('active')
                $('.card-pf-view-single-select').children().removeAttr('name')
                $(this).addClass('active')
                $(this).children().attr('name', 'selectedCredentialId')
            }
        })

        var defaultCred = $('.card-pf-view-single-select')[0]
        if (defaultCred) {
            defaultCred.click()
        }
    })
}
