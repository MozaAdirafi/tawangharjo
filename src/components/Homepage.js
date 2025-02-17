"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  Search,
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
  Cloud,
  CloudRain,
  Sun,
  CloudSun,
  Wind,
  Droplets,
  Thermometer,
} from "lucide-react";
import Link from "next/link";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";

const HomePage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  console.log(error)
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Replace with your actual API key
        const apiKey = "zxccmHzebpIyuo3Lf3PJgSvaeXb0LfSd";
        // You can adjust these coordinates for Desa Tawangharjo
        const location = "tawangharjo"; // Example coordinates

        const response = await fetch(
          `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Weather data fetch failed");
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNews(newsData);
    });

    return () => unsubscribe();
  }, []);

  const services = [
    {
      name: "Kartu Keluarga",
      path: "/pelayanan/kartukeluarga",
      description: "Informasi dan layanan kartu keluarga untuk warga desa",
      icon: <User className="w-8 h-8 text-green-600" />,
    },
    {
      name: "E-KTP",
      path: "/pelayanan/e-ktp",
      description: "Informasi dan layanan e-ktp untuk warga desa",
      icon: <Calendar className="w-8 h-8 text-green-600" />,
    },
    {
      name: "KIA",
      path: "/pelayanan/kia",
      description: "Informasi dan layanan kia untuk warga desa",
      icon: <User className="w-8 h-8 text-green-600" />,
    },
    {
      name: "Akte Kelahiran",
      path: "/pelayanan/aktekelahiran",
      description: "Informasi dan layanan akte kelahiran untuk warga desa",
      icon: <Calendar className="w-8 h-8 text-green-600" />,
    },
  ];

  const stats = [
    { label: "Hektar", value: "542.89" },
    { label: "Lintang Selatan", value: "-8.000240" },
    { label: "Bujur Timur", value: "110.892245" },
    { label: "Luas", value: "93,07 km²" },
  ];

  const getWeatherIcon = (code) => {
    // Tomorrow.io weather codes mapping
    const weatherCodes = {
      1000: <Sun className="w-12 h-12 text-yellow-500" />, // Clear
      1100: <CloudSun className="w-12 h-12 text-gray-500" />, // Mostly Clear
      1101: <CloudSun className="w-12 h-12 text-gray-500" />, // Partly Cloudy
      1102: <Cloud className="w-12 h-12 text-gray-600" />, // Mostly Cloudy
      1001: <Cloud className="w-12 h-12 text-gray-700" />, // Cloudy
      4000: <CloudRain className="w-12 h-12 text-blue-500" />, // Rain
      // Add more weather codes as needed
    };
    return weatherCodes[code] || <Cloud className="w-12 h-12 text-gray-500" />;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Enhanced Parallax */}
      <section className="relative h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Mainpage_Background.jpeg"
            alt="Desa Tawangharjo"
            className="w-full h-full object-cover opacity-50 transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Selamat Datang di
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                Desa Tawangharjo
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 font-light">
              Desa Tawangharjo Yang Maju dan Mandiri, Go Nyawiji Sesarengan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/news">
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-lg hover:shadow-green-500/30 transition transform hover:-translate-y-1 font-medium">
                  Jelajahi Desa
                </button>
              </Link>
              <Link href="#layanan">
                <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white/20 transition transform hover:-translate-y-1 font-medium">
                  Layanan Publik
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Enhanced Stats Section */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center text-white group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced News Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-3 text-gray-800">
                Berita Terbaru
              </h2>
              <p className="text-gray-600 text-lg">
                Informasi terkini seputar Desa Tawangharjo
              </p>
            </div>
            <Link
              href="/news"
              className="group flex items-center gap-3 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-xl"
            >
              Lihat Semua
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-52">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-sm text-white gap-3">
                      <div className="flex items-center bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2 h-14 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="truncate">{item.author}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        id="layanan"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Layanan Desa
            </h2>
            <p className="text-gray-600 text-lg">
              Akses berbagai layanan publik dengan mudah dan cepat
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link key={service.name} href={service.path}>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-500 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                    Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-3 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Weather Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
              Prakiraan Cuaca Desa Tawangharjo
            </h2>

            {loading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500 mx-auto"></div>
                <p className="mt-6 text-gray-600 text-lg">
                  Memuat data cuaca...
                </p>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <div className="bg-red-50 rounded-2xl p-8 max-w-md mx-auto">
                  <p className="text-red-600">
                    Gagal memuat data cuaca. Silakan coba lagi nanti.
                  </p>
                </div>
              </div>
            )}

            {weatherData && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {weatherData.timelines.daily.slice(0, 4).map((day, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center">
                      <h3 className="text-lg font-semibold mb-6">
                        {formatDate(day.time)}
                      </h3>
                      <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
                        {getWeatherIcon(day.values.weatherCode)}
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-4 text-gray-800">
                          {Math.round(day.values.temperatureAvg)}°C
                        </div>
                        <div className="flex items-center justify-center gap-6 text-gray-600">
                          <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                            <Droplets className="w-5 h-5 mr-2 text-blue-500" />
                            <span>{Math.round(day.values.humidityAvg)}%</span>
                          </div>
                          <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                            <Wind className="w-5 h-5 mr-2 text-gray-500" />
                            <span>
                              {Math.round(day.values.windSpeedAvg)} km/h
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 text-center text-sm text-gray-500">
              <p>Data cuaca diperbarui setiap jam</p>
              <p className="mt-2 font-medium">Powered by Tomorrow.io</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
