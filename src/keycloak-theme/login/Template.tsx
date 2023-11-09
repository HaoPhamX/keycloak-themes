/* eslint-disable jsx-a11y/anchor-is-valid */
// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { assert } from 'keycloakify/tools/assert'
import { clsx } from 'keycloakify/tools/clsx'
import { usePrepareTemplate } from 'keycloakify/lib/usePrepareTemplate'
import { type TemplateProps } from 'keycloakify/login/TemplateProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from './kcContext'
import type { I18n } from './i18n'
import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
} from 'components/ui/select'
import Product from '../../components/Product'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from 'components/ui/alert'

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        // displayWide = false,
        showAnotherWayIfPresent = true,
        headerNode,
        showUsernameNode = null,
        infoNode = null,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children,
    } = props

    const { getClassName } = useGetClassName({ doUseDefaultCss, classes })

    const {
        msg,
        changeLocale,
        labelBySupportedLanguageTag,
        currentLanguageTag,
    } = i18n

    const { realm, locale, auth, url, message, isAppInitiatedAction } =
        kcContext

    const { isReady } = usePrepareTemplate({
        doFetchDefaultThemeResources: doUseDefaultCss,
        styles: [
            `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
            `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
            `${url.resourcesCommonPath}/lib/zocial/zocial.css`,
            `${url.resourcesPath}/css/login.css`,
        ],
        htmlClassName: getClassName('kcHtmlClass'),
        bodyClassName: getClassName('kcBodyClass'),
    })

    if (!isReady) {
        return null
    }

    return (
        <div className="flex h-full overflow-auto shadow-sm">
            <div className="flex-col justify-center hidden w-full h-full p-6 md:flex md:min-w-[432px] relative">
                <Product {...props} />
                <div id="kc-footer" />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full col-span-full bg-card md:max-w-[800px] relative">
                <Card className="flex flex-col justify-center w-full border-none rounded-none shadow-none max-w-[500px]">
                    <CardHeader>
                        <div className="mx-auto mb-4 kc-logo-text" />
                        <CardTitle className="text-center">
                            {!(
                                auth !== undefined &&
                                auth.showUsername &&
                                !auth.showResetCredentials
                            ) ? (
                                displayRequiredFields ? (
                                    <div
                                        className={getClassName(
                                            'kcContentWrapperClass'
                                        )}
                                    >
                                        <div
                                            className={clsx(
                                                getClassName(
                                                    'kcLabelWrapperClass'
                                                ),
                                                'subtitle'
                                            )}
                                        >
                                            <span className="subtitle">
                                                <span className="required">
                                                    *
                                                </span>
                                                {msg('requiredFields')}
                                            </span>
                                        </div>
                                        <div className="col-md-10">
                                            <h1>{headerNode}</h1>
                                        </div>
                                    </div>
                                ) : (
                                    <h1 id="kc-page-title">{headerNode}</h1>
                                )
                            ) : displayRequiredFields ? (
                                <div
                                    className={getClassName(
                                        'kcContentWrapperClass'
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            getClassName('kcLabelWrapperClass'),
                                            'subtitle'
                                        )}
                                    >
                                        <span className="subtitle">
                                            <span className="required">*</span>{' '}
                                            {msg('requiredFields')}
                                        </span>
                                    </div>
                                    <div className="col-md-10">
                                        {showUsernameNode}
                                        <div
                                            className={getClassName(
                                                'kcFormGroupClass'
                                            )}
                                        >
                                            <div id="kc-username">
                                                <label id="kc-attempted-username">
                                                    {auth?.attemptedUsername}
                                                </label>
                                                <a
                                                    id="reset-login"
                                                    href={
                                                        url.loginRestartFlowUrl
                                                    }
                                                >
                                                    <div className="kc-login-tooltip">
                                                        <i
                                                            className={getClassName(
                                                                'kcResetFlowIcon'
                                                            )}
                                                        ></i>
                                                        <span className="kc-tooltip-text">
                                                            {msg(
                                                                'restartLoginTooltip'
                                                            )}
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {showUsernameNode}
                                    <div
                                        className={getClassName(
                                            'kcFormGroupClass'
                                        )}
                                    >
                                        <div id="kc-username">
                                            <label id="kc-attempted-username">
                                                {auth?.attemptedUsername}
                                            </label>
                                            <a
                                                id="reset-login"
                                                href={url.loginRestartFlowUrl}
                                            >
                                                <div className="kc-login-tooltip">
                                                    <i
                                                        className={getClassName(
                                                            'kcResetFlowIcon'
                                                        )}
                                                    ></i>
                                                    <span className="kc-tooltip-text">
                                                        {msg(
                                                            'restartLoginTooltip'
                                                        )}
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full overflow-auto gap-y-4 ">
                        {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                        {displayMessage &&
                            message !== undefined &&
                            (message.type !== 'warning' ||
                                !isAppInitiatedAction) && (
                                <Alert
                                    // className={clsx(
                                    //     'alert',
                                    //     `alert-${message.type}`
                                    // )}
                                    variant={
                                        message.type === 'error'
                                            ? 'destructive'
                                            : 'default'
                                    }
                                >
                                    {message.type === 'error' && (
                                        <AlertCircle size={16} />
                                    )}
                                    <AlertTitle className="uppercase">
                                        {message.type}
                                    </AlertTitle>
                                    <AlertDescription>
                                        {message.summary}
                                    </AlertDescription>
                                </Alert>
                            )}
                        {children}
                        {auth !== undefined &&
                            auth.showTryAnotherWayLink &&
                            showAnotherWayIfPresent && (
                                <form action={url.loginAction} method="post">
                                    <input
                                        type="hidden"
                                        name="tryAnotherWay"
                                        value="on"
                                    />
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a
                                        href="#"
                                        id="try-another-way"
                                        onClick={() => {
                                            document.forms[
                                                'kc-select-try-another-way-form' as never
                                            ].submit()
                                            return false
                                        }}
                                    >
                                        {msg('doTryAnotherWay')}
                                    </a>
                                </form>
                            )}
                        {displayInfo && infoNode}
                        <div className="flex items-center justify-center mt-7">
                            {realm.internationalizationEnabled &&
                                (assert(locale !== undefined), true) &&
                                locale.supported.length > 1 && (
                                    <Select
                                        onValueChange={(languageTag) => {
                                            console.log(languageTag)

                                            changeLocale(languageTag)
                                        }}
                                    >
                                        <SelectTrigger className="w-fit">
                                            <SelectValue
                                                placeholder={
                                                    labelBySupportedLanguageTag[
                                                        currentLanguageTag
                                                    ]
                                                }
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {locale.supported.map(
                                                    ({ languageTag }) => (
                                                        <SelectItem
                                                            key={languageTag}
                                                            value={languageTag}
                                                        >
                                                            {
                                                                labelBySupportedLanguageTag[
                                                                    languageTag
                                                                ]
                                                            }
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                        </div>
                    </CardContent>
                </Card>
                <div id="kc-footer" className="md:hidden" />
            </div>
        </div>
    )
}
