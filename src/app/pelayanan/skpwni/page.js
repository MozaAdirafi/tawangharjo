"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { CheckCircle } from 'lucide-react';

export default function SKPWNI() {
  const [activeTab, setActiveTab] = useState('reguler');

  const requirements = {
    reguler: [
      {
        title: "KTP asli dan fotokopi 1 lembar atas bawah tidak diporong",
        details: ["Dicari asli, dikirim foto copy"]
      },
      {
        title: "KK sebelum pindah",
        details: ["Scan asli, dikirim foto copy"]
      },
      {
        title: "Alamat tujuan jelas",
        details: [
          "Bisa melampirkan Surat Keterangan Pindah (SKPWNI)",
          "Dikeluarkan oleh Kecamatan asal"
        ]
      }
    ],
    online: [
      {
        title: "KTP asli dan fotokopi 1 lembar atas bawah tidak diporong",
        details: ["Dicari asli, dikirim foto copy"]
      },
      {
        title: "KK sebelum pindah",
        details: ["Scan asli, dikirim foto copy"]
      },
      {
        title: "Alamat tujuan jelas atau bisa melampirkan Surat Keterangan Pindah",
        details: [
          "SKPWNI dikeluarkan oleh Kecamatan asal"
        ]
      }
    ]
  };

  const procedures = {
    reguler: [
      "Pemohon datang di kecamatan",
      "Berkas-berkas persyaratan yang sudah lengkap diproses di Front Office kecamatan, kecamatan mencetak SKPWNI dan Biodata pemohon",
      "Berkas dibawa pemohon ke Disdukcapil, selanjutnya ambil nomor antrian",
      "Berkas permohonan discan dan diverifikasi di front office sesuai antrian",
      "Berkas yang sudah diverifikasi diteruskan validasi kepada pejabat yang menangani via sistem",
      "Jika disetujui, validator mengirim ke produksi via sistem untuk dicetak",
      "Petugas loket menyerahkan Surat Keterangan Pindah (SKPWNI) yang sudah ditandatangani kepada pemohon"
    ],
    online: [
      "Pemohon yang akan mendaftar online lewat android, agar menginstall aplikasi 'Telunjuk Sakti Disdukcapil Wonogiri' di Playstore",
      "Berkas asli discan dan dikirim sesuai petunjuk yang ada di aplikasi 'Telunjuk Sakti' atau lewat loket online desa/kelurahan/kecamatan",
      "Berkas permohonan dari pemohon dcopy rangkap 2 bendel",
      "Front Office (FO) kecamatan/dinas memverifikasi berkas pemohon secara online dan membubuhkan nomor SKPWNI",
      "Kasi yang membidangi atau petugas yang ditunjuk memvalidasi berkas pemohon lewat system",
      "Operator sub bagian produksi mencetak SKPWNI dan Biodata pemohon",
      "Kepala Bidang Dafduk atau Kasi yang ditunjuk menandatangani SKPWNI dan Biodata pemohon",
      "Petugas loket pengambilan dokumen dinas menyerahkan SKPWNI dan Biodata pemohon disertai dengan berkas permohonan dari pemohon sebagai arsip"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>SKPWNI - Desa Tawangharjo</title>
        <meta
          name="description"
          content="Informasi lengkap tentang SKPWNI di Desa Tawangharjo"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            SURAT KETERANGAN PINDAH WARGA NEGARA INDONESIA (SKPWNI)
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
              Prosedur Pelaksanaan {activeTab === 'online' ? 'Online' : 'Reguler'}
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