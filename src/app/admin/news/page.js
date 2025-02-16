"use client";

import { useState, useEffect } from 'react';
import { db, auth } from '../../../../config/firebase';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  updateDoc
} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { AuthCheck } from '../../../components/AuthCheck';
import { Calendar, User, ChevronRight, Trash2, Edit } from "lucide-react";
import Link from "next/link";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    excerpt: '',
    content: '',
    image: '',
    date: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [user] = useAuthState(auth);
  const router = useRouter();

  // Fetch news from Firestore
  useEffect(() => {
    if (!user) {
      router.push('/admin/login');
      return;
    }

    const q = query(collection(db, 'news'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNews(newsData);
    });

    return unsubscribe;
  }, [user, router]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or Update News
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert('Judul dan Konten wajib diisi!');
      return;
    }

    try {
      if (editMode) {
        // Update existing news
        const docRef = doc(db, 'news', formData.id);
        await updateDoc(docRef, {
          ...formData,
          updatedAt: new Date(),
          date: new Date().toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        });
        setEditMode(false);
      } else {
        // Add new news and then add its ID
        const docRef = await addDoc(collection(db, 'news'), {
          ...formData,
          createdAt: new Date(),
          date: new Date().toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        });
        // Update document to add the ID
        await updateDoc(doc(db, 'news', docRef.id), {
          id: docRef.id
        });
      }

      // Reset form
      setFormData({
        id: '',
        title: '',
        author: '',
        excerpt: '',
        content: '',
        image: '',
        date: ''
      });
    } catch (error) {
      console.error('Error saving news:', error);
      alert('Gagal menyimpan berita.');
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus berita ini?')) {
      try {
        await deleteDoc(doc(db, 'news', id));
      } catch (error) {
        console.error('Error deleting news:', error);
        alert('Gagal menghapus berita.');
      }
    }
  };

  // Populate form for editing
  const handleEdit = (item) => {
    setFormData(item);
    setEditMode(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AuthCheck fallback={<div>Please log in to access this page.</div>}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Berita Terbaru</h1>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Informasi terkini seputar Desa Tawangharjo</p>
          </div>

          {/* Form to Add/Edit News */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">{editMode ? 'Edit Berita' : 'Tambah Berita Baru'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Judul"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="author"
                placeholder="Penulis"
                value={formData.author}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="excerpt"
                placeholder="Ringkasan"
                value={formData.excerpt}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name="content"
                placeholder="Konten berita"
                value={formData.content}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></textarea>
              <input
                type="text"
                name="image"
                placeholder="URL Gambar"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className={`w-full ${editMode ? 'bg-blue-600' : 'bg-green-600'} text-white py-2 rounded hover:opacity-90`}
              >
                {editMode ? 'Update Berita' : 'Tambahkan Berita'}
              </button>
            </form>
          </div>

          {/* Display News */}
          <div className="space-y-6">
            {news.length > 0 ? (
              news.map((item) => (
                <Card key={item.id}>
                  <div className="md:flex group">
                    <div className="md:w-1/3 lg:w-1/4 overflow-hidden">
                      <img
                        src={item.image || 'https://via.placeholder.com/400'}
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
                          {item.author || 'Anonim'}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-green-600" />
                          {item.date}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.excerpt || 'Tidak ada ringkasan tersedia.'}
                      </p>
                      <Link
                        href={`/news/${item.id}`}
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors group"
                      >
                        Baca Selengkapnya
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button
                        onClick={() => handleEdit(item)}
                        className="ml-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
                      >
                        Edit <Edit className="h-4 w-4 ml-1" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="ml-4 inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors group"
                      >
                        Hapus <Trash2 className="h-4 w-4 ml-1" />
                      </button>
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
    </AuthCheck>
  );
}
