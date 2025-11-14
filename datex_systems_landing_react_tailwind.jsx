import React from 'react';
import { motion } from 'framer-motion';

export default function DatexSystems() {
  const products = [
    { title: 'Серверные решения', desc: 'Надёжные серверы и системы хранения данных корпоративного уровня.', img: '/images/server.jpg' },
    { title: 'Сетевое оборудование', desc: 'Современные решения для построения быстрых и безопасных сетей.', img: '/images/network.jpg' },
    { title: 'Компьютеры и периферия', desc: 'Полный спектр ПК, мониторов и аксессуаров для бизнеса и геймеров.', img: '/images/pc.jpg' },
  ];

  const partners = [
    { name: 'ASUS', img: '/images/asus.png' },
    { name: 'MSI', img: '/images/msi.png' },
    { name: 'Gigabyte', img: '/images/gigabyte.png' },
    { name: 'Sony', img: '/images/sony.png' },
    { name: 'TP-Link', img: '/images/tplink.png' },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-gray-900">DatexSystems</h1>
          <nav className="hidden md:flex gap-6 text-gray-700">
            <a href="#products" className="hover:text-gray-900">Продукты</a>
            <a href="#partners" className="hover:text-gray-900">Партнёры</a>
            <a href="#contacts" className="hover:text-gray-900">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-grid.svg')] opacity-20 animate-pulse" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center max-w-3xl mx-auto p-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Технологии для будущего</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Инновационные IT-решения, оборудование и поддержка для бизнеса, образования и геймеров.</p>
          <button className="px-8 py-3 bg-gray-800 text-white rounded-2xl hover:bg-gray-700 transition">Подробнее</button>
        </motion.div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center mb-12">Наши продукты</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg bg-gray-50">
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-10">Наши партнёры</h3>
        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          {partners.map((p, i) => (
            <motion.img key={i} src={p.img} alt={p.name} className="h-16 grayscale hover:grayscale-0 transition" whileHover={{ scale: 1.1 }} />
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">Контакты</h3>
        <p className="text-gray-600 mb-4">📍 Ташкент, Узбекистан</p>
        <p className="text-gray-600 mb-4">📞 +998 (90) 123-45-67</p>
        <p className="text-gray-600 mb-4">✉️ info@datexsystems.uz</p>
        <p className="text-gray-600">Мы открыты для сотрудничества и новых проектов.</p>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-200 text-gray-700">
        © {new Date().getFullYear()} DatexSystems. Все права защищены.
      </footer>
    </div>
  );
}
