import { useEffect, Fragment } from 'react'
import type { ClassKey } from 'keycloakify/login/TemplateProps'
import { useFormValidation } from 'keycloakify/login/lib/useFormValidation'
import type { Attribute } from 'keycloakify/login/kcContext/KcContext'
import type { I18n } from '../../i18n'
import { Label } from 'components/ui/label'
import { cn } from 'lib/utils'
import { Input } from 'components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
} from 'components/ui/select'
export type UserProfileFormFieldsProps = {
    kcContext: Parameters<typeof useFormValidation>[0]['kcContext']
    i18n: I18n
    getClassName: (classKey: ClassKey) => string
    onIsFormSubmittableValueChange: (isFormSubmittable: boolean) => void
    BeforeField?: (props: { attribute: Attribute }) => JSX.Element | null
    AfterField?: (props: { attribute: Attribute }) => JSX.Element | null
}

export function UserProfileFormFields(props: UserProfileFormFieldsProps) {
    const {
        kcContext,
        onIsFormSubmittableValueChange,
        i18n,
        getClassName,
        BeforeField,
        AfterField,
    } = props

    const { advancedMsg, msg } = i18n

    const {
        formValidationState: { fieldStateByAttributeName, isFormSubmittable },
        formValidationDispatch,
        attributesWithPassword,
    } = useFormValidation({
        kcContext,
        i18n,
    })

    useEffect(() => {
        onIsFormSubmittableValueChange(isFormSubmittable)
    }, [isFormSubmittable])

    let currentGroup = ''
    console.log(attributesWithPassword)

    return (
        <>
            {attributesWithPassword.map((attribute, i) => {
                const {
                    group = '',
                    groupDisplayHeader = '',
                    groupDisplayDescription = '',
                } = attribute

                const { value, displayableErrors } =
                    fieldStateByAttributeName[attribute.name]

                const formGroupClassName = cn(
                    'form-group',
                    displayableErrors.length !== 0 &&
                        getClassName('kcFormGroupErrorClass')
                )

                return (
                    <Fragment key={i}>
                        {group !== currentGroup &&
                            (currentGroup = group) !== '' && (
                                <div className={formGroupClassName}>
                                    <div className="flex flex-col gap-2">
                                        <label id={`header-${group}`}>
                                            {advancedMsg(groupDisplayHeader) ||
                                                currentGroup}
                                        </label>
                                    </div>
                                    {groupDisplayDescription !== '' && (
                                        <div
                                            className={getClassName(
                                                'kcLabelWrapperClass'
                                            )}
                                        >
                                            <label id={`description-${group}`}>
                                                {advancedMsg(
                                                    groupDisplayDescription
                                                )}
                                            </label>
                                        </div>
                                    )}
                                </div>
                            )}

                        {BeforeField && <BeforeField attribute={attribute} />}

                        <div className={formGroupClassName}>
                            <div className="space-x-1">
                                <Label htmlFor={attribute.name}>
                                    {advancedMsg(attribute.displayName ?? '')}
                                </Label>
                                {attribute.required && (
                                    <span className="text-destructive">*</span>
                                )}
                            </div>

                            {(() => {
                                const { options } = attribute.validators

                                if (options !== undefined) {
                                    return (
                                        <Select
                                            value={value}
                                            onValueChange={(val) =>
                                                formValidationDispatch({
                                                    action: 'update value',
                                                    name: attribute.name,
                                                    newValue: val,
                                                })
                                            }
                                        >
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Theme" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        {msg('selectAnOption')}
                                                    </SelectLabel>
                                                    {options.options.map(
                                                        (option) => (
                                                            <SelectItem
                                                                key={option}
                                                                value={option}
                                                            >
                                                                {option}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )
                                }

                                return (
                                    <Input
                                        type={(() => {
                                            switch (attribute.name) {
                                                case 'password-confirm':
                                                case 'password':
                                                    return 'password'
                                                default:
                                                    return 'text'
                                            }
                                        })()}
                                        id={attribute.name}
                                        name={attribute.name}
                                        value={value}
                                        onChange={(event) =>
                                            formValidationDispatch({
                                                action: 'update value',
                                                name: attribute.name,
                                                newValue: event.target.value,
                                            })
                                        }
                                        onBlur={() =>
                                            formValidationDispatch({
                                                action: 'focus lost',
                                                name: attribute.name,
                                            })
                                        }
                                        aria-invalid={
                                            displayableErrors.length !== 0
                                        }
                                        disabled={attribute.readOnly}
                                        autoComplete={attribute.autocomplete}
                                    />
                                )
                            })()}
                            {displayableErrors.length !== 0 &&
                                (() => {
                                    return (
                                        <>
                                            <span
                                                className={'text-destructive'}
                                                aria-live="polite"
                                            >
                                                {displayableErrors.map(
                                                    ({ errorMessage }) =>
                                                        errorMessage
                                                )}
                                            </span>
                                        </>
                                    )
                                })()}
                        </div>
                        {AfterField && <AfterField attribute={attribute} />}
                    </Fragment>
                )
            })}
        </>
    )
}
