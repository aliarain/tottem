import gql from 'graphql-tag'
import { ItemType } from './common'

export const ProfilePageFragment = {
    collection: gql`
        fragment CollectionProfilePage on Collection {
            slug
            name
            date
            detail
            items(first: 4) {
                id
                imageUrl
                productUrl
                title
                author
                type
            }
        }
    `,
    user: gql`
        fragment UserProfilePage on User {
            slug
            firstname
            pictureUrl
            biography
            label
            social: profile {
                mail
                linkedin
                youtube
                website
            }
        }
    `,
    section: gql`
        fragment SectionProfilePage on Section {
            slug
            name
            index
        }
    `,
}

export interface ISocial {
    linkedin?: string
    github?: string
    mail?: string
    youtube?: string
    website?: string
}

export interface UserProfile {
    slug: string
    firstname: string
    pictureUrl: string
    biography: string
    social?: ISocial
    label?: string
}

export interface ISection {
    slug: string
    name: string
    index: number
}

export interface ICollection {
    slug: string
    name: string
    date: Date | string
    items: Item[]
    detail?: string
}

export interface Item {
    id: string
    title: string
    author?: string
    imageUrl?: string
    productUrl: string
    type: ItemType
}
