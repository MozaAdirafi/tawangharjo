"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { CheckCircle } from 'lucide-react';

export default function KartuIdentitasAnak() {
  const [activeTab, setActiveTab] = useState('reguler');

  const requirements = [
    {
      title: 'Kutipan Akta Kelahiran',
      details: [
        'Hasil pindai (scan) dokumen asli',
        'Fotokopi dokumen'
      ]
    },
    {
      title: 'Kartu Keluarga (KK)',
      details: [
        'Hasil pindai (scan) dokumen asli',
        'Fotokopi dokumen'
      ]
    },
    {
      title: 'Pas foto (untuk anak usia 5 tahun ke atas)',
      details: [
        '2 lembar foto berwarna ukuran 4x6',
        'Hasil pindai (scan) dalam format PDF (maksimal 9 MB)'
      ]
    }
  ];

  const procedures = {
    reguler: [
      'Pemohon datang ke kantor kecamatan',
      'Petugas kecamatan memverifikasi berkas',
      {
        text: 'Jika berkas lengkap dan benar, petugas kecamatan:',
        subItems: [
          'Memasukkan data ke sistem',
          'Melakukan registrasi KIA di SIAK'
        ]
      },
      'Petugas mencetak KIA dan menyerahkan kepada pemohon'
    ],
    online: [
      'Unduh dan pasang aplikasi "Telunjuk Sakti Disdukcapil Wonogiri" dari Play Store',
      {
        text: 'Pindai (scan) berkas asli dan kirim melalui:',
        subItems: [
          'Aplikasi "Telunjuk Sakti", atau',
          'Loket online desa/kelurahan/kecamatan'
        ]
      },
      {
        text: 'Petugas Front Office dinas/kecamatan memverifikasi berkas dan memasukkan data pemohon ke SIAK',
        subItems: []
      },
      {
        text: 'Operator SIAK kecamatan atau petugas yang ditunjuk:',
        subItems: [
          'Memasukkan data',
          'Melakukan registrasi KIA di SIAK'
        ]
      },
      'Operator SIAK kecamatan mencetak KIA',
      'Pemohon dapat mengambil KIA di loket pengambilan dokumen dengan menukarkan berkas permohonan sebagai arsip'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Layanan Kartu Identitas Anak (KIA) - Desa Tawangharjo</title>
        <meta
          name="description"
          content="Informasi lengkap tentang pembuatan Kartu Identitas Anak (KIA) di Desa Tawangharjo"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Layanan Kartu Identitas Anak (KIA)
          </h1>
          <p className="text-xl text-center text-green-100">
            Informasi lengkap tentang prosedur dan persyaratan pembuatan KIA
          </p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Persyaratan Pembuatan KIA
            </h2>
            <ul className="space-y-6">
              {requirements.map((req, index) => (
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
              Prosedur Pembuatan KIA :<br></br> {activeTab === 'online' ? 'Online' : 'Langsung (Reguler)'}
            </h2>
            <ol className="space-y-4">
              {procedures[activeTab].map((proc, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <div className="ml-4 space-y-2">
                    <span className="text-gray-600">
                      {typeof proc === 'string' ? proc : proc.text}
                    </span>
                    {proc.subItems && proc.subItems.length > 0 && (
                      <ul className="ml-4 space-y-1">
                        {proc.subItems.map((item, subIndex) => (
                          <li key={subIndex} className="text-gray-600 list-disc ml-4">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
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