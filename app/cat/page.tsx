"use client";
import Head from 'next/head'
import React, { useState } from 'react';
import axios from 'axios';
import "./style.css";

// 1. ページの表示内容
export default function Page() {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchDogImage = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      const isVideo = response.data[0].url.split('.').pop() === 'mp4';
      if (!isVideo) {
        setImageUrl(response.data[0].url);
      }
    } catch (error) {
      alert('通信エラー');
    }
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>猫の画像</title>
        <meta name="description" content="猫の画像" />
      </Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css" />
      <section>
        <div className="hero-body">
          <div className='center-test'>
            <div className="title">
              ランダムで<br />猫の画像を取得します<br />
              <button className={`button is-danger is-outlined is-large ${isLoading ? 'is-loading' : ''}`}
                onClick={() => {fetchDogImage();}}
                style={{ marginTop: '10px' }}>
                画像取得
              </button>  
            </div>
            <div style={{ marginTop: '15px'}} id="result">
                {imageUrl && <img src={imageUrl} alt="猫画像" />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}