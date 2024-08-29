import React from 'react';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function KarateLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">空手道場</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#classes" className="text-gray-600 hover:text-gray-800">Classes</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative h-[600px]">
          <Image
            src="/api/placeholder/1200/600" // プレースホルダー画像を使用
            alt="空手道場の様子"
            fill
            style={{objectFit: "cover"}}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">心身を鍛える空手の世界へようこそ</h2>
              <p className="text-xl mb-8">伝統と現代の技を学び、強さと精神性を磨く</p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300">
                無料体験を予約する <ArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">空手道について</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">伝統と革新</h3>
                <p className="text-gray-600">
                  私たちの道場では、古来の空手の伝統を大切にしながら、現代的なトレーニング方法を取り入れています。
                  心技体のバランスの取れた成長を目指し、生徒一人一人の可能性を最大限に引き出します。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">全ての年齢層に対応</h3>
                <p className="text-gray-600">
                  子供から大人まで、初心者からベテランまで、それぞれのレベルに合わせたクラスを用意しています。
                  空手を通じて、自信、規律、そして生涯の友人を得ることができます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="classes" className="bg-gray-200 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">クラス紹介</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['子供クラス', '一般クラス', '上級者クラス'].map((className, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={`/api/placeholder/400/300`} // プレースホルダー画像を使用
                      alt={`${className}の様子`}
                      fill
                      style={{objectFit: "cover"}}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{className}</h3>
                  <p className="text-gray-600 mb-4">
                    {index === 0 && '5歳から12歳までの子供たちを対象に、楽しみながら基本的な技と礼儀を学びます。'}
                    {index === 1 && '13歳以上を対象に、基本から応用まで幅広く学べる総合的なクラスです。'}
                    {index === 2 && '茶帯以上の経験者を対象に、高度な技と戦略を学ぶクラスです。'}
                  </p>
                  <p className="font-semibold">
                    {index === 0 && '火曜・木曜 16:00-17:30'}
                    {index === 1 && '月曜・水曜・金曜 19:00-21:00'}
                    {index === 2 && '土曜 10:00-12:00'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">お問い合わせ</h2>
            <div className="max-w-lg mx-auto">
              <div className="flex items-center mb-4">
                <Mail className="mr-4 text-gray-600" />
                <p>info@karate-dojo.com</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="mr-4 text-gray-600" />
                <p>03-1234-5678</p>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4 text-gray-600" />
                <p>〒100-0001 東京都千代田区1-1-1</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 空手道場. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}