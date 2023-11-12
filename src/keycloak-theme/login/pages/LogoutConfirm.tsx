import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { Button, buttonVariants } from 'components/ui/button'

export default function LogoutConfirm(
    props: PageProps<Extract<KcContext, { pageId: 'logout-confirm.ftl' }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        classes,
    })

    const { url, client, logoutConfirm } = kcContext

    const { msg, msgStr } = i18n

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            displayMessage={false}
            headerNode={msg('logoutConfirmTitle')}
        >
            <div className="space-y-6">
                <p className="instruction">{msg('logoutConfirmHeader')}</p>
                <form
                    className="form-actions"
                    action={url.logoutConfirmAction}
                    method="POST"
                >
                    <input
                        type="hidden"
                        name="session_code"
                        value={logoutConfirm.code}
                    />
                    <div className={getClassName('kcFormGroupClass')}>
                        <input
                            tabIndex={4}
                            className={buttonVariants({
                                className: 'w-full',
                            })}
                            name="confirmLogout"
                            id="kc-logout"
                            type="submit"
                            value={msgStr('doLogout')}
                        />
                    </div>
                </form>
                {!logoutConfirm.skipLink && client.baseUrl && (
                    <Button variant={'link'} className="h-auto p-0">
                        <a
                            href={client.baseUrl}
                            dangerouslySetInnerHTML={{
                                __html: msgStr('backToApplication'),
                            }}
                        />
                    </Button>
                )}
            </div>
        </Template>
    )
}
