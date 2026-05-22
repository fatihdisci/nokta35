export type Baraj = {
  BarajAdi: string
  DolulukOrani: number
  SuYuksekligi: number
  Kapasite: number
}

export type Eczane = {
  Adi: string
  Adres: string
  Telefon: string
  Boylam: number
  Enlem: number
}

export type Otopark = {
  Adi: string
  DoluKapasite: number
  BosKapasite: number
  ToplamKapasite: number
  Boylam: number
  Enlem: number
}

export type SuKesintisi = {
  Ilce: string
  Mahalle: string
  Saat: string
  Aciklama: string
}

export type OtobusKonum = {
  OtobusId: string
  Yon: string
  KoorX: string
  KoorY: string
}
