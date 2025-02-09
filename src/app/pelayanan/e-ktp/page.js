"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { CheckCircle } from 'lucide-react';

export default function EKTP() {
  const [activeTab, setActiveTab] = useState('reguler');

  const requirements = {
    general: [
      'Warga Negara Indonesia',
      'Berusia 17 tahun atau sudah/pernah menikah untuk usia di bawah 17 tahun (permohonan baru)'
    ],
    documents: [
      'Surat Pengantar dari RT/RW setempat',
      'Fotokopi Kartu Keluarga (KK)',
      'Pas foto berwarna ukuran 3x4 (2 lembar)',
      'Formulir F-1.21 yang telah diisi dan ditandatangani',
      'KTP lama asli (untuk perpanjangan)',
      'Surat Keterangan Kehilangan dari Kepolisian (jika KTP hilang)'
    ]
  };

  const procedures = {
    reguler: [
      'Pemohon datang ke kantor kecamatan',
      'Melakukan perekaman data E-KTP',
      'Petugas memproses berkas persyaratan yang sudah lengkap',
      'Setelah mendapat persetujuan dari pusat melalui sistem, kecamatan mencetak E-KTP',
      'E-KTP diserahkan kepada pemohon'
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
      'Petugas Front Office kecamatan memverifikasi berkas pemohon',
      'Operator SIAK kecamatan mencetak E-KTP',
      'Pemohon dapat mengambil E-KTP yang sudah jadi di loket pengambilan dokumen kecamatan'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Layanan E-KTP - Desa Tawangharjo</title>
        <meta
          name="description"
          content="Informasi lengkap tentang pembuatan dan pengurusan E-KTP di Desa Tawangharjo"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Layanan E-KTP</h1>
          <p className="text-xl text-center text-green-100">
            Informasi lengkap tentang prosedur dan persyaratan pengurusan E-KTP
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Persyaratan Pembuatan KTP</h2>
            
            {/* Syarat Umum */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Syarat Umum</h3>
              <ul className="space-y-4">
                {requirements.general.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                    <span className="ml-4 text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dokumen yang Diperlukan */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Dokumen yang Diperlukan</h3>
              <ul className="space-y-4">
                {requirements.documents.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                    <span className="ml-4 text-gray-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Prosedur Pelaksanaan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Prosedur Pembuatan E-KTP: Pelayanan {activeTab === 'online' ? 'Online' : 'Reguler (Langsung)'}
            </h2>
            <ol className="space-y-4">
              {procedures[activeTab].map((proc, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <div className="ml-4">
                    <span className="text-gray-600">
                      {typeof proc === 'string' ? proc : proc.text}
                    </span>
                    {proc.subItems && (
                      <ul className="mt-2 ml-4 space-y-2">
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
            
            {activeTab === 'online' && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Catatan:</span> Untuk pelayanan online khusus penggantian E-KTP yang hilang, pemohon tetap harus melakukan perekaman data di kecamatan jika diperlukan.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}