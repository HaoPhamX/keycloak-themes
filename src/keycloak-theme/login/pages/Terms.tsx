import { useRerenderOnStateChange } from 'evt/hooks'
import { Markdown } from 'keycloakify/tools/Markdown'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { evtTermMarkdown } from 'keycloakify/login/lib/useDownloadTerms'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { useDownloadTerms } from 'keycloakify/login'
import tos_en_url from '../assets/tos_en.md'
import tos_fr_url from '../assets/tos_fr.md'
import { buttonVariants } from 'components/ui/button'

export default function Terms(
    props: PageProps<Extract<KcContext, { pageId: 'terms.ftl' }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

    const { msg, msgStr } = i18n

    // NOTE: If you aren't going to customize the layout of the page you can move this hook to
    // KcApp.tsx, see: https://docs.keycloakify.dev/terms-and-conditions
    useDownloadTerms({
        kcContext,
        downloadTermMarkdown: async ({ currentLanguageTag }) => {
            const tos_url = (() => {
                switch (currentLanguageTag) {
                    case 'fr':
                        return tos_fr_url
                    default:
                        return tos_en_url
                }
            })()

            if ('__STORYBOOK_ADDONS' in window) {
                // NOTE: In storybook, when you import a .md file you get the content of the file.
                // In Create React App on the other hand you get an url to the file.
                return tos_url
            }

            const markdownString = await fetch(tos_url).then((response) =>
                response.text()
            )

            return markdownString
        },
    })

    useRerenderOnStateChange(evtTermMarkdown)

    const { url } = kcContext

    const termMarkdown = evtTermMarkdown.state

    if (termMarkdown === undefined) {
        return null
    }

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            displayMessage={false}
            headerNode={msg('termsTitle')}
        >
            <div id="kc-terms-text">
                <Markdown>{termMarkdown}</Markdown>
            </div>
            <form
                className="flex items-center space-x-2"
                action={url.loginAction}
                method="POST"
            >
                <input
                    className={buttonVariants({
                        size: 'default',
                    })}
                    name="accept"
                    id="kc-accept"
                    type="submit"
                    value={msgStr('doAccept')}
                />
                <input
                    className={buttonVariants({
                        variant: 'secondary',
                        size: 'default',
                    })}
                    name="cancel"
                    id="kc-decline"
                    type="submit"
                    value={msgStr('doDecline')}
                />
            </form>
            <div className="clearfix" />
        </Template>
    )
}
