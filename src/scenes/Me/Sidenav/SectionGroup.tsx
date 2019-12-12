import spaceIcon from '@iconify/icons-ic/baseline-layers'
import arrowIcon from '@iconify/icons-ic/round-keyboard-arrow-right'
import { InlineIcon } from '@iconify/react'
import { useState } from 'react'

interface SectionGroupProps {
    title: string
    id: string
    isExpanded: boolean
    isActive: boolean
    collections: Array<{ title: string; id: string }>
}

export default ({
    title,
    id,
    isExpanded,
    isActive,
    collections,
}: SectionGroupProps) => {
    const bgBrand200 = `bg-brand-100`

    isExpanded = false
    const [expanded, setExpanded] = useState(isExpanded)

    return (
        <div>
            <div
                className={`pl-2 py-1 mb-1 rounded hover:${bgBrand200} cursor-pointer font-semibold ${
                    isActive ? bgBrand200 : ''
                }`}
            >
                <div className="flex justify-between items-center">
                    <div>
                        <span className="mr-1">
                            <InlineIcon
                                className="inline"
                                color="#BFBFBF"
                                icon={spaceIcon}
                            />
                        </span>
                        <span className="text-gray-800">{title}</span>
                    </div>
                    <div
                        onClick={() => setExpanded(!expanded)}
                        className="px-2 text-gray-600 hover:text-gray-800"
                    >
                        <InlineIcon
                            width={16}
                            height={16}
                            className={`inline transition-all ${
                                expanded ? 'rotate-90deg' : 'rotate-0deg'
                            }`}
                            icon={arrowIcon}
                        />
                    </div>
                </div>
            </div>

            {expanded &&
                collections.map(collection => {
                    return (
                        <div
                            key={collection.id}
                            className="px-6 py-1 rounded hover:bg-brand-200 cursor-pointer whitespace-no-wrap truncate mb-1 font-normal"
                        >
                            {collection.title}
                        </div>
                    )
                })}
        </div>
    )
}
