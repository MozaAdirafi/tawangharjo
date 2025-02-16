"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '../../../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Shared styled card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const NewsDetailPage = () => {
  const { slug } = useParams();
  const [newsData, setNewsData] = useState(null);

  // Fetch news from Firestore
  useEffect(() => {
    const fetchNews = async () => {
      if (!slug) return;

      const docRef = doc(db, 'news', slug);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNewsData({ id: docSnap.id, ...docSnap.data() });
      } else {
        setNewsData(null);
      }
    };

    fetchNews();
  }, [slug]);

  if (!newsData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        <h2>Berita tidak ditemukan atau sedang dimuat...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link href="/" className="text-green-600 hover:text-green-700 transition-colors">
            Beranda
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/news" className="text-green-600 hover:text-green-700 transition-colors">
            Berita Terbaru
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 truncate max-w-md">{newsData.title}</span>
        </nav>

        {/* Enhanced Article Content */}
        <Card className="overflow-hidden">
          <div className="relative w-full aspect-video ">
            <img
              src={newsData.image || '/placeholder.png'}
              alt={newsData.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {newsData.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-green-600" />
                {newsData.author || 'Penulis Tidak Diketahui'}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-green-600" />
                {newsData.date || 'Tanggal Tidak Tersedia'}
              </div>
            </div>

            <div className="prose max-w-none">
              {newsData.content
                ? newsData.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
                      {paragraph.trim()}
                    </p>
                  ))
                : 'Konten berita tidak tersedia.'}
            </div>
          </div>
        </Card>

        {/* Enhanced Navigation */}
        <div className="mt-8">
          <Link 
            href="/news"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Berita Terbaru
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
