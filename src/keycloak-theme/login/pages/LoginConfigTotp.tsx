import type { PageProps } from 'keycloakify/login/pages/PageProps'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { MessageKey } from 'keycloakify/login/i18n/i18n'
import Template from '../Template'
import { Label } from 'components/ui/label'
import { Input } from 'components/ui/input'
import { Button, buttonVariants } from 'components/ui/button'

export default function LoginConfigTotp(
    props: PageProps<
        Extract<KcContext, { pageId: 'login-config-totp.ftl' }>,
        I18n
    >
) {
    const { kcContext, i18n, doUseDefaultCss, classes } = props

    const { url, isAppInitiatedAction, totp, mode, messagesPerField } =
        kcContext

    const { msg, msgStr } = i18n

    const algToKeyUriAlg: Record<
        (typeof kcContext)['totp']['policy']['algorithm'],
        string
    > = {
        HmacSHA1: 'SHA1',
        HmacSHA256: 'SHA256',
        HmacSHA512: 'SHA512',
    }

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={msg('loginTotpTitle')}
        >
            <>
                <ol>
                    <li>
                        <p>{msg('loginTotpStep1')}</p>

                        <ul id="kc-totp-supported-apps">
                            {totp.supportedApplications.map((app) => (
                                <li>{msgStr(app as MessageKey, app)}</li>
                            ))}
                        </ul>
                    </li>
                    {mode && mode === 'manual' ? (
                        <>
                            <li>
                                <p>{msg('loginTotpManualStep2')}</p>
                                <p>
                                    <span id="kc-totp-secret-key">
                                        {totp.totpSecretEncoded}
                                    </span>
                                </p>
                                <p>
                                    <a href={totp.qrUrl} id="mode-barcode">
                                        {msg('loginTotpScanBarcode')}
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>{msg('loginTotpManualStep3')}</p>
                                <p>
                                    <ul>
                                        <li id="kc-totp-type">
                                            {msg('loginTotpType')}:{' '}
                                            {msg(
                                                `loginTotp.${totp.policy.type}`
                                            )}
                                        </li>
                                        <li id="kc-totp-algorithm">
                                            {msg('loginTotpAlgorithm')}:{' '}
                                            {algToKeyUriAlg?.[
                                                totp.policy.algorithm
                                            ] ?? totp.policy.algorithm}
                                        </li>
                                        <li id="kc-totp-digits">
                                            {msg('loginTotpDigits')}:{' '}
                                            {totp.policy.digits}
                                        </li>
                                        {totp.policy.type === 'totp' ? (
                                            <li id="kc-totp-period">
                                                {msg('loginTotpInterval')}:{' '}
                                                {totp.policy.period}
                                            </li>
                                        ) : (
                                            <li id="kc-totp-counter">
                                                {msg('loginTotpCounter')}:{' '}
                                                {totp.policy.initialCounter}
                                            </li>
                                        )}
                                    </ul>
                                </p>
                            </li>
                        </>
                    ) : (
                        <li>
                            <p>{msg('loginTotpStep2')}</p>
                            <img
                                id="kc-totp-secret-qr-code"
                                src={`data:image/png;base64, ${totp.totpSecretQrCode}`}
                                alt="Figure: Barcode"
                            />
                            <a href={totp.manualUrl} id="mode-manual">
                                {msg('loginTotpUnableToScan')}
                            </a>
                        </li>
                    )}
                    <li>
                        <p>{msg('loginTotpStep3')}</p>
                        <p>{msg('loginTotpStep3DeviceName')}</p>
                    </li>
                </ol>
                <form
                    action={url.loginAction}
                    className={'space-y-6'}
                    id="kc-totp-settings-form"
                    method="post"
                >
                    <div className={'form-group'}>
                        <div className="flex space-x-1">
                            <Label htmlFor="totp">
                                {msg('authenticatorCode')}
                            </Label>
                            <span className="required">*</span>
                        </div>
                        <Input
                            type="text"
                            id="totp"
                            name="totp"
                            autoComplete="off"
                            aria-invalid={messagesPerField.existsError('totp')}
                        />
                        {messagesPerField.existsError('totp') && (
                            <span
                                id="input-error-otp-code"
                                className={'text-destructive'}
                                aria-live="polite"
                            >
                                {messagesPerField.get('totp')}
                            </span>
                        )}
                        <input
                            type="hidden"
                            id="totpSecret"
                            name="totpSecret"
                            value={totp.totpSecret}
                        />
                        {mode && <input type="hidden" id="mode" value={mode} />}
                    </div>

                    <div className={'form-group'}>
                        <div className="flex space-x-1">
                            <Label htmlFor="userLabel">
                                {msg('loginTotpDeviceName')}
                            </Label>
                            {totp.otpCredentials.length >= 1 && (
                                <span className="required">*</span>
                            )}
                        </div>
                        <Input
                            type="text"
                            id="userLabel"
                            name="userLabel"
                            autoComplete="off"
                            aria-invalid={messagesPerField.existsError(
                                'userLabel'
                            )}
                        />
                        {messagesPerField.existsError('userLabel') && (
                            <span
                                id="input-error-otp-label"
                                className={'text-destructive'}
                                aria-live="polite"
                            >
                                {messagesPerField.get('userLabel')}
                            </span>
                        )}
                    </div>

                    {isAppInitiatedAction ? (
                        <div className="flex space-x-2">
                            <input
                                type="submit"
                                className={buttonVariants({
                                    size: 'default',
                                })}
                                id="saveTOTPBtn"
                                value={msgStr('doSubmit')}
                            />
                            <Button
                                size={'default'}
                                variant={'secondary'}
                                type="submit"
                                id="cancelTOTPBtn"
                                name="cancel-aia"
                                value="true"
                            >
                                {msg('doCancel')}
                            </Button>
                        </div>
                    ) : (
                        <input
                            type="submit"
                            className={buttonVariants({
                                className: 'w-full',
                            })}
                            id="saveTOTPBtn"
                            value={msgStr('doSubmit')}
                        />
                    )}
                </form>
            </>
        </Template>
    )
}
