import { KcContext } from '../keycloak-theme/login/kcContext'
import type { I18n } from '../keycloak-theme/login/i18n'
import { type TemplateProps } from 'keycloakify/login/TemplateProps'
import { cn } from 'lib/utils'

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
        title: 'SkyInventory',
    },
    {
        title: 'KDS Pro',
    },
]

const ProductItem = ({
    title,
    imageUrl,
    lastItem,
}: Product & {
    lastItem?: boolean
}) => {
    return (
        <div
            className={cn(
                'flex items-center justify-center p-2 rounded-lg shadow-sm bg-background w-[116px] h-[116px]',
                {
                    'col-span-1 col-start-2': lastItem,
                }
            )}
        >
            {title}
        </div>
    )
}

const Product = (props: TemplateProps<KcContext, I18n>) => {
    const { i18n } = props

    const { msgStr } = i18n
    return (
        <div className="space-y-6 text-center max-w-[600px] mx-auto">
            <div>
                <h1 className="mb-2">{msgStr('productTitle')}</h1>
                <h4 className="font-normal">{msgStr('productDescription')}</h4>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="grid grid-cols-3 gap-4 ">
                    {productDomains.map((product) => (
                        <ProductItem
                            {...product}
                            lastItem={product.title === 'KDS Pro'}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product
