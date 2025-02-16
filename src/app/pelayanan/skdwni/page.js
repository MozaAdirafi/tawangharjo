"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { CheckCircle } from 'lucide-react';

export default function SKDWNI() {
  const [activeTab, setActiveTab] = useState('reguler');

  const requirements = {
    reguler: [
      {
        title: "Surat Keterangan Pindah (SKPWNI) dari Disdukcapil Asal",
        details: ["Dokumen asli"]
      },
      {
        title: "Biodata yang dikeluarkan Kabupaten/Kota Asal",
        details: [
          "Pastikan data terbaru, lengkap dan benar atau bisa diganti fotocopy KK terakhir dari daerah asal. Lembar asli (asli, putih)",
          "Jika masih ada data yang perlu diperbaiki"
        ]
      },
      {
        title: "Fotocopy surat nikah",
        details: ["Bagi yang sudah menikah, data harus sesuai atau sama lain"]
      },
      {
        title: "Berkas permohonan",
        details: ["Dcopy rangkap 2 bendel"]
      }
    ],
    online: [
      {
        title: "Surat Keterangan Pindah (SKPWNI) dari Disdukcapil Asal",
        details: ["Dokumen asli"]
      },
      {
        title: "Biodata yang dikeluarkan",
        details: [
          "Kabupaten/Kota Asal. Pastikan data terbaru, lengkap dan benar atau bisa diganti fotocopy KK terakhir dari daerah asal",
          "Lembar asli (asli, putih) jika ada data yang perlu diperbaiki"
        ]
      },
      {
        title: "Fotocopy surat nikah",
        details: ["Bagi yang sudah menikah, data harus sesuai atau sama lain"]
      },
      {
        title: "Berkas permohonan",
        details: ["Dcopy rangkap 2 bendel"]
      }
    ]
  };

  const procedures = {
    reguler: [
      "Pemohon datang ke Disdukcapil ambil nomor antrian",
      "Berkas berkas persyaratan discan dan diverifikasi Front Office dinas sesuai nomor antrian",
      "Berkas yang sudah diverifikasi diteruskan validasi kepada pejabat yang berwenang",
      "Jika disetujui, dikirim ke bagian produksi via sistem untuk dicetak SKDWNI, selanjutnya diserahkan KK jika sudah penekanan sekaligus diterbitkan KTPelnya",
      "Petugas loket pengambilan dokumen menyerahkan SKDWNI, KK dan KTP kepada pemohon"
    ],
    online: [
      "Pemohon yang akan mendaftar online lewat android, agar menginstall aplikasi 'Telunjuk Sakti Disdukcapil Wonogiri' di Playstore",
      "Berkas asli discan dan dikirim sesuai petunjuk yang ada di aplikasi 'Telunjuk Sakti' atau lewat loket online desa/kelurahan/kecamatan",
      "Front Office (FO) dinas memverifikasi berkas permohonan secara online",
      "Kasi yang membidangi atau petugas yang ditunjuk memvalidasi berkas pemohon lewat system",
      "Surat Pindah datang dicetak di bagian produksi dinas, ditandatangani oleh Kepala Bidang yang membidangi atas nama Kepala Dinas Kependudukan dan Pencatatan Sipil",
      "KTP-el atau SUKET dicetak di bagian produksi dinas",
      "Draft KK divalidasi oleh pejabat Disdukcapil yang ditunjuk dan dilakukan Tanda Tangan Elektronik ke Kepala Disdukcapil melalui system tertutup",
      "Kepala Dinas melakukan Tanda Tangan Elektronik (TTE) pada KK yang diajukan",
      "Tanda Tangan Elektronik pada KK dikirim melalui SIAK ke BSrE (Badan Siber dan Sandi Negara) untuk mendapatkan persetujuan"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>SKDWNI - Desa Tawangharjo</title>
        <meta
          name="description"
          content="Informasi lengkap tentang SKDWNI di Desa Tawangharjo"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            SURAT KETERANGAN PERSETUJUAN PINDAH DATANG WARGA NEGARA INDONESIA (SKDWNI)
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveTab('reguler')}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'reguler'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Reguler
            </button>
            <button
              onClick={() => setActiveTab('online')}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'online'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Online
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Persyaratan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Persyaratan</h2>
            <ul className="space-y-6">
              {requirements[activeTab].map((req, index) => (
                <li key={index} className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                    <span className="ml-4 text-gray-600 font-medium">{req.title}</span>
                  </div>
                  <ul className="ml-10 space-y-1">
                    {req.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-600 list-disc ml-4">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Prosedur Pelaksanaan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Prosedur Pelaksanaan: {activeTab === 'online' ? 'Online' : 'Reguler'}
            </h2>
            <ol className="space-y-4">
              {procedures[activeTab].map((proc, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <div className="ml-4 space-y-2">
                    <span className="text-gray-600">{proc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}