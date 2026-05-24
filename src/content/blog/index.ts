import type { ComponentType } from "react"
import type { BlogMeta } from "./types"

import * as aki from "./aki-nedir"
import * as pm from "./pm10-pm25-nedir"
import * as su from "./su-tasarrufu-yontemleri"
import * as ecz from "./nobetci-eczane-sistemi"
import * as bar from "./baraj-doluluk-orani-nedir"

export type BlogPost = BlogMeta & { Body: ComponentType }

const RAW: BlogPost[] = [
  { ...aki.meta, Body: aki.Body },
  { ...pm.meta, Body: pm.Body },
  { ...su.meta, Body: su.Body },
  { ...ecz.meta, Body: ecz.Body },
  { ...bar.meta, Body: bar.Body },
]

export const POSTS: BlogPost[] = [...RAW].sort((a, b) =>
  b.date.localeCompare(a.date),
)

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return POSTS.filter((p) => p.slug !== slug).slice(0, limit)
}
