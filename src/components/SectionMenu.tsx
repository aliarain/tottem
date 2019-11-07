import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { ISectionIndex } from '../types'
import { Menu, MenuItem } from './Menu'

export interface ISectionMenuProps {
    sections: ISectionIndex[]
    activeSectionId: string
}

export function SectionMenu(props: ISectionMenuProps) {
    const router = useRouter()
    const sortedSections = props.sections.sort((a, b) => a.index - b.index)
    return (
        <Menu>
            {sortedSections.map(section => {
                return (
                    <Link
                        key={section.id}
                        href="/[profile]/[sectionId]"
                        as={`/${router.query.profile}/${section.id}`}
                        passHref
                    >
                        <MenuItem active={section.id === props.activeSectionId}>
                            <a
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'inherit',
                                }}
                            >
                                {section.name}
                            </a>
                        </MenuItem>
                    </Link>
                )
            })}
        </Menu>
    )
}