import Head from 'next/head'
import style from '../styles/Home.module.css'
import { Calculator } from '../components/Calculator'

// 1. ページの表示内容
export default function Page() {
  return (
    <>
      <Head>
        <title>電卓アプリ</title>
        <meta name="description" content="簡易計算用の電卓アプリケーションです" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/calc_icon.jpeg" />
      </Head>
      
      <main className={style.main}>
        <div>
          <h1 className={style.title}>電卓アプリ</h1>
        </div>
        <Calculator />
      </main>
      差分
    </>
  )
}