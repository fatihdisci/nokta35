/**
 * JSON-LD Structured Data builders for nokta35.com
 * Tüm schema.org markup'ları bu modülden üretilir.
 */

const SITE_URL = "https://nokta35.com"
const SITE_NAME = "nokta35"

/* ------------------------------------------------------------------ */
/*  Organization + WebSite (root layout'ta kullanılır)                 */
/* ------------------------------------------------------------------ */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "İzmir Büyükşehir Belediyesi açık verilerini gerçek zamanlı görselleştiren bağımsız şehir veri platformu.",
    inLanguage: "tr",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      founder: {
        "@type": "Person",
        name: "Fatih Dişçi",
      },
    },
    sourceOrganization: {
      "@type": "GovernmentOrganization",
      name: "İzmir Büyükşehir Belediyesi",
      url: "https://www.izmir.bel.tr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "İzmir",
        addressCountry: "TR",
      },
    },
    about: {
      "@type": "City",
      name: "İzmir",
      alternateName: "Smyrna",
      containedInPlace: {
        "@type": "Country",
        name: "Türkiye",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.4192,
        longitude: 27.1287,
      },
    },
  }
}

/* ------------------------------------------------------------------ */
/*  BreadcrumbList                                                     */
/* ------------------------------------------------------------------ */

export type BreadcrumbItem = {
  name: string
  href: string
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const listItems = [
    { name: "Ana Sayfa", href: "/" },
    ...items,
  ].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.href}`,
  }))

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems,
  }
}

/* ------------------------------------------------------------------ */
/*  Dataset (açık veri setleri için)                                   */
/* ------------------------------------------------------------------ */

type DatasetOptions = {
  name: string
  description: string
  url: string
  creator?: string
  creatorUrl?: string
  keywords?: string[]
  temporalCoverage?: string
}

export function datasetJsonLd(opts: DatasetOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    license: "https://creativecommons.org/licenses/by/4.0/",
    inLanguage: "tr",
    spatialCoverage: {
      "@type": "Place",
      name: "İzmir, Türkiye",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.4192,
        longitude: 27.1287,
      },
    },
    ...(opts.temporalCoverage && {
      temporalCoverage: opts.temporalCoverage,
    }),
    ...(opts.keywords && { keywords: opts.keywords }),
    creator: {
      "@type": "GovernmentOrganization",
      name: opts.creator ?? "İzmir Büyükşehir Belediyesi",
      ...(opts.creatorUrl && { url: opts.creatorUrl }),
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

/* ------------------------------------------------------------------ */
/*  GovernmentService (kamu hizmetleri için)                           */
/* ------------------------------------------------------------------ */

type ServiceOptions = {
  name: string
  description: string
  provider: string
  providerUrl?: string
  serviceType: string
  url: string
}

export function governmentServiceJsonLd(opts: ServiceOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: `${SITE_URL}${opts.url}`,
    provider: {
      "@type": "GovernmentOrganization",
      name: opts.provider,
      ...(opts.providerUrl && { url: opts.providerUrl }),
    },
    areaServed: {
      "@type": "City",
      name: "İzmir",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.4192,
        longitude: 27.1287,
      },
    },
  }
}

/* ------------------------------------------------------------------ */
/*  Article (blog yazıları için)                                       */
/* ------------------------------------------------------------------ */

type ArticleOptions = {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  category: string
  readTime?: number // dakika; wordCount tahmininde kullanılır
  keywords?: string[]
}

export function articleJsonLd(opts: ArticleOptions) {
  const url = `${SITE_URL}/blog/${opts.slug}`
  const modified = opts.dateModified ?? opts.datePublished
  // ~200 kelime/dakika okuma hızı varsayımı
  const wordCount = opts.readTime ? opts.readTime * 200 : undefined

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: modified,
    inLanguage: "tr",
    articleSection: opts.category,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    isAccessibleForFree: true,
    ...(wordCount && { wordCount }),
    ...(opts.keywords && opts.keywords.length > 0 && { keywords: opts.keywords.join(", ") }),
  }
}

/* ------------------------------------------------------------------ */
/*  FAQPage (Soru-Cevap için)                                          */
/* ------------------------------------------------------------------ */

export type FaqItem = {
  question: string
  answer: string
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

/* ------------------------------------------------------------------ */
/*  JSON-LD <script> tag renderer                                      */
/* ------------------------------------------------------------------ */

export function JsonLdScript({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const jsonLd = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data.map(({ "@context": _, ...rest }) => rest) }
    : data

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
