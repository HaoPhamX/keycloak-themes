import { KcContext } from '../keycloak-theme/login/kcContext'
import type { I18n } from '../keycloak-theme/login/i18n'
import { type TemplateProps } from 'keycloakify/login/TemplateProps'

type Product = {
    title: string
    imageUrl?: string
}

const productDomains: Product[] = [
    {
        title: 'SkyTab',
    },
    {
        title: 'SkyMenu',
    },
    {
        title: 'SkyOrder',
    },
    {
        title: 'SkyCRM',
    },
    {
        title: 'SkyInvoice',
    },
    {
        title: 'KDS Pro',
    },
    {
        title: 'SkyInventory',
    },
]

const ProductItem = ({ title, imageUrl }: Product) => {
    return (
        <div className="flex items-center justify-center p-2 rounded-lg shadow-sm bg-background w-[116px] h-[116px]">
            {title}
        </div>
    )
}

const Product = (props: TemplateProps<KcContext, I18n>) => {
    const { i18n } = props

    const { msgStr } = i18n
    return (
        <div className="text-center">
            <h1>{msgStr('productTitle')}</h1>
            <h4 className="font-normal text-muted-foreground">
                {msgStr('productTitle')}
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                {productDomains.map((product) => (
                    <ProductItem {...product} />
                ))}
            </div>
        </div>
    )
}

export default Product
