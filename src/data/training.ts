export interface TrainingType {
  id: number;
  title: string;
  src: string;
  people: number;
}

export interface NewsType {
  id: number;
  title: string;
  src: string;
}

export const Training: TrainingType[] = [
  {
    id: 1,
    title: "Training internal 5R bersama Yayasan Dharma Bhakti Astra (YDBA)",
    src: "",
    people: 20,
  },
  {
    id: 2,
    title:
      "Training External Dies Maintenance bersama Yayasan Dharma Bhakti Astra (YDBA)",
    src: "",
    people: 30,
  },
  {
    id: 3,
    title:
      "Training External Manajemen Mutu ISO 9001:2015 bersama Yayasan Dharma Bhakti Astra (YDBA)",
    src: "",
    people: 25,
  },
  {
    id: 4,
    title: "Training External PPIC bersama Yayasan Dharma Bhakti Astra (YDBA)",
    src: "",
    people: 50,
  },
  {
    id: 5,
    title:
      "Training External Quality Control Circle bersama Yayasan Dharma Bhakti Astra (YDBA)",
    src: "",
    people: 70,
  },
];

export const News: NewsType[] = [
  {
    id: 1,
    title: "Link & Match 2022 antara IKM Komponen Otomotif dan tier APM (YDBA)",
    src: "",
  },
  {
    id: 2,
    title: "Program Colaborasi Astra Dalam Fasilitas pembiayaan UMKM (YDBA)",
    src: "",
  },
  {
    id: 3,
    title:
      "Penandatanganan Pemberian Fasilitas Pembiayaan Dari Astra VENTURA (ASTRA VENTURA)",
    src: "",
  },
  {
    id: 4,
    title: "Link & Match 2024 antara IKM Komponen Otomotif dan tier APM (YDBA)",
    src: "",
  },
  {
    id: 5,
    title:"Program Kolaborasi, MOU dengan PT.Astra Visteon Indonesia",
    src: "",
  },
  {
    id: 6,
    title: "Piagam IKM Mandiri atas pencapaian hasil assesmen di program IKM Development 2024",
    src: "",
  },
  {
    id: 7,
    title: "Pameran Link & Match 2024 Di Kementrian Perindustrian",
    src: "",
  },
];
