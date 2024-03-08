'use client';
import { useState } from 'react';
import { Switch } from '../Switch';
import { Clear } from '../Switch/clear';
import { Delete } from '../Switch/delete';
import { Equal } from '../Switch/equal';
import style from './Calculator.module.css';

// ただ文字列を追加するだけのボタンはまとめる
const NUMBERS = ["(",")","%","1","2","3","4","5","6","7","8","9","0","."];
const SIGNS = ["+","×","-","÷"]

const realDisplay = (str) => {
  let real = str
  real = real.replace(/\*\*/g, '^');
  real = real.replace(/\*/g, '×');
  real = real.replace(/\//g, '÷');
  return real;
}


export function Calculator() {
  // 計算式表示state
  const [display, setDisplay] = useState("");
  // 答え出力state
  const [answer, setAnswer] = useState();


  return (
    <div className={style.container}>
      <p>計算式</p>
      <div className={style.calcWrapper}>
        {realDisplay(display)}
      </div>
      <p>答え</p>
      <div className={style.calcWrapper}>
        {answer}
      </div>
      <div className={style.deletePosition}>
        <Delete setDisplay={setDisplay} display={display} setAnswer={setAnswer}/>
      </div>
      <div className={style.btnDisplayWrapper}>
        <div className={style.numGrid}>
          {NUMBERS.map((number) => {
            return (
              <Switch num={number} display={display} setDisplay={setDisplay} key={number}/>
            );
          })}
          <Equal display={display} setAnswer={setAnswer}/>
        </div>
        <div className={style.signGrid}>
          {/* クリアボタン */}
          <Clear setDisplay={setDisplay} setAnswer={setAnswer}/>
          {/* 主に演算子類 */}
          {SIGNS.map((sign) => {
            return (
              <Switch num={sign} display={display} setDisplay={setDisplay} key={sign} type="sign"/>
            );
          })}
        </div>
      </div>
    </div>
  );
}