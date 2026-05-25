import type { ComponentType } from "react"
import type { BlogMeta } from "./types"

import * as aki from "./aki-nedir"
import * as pm from "./pm10-pm25-nedir"
import * as su from "./su-tasarrufu-yontemleri"
import * as ecz from "./nobetci-eczane-sistemi"
import * as bar from "./baraj-doluluk-orani-nedir"
import * as oto from "./otobus-hat-numaralandirma"
import * as avr from "./acik-veri-nedir"
import * as kur from "./kuraklik-nedir-olculur"
import * as trbar from "./turkiye-onemli-barajlari"
import * as havaRehber from "./hava-kalitesi-rehberi"
import * as izUlasim from "./izmir-toplu-tasima-rehberi"
import * as izBaraj from "./izmir-barajlari-tahtatli-gordes-balcova"
import * as saglik from "./turkiye-saglik-sistemi-basamaklar"
import * as izRehber from "./izmir-rehberi-cografya-iklim-ilceler"
import * as deprem from "./depreme-hazirlik-rehberi"
import * as surdurulebilir from "./surdurulebilir-yasam-nedir-rehber"
import * as asm from "./aile-sagligi-merkezi-asm-nedir"
import * as depremCanta from "./deprem-cantasi-icinde-ne-olmali"
import * as izban from "./izban-nedir-istasyonlar-guzergah"
import * as pazarYerleri from "./izmir-pazar-yerleri-rehberi"
import * as acilAsmMi from "./acil-servis-mi-asm-mi"
import * as izDeprem from "./izmir-deprem-riski-fay-hatlari"
import * as afad from "./afad-nedir-afetlerde-rolu"
import * as karbonAyak from "./karbon-ayak-izi-nedir-hesaplanir"
import * as suKesinti from "./izmir-su-kesintileri-nedenler"
import * as metro from "./izmir-metrosu-guzergahlar-istasyonlar"
import * as toplanma from "./toplanma-alani-nedir-nasil-bulunur"
import * as izmirkart from "./izmirkart-nedir-nasil-kullanilir"
import * as isiAdasi from "./isi-adasi-etkisi-nedir"
import * as sifirAtik from "./sifir-atik-yasam-baslangic"
import * as apiNedir from "./api-nedir-acik-veri-farki"
import * as jsonCsvXml from "./json-csv-xml-veri-formatlari-farki"
import * as akilliSehir from "./akilli-sehir-smart-city-nedir"
import * as cbsGis from "./cografi-bilgi-sistemi-cbs-gis-nedir"
import * as belAcikVeri from "./belediye-acik-verisi-durum"
import * as sehirPlanlama from "./sehir-planlamasi-nedir-imar-rant"
import * as kentselDonusum from "./kentsel-donusum-nedir-hak-yukumlulukler"
import * as buyuksehirFarki from "./buyuksehir-ilce-belediyesi-farki"
import * as imarDurumu from "./imar-durumu-nedir-nasil-sorgulanir"
import * as ulasimPlan from "./ulasim-ana-plani-nedir"
import * as kentLok from "./izmir-kent-lokantalari-halk-ekmek"
import * as ucretsizEtkinlik from "./izmir-ucretsiz-etkinlik-alanlari"
import * as kutuphane from "./izmir-7-24-acik-kutuphaneler"
import * as geriDonusum from "./izmir-geri-donusum-elektronik-atik"
import * as ucretsizSpor from "./izmir-ucretsiz-spor-tesisleri-parkurlar"
import * as gedizKesinti from "./gediz-elektrik-kesintisi-sorgulama"
import * as liseTaban from "./izmir-lise-taban-puanlari-lgs-rehberi"
import * as ucPsikolog from "./izmir-ucretsiz-psikolog-ruh-sagligi"
import * as izelaman from "./izmir-otopark-izelaman-rehberi"
import * as bisim from "./bisim-bisiklet-izmir-kullanim-rehberi"
import * as sivilasma from "./izmir-zemin-sivilasma-riski"
import * as kiraFiyat from "./izmir-kira-fiyatlari-nasil-arastirilir"
import * as gidaIsrafi from "./gida-israfi-onlemek-pratik-yontemler"
import * as kompost from "./kompost-nedir-evde-nasil-yapilir"
import * as organikTarim from "./organik-tarim-nedir-farki"
import * as yenilenebilir from "./yenilenebilir-enerji-turleri"
import * as solarPanel from "./evde-solar-panel-kurulum-maliyet"
import * as ozon from "./ozon-kirliligi-nedir-saglik-etkileri"
import * as no2 from "./azot-dioksit-no2-trafik-kirliligi"
import * as kurbanKesim from "./izmir-kurban-kesim-yerleri-2026"
import * as bayramUlasim from "./izmir-bayram-ulasimi-2026"
import * as bayramNamazi from "./bayram-namazi-saati-izmir-2026"
import * as bayramEczane from "./izmir-bayram-nobetci-eczane-2026"
import * as bayramBanka from "./bayramda-bankalar-ptt-avm-izmir-2026"
import * as kurbanDeri from "./kurban-derisi-nereye-verilir-izmir-2026"
import * as kiraArtis from "./mayis-2026-kira-artis-orani"
import * as maviBayrak from "./izmir-plajlari-mavi-bayrak-2026"
import * as denizSicak from "./izmir-deniz-suyu-sicakligi-aylik"
import * as lgs2026 from "./lgs-2026-izmir-sinav-ulasim-rehberi"
import * as yks2026 from "./yks-2026-izmir-sinav-merkezleri"

export type BlogPost = BlogMeta & { Body: ComponentType }

const RAW: BlogPost[] = [
  { ...aki.meta, Body: aki.Body },
  { ...pm.meta, Body: pm.Body },
  { ...su.meta, Body: su.Body },
  { ...ecz.meta, Body: ecz.Body },
  { ...bar.meta, Body: bar.Body },
  { ...oto.meta, Body: oto.Body },
  { ...avr.meta, Body: avr.Body },
  { ...kur.meta, Body: kur.Body },
  { ...trbar.meta, Body: trbar.Body },
  { ...havaRehber.meta, Body: havaRehber.Body },
  { ...izUlasim.meta, Body: izUlasim.Body },
  { ...izBaraj.meta, Body: izBaraj.Body },
  { ...saglik.meta, Body: saglik.Body },
  { ...izRehber.meta, Body: izRehber.Body },
  { ...deprem.meta, Body: deprem.Body },
  { ...surdurulebilir.meta, Body: surdurulebilir.Body },
  { ...asm.meta, Body: asm.Body },
  { ...depremCanta.meta, Body: depremCanta.Body },
  { ...izban.meta, Body: izban.Body },
  { ...pazarYerleri.meta, Body: pazarYerleri.Body },
  { ...acilAsmMi.meta, Body: acilAsmMi.Body },
  { ...izDeprem.meta, Body: izDeprem.Body },
  { ...afad.meta, Body: afad.Body },
  { ...karbonAyak.meta, Body: karbonAyak.Body },
  { ...suKesinti.meta, Body: suKesinti.Body },
  { ...metro.meta, Body: metro.Body },
  { ...toplanma.meta, Body: toplanma.Body },
  { ...izmirkart.meta, Body: izmirkart.Body },
  { ...isiAdasi.meta, Body: isiAdasi.Body },
  { ...sifirAtik.meta, Body: sifirAtik.Body },
  { ...apiNedir.meta, Body: apiNedir.Body },
  { ...jsonCsvXml.meta, Body: jsonCsvXml.Body },
  { ...akilliSehir.meta, Body: akilliSehir.Body },
  { ...cbsGis.meta, Body: cbsGis.Body },
  { ...belAcikVeri.meta, Body: belAcikVeri.Body },
  { ...sehirPlanlama.meta, Body: sehirPlanlama.Body },
  { ...kentselDonusum.meta, Body: kentselDonusum.Body },
  { ...buyuksehirFarki.meta, Body: buyuksehirFarki.Body },
  { ...imarDurumu.meta, Body: imarDurumu.Body },
  { ...ulasimPlan.meta, Body: ulasimPlan.Body },
  { ...kentLok.meta, Body: kentLok.Body },
  { ...ucretsizEtkinlik.meta, Body: ucretsizEtkinlik.Body },
  { ...kutuphane.meta, Body: kutuphane.Body },
  { ...geriDonusum.meta, Body: geriDonusum.Body },
  { ...ucretsizSpor.meta, Body: ucretsizSpor.Body },
  { ...gedizKesinti.meta, Body: gedizKesinti.Body },
  { ...liseTaban.meta, Body: liseTaban.Body },
  { ...ucPsikolog.meta, Body: ucPsikolog.Body },
  { ...izelaman.meta, Body: izelaman.Body },
  { ...bisim.meta, Body: bisim.Body },
  { ...sivilasma.meta, Body: sivilasma.Body },
  { ...kiraFiyat.meta, Body: kiraFiyat.Body },
  { ...gidaIsrafi.meta, Body: gidaIsrafi.Body },
  { ...kompost.meta, Body: kompost.Body },
  { ...organikTarim.meta, Body: organikTarim.Body },
  { ...yenilenebilir.meta, Body: yenilenebilir.Body },
  { ...solarPanel.meta, Body: solarPanel.Body },
  { ...ozon.meta, Body: ozon.Body },
  { ...no2.meta, Body: no2.Body },
  { ...kurbanKesim.meta, Body: kurbanKesim.Body },
  { ...bayramUlasim.meta, Body: bayramUlasim.Body },
  { ...bayramNamazi.meta, Body: bayramNamazi.Body },
  { ...bayramEczane.meta, Body: bayramEczane.Body },
  { ...bayramBanka.meta, Body: bayramBanka.Body },
  { ...kurbanDeri.meta, Body: kurbanDeri.Body },
  { ...kiraArtis.meta, Body: kiraArtis.Body },
  { ...maviBayrak.meta, Body: maviBayrak.Body },
  { ...denizSicak.meta, Body: denizSicak.Body },
  { ...lgs2026.meta, Body: lgs2026.Body },
  { ...yks2026.meta, Body: yks2026.Body },
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
