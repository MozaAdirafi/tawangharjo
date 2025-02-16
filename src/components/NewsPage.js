"use client";

import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase"; // Adjust path if needed
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Calendar, User, ChevronRight } from "lucide-react";
import Link from "next/link";

// Shared styled card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const NewsPage = () => {
  const [news, setNews] = useState([]);

  // Fetch news from Firestore
  useEffect(() => {
    const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNews(newsData);
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Berita Terbaru</h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Informasi terkini seputar Desa Tawangharjo
          </p>
        </div>

        {/* Enhanced News Grid */}
        <div className="space-y-6">
          {news.length > 0 ? (
            news.map((item) => (
              <Card key={item.id}>
                <div className="md:flex group">
                  <div className="md:w-1/3 lg:w-1/4 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.png"}
                      alt={item.title}
                      className="h-64 md:h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-2/3 lg:w-3/4 p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h2>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-green-600" />
                        {item.author || "Anonim"}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-green-600" />
                        {item.date || "Tanggal tidak tersedia"}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.excerpt || "Ringkasan tidak tersedia."}
                    </p>
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors group"
                    >
                      Baca Selengkapnya
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center text-gray-500">Belum ada berita yang tersedia.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
