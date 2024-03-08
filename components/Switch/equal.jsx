import style from './Switch.module.css';

export function Equal(props) {
  // クリックでdisplayの文字列を計算して出力
  const handleClick = () => {
    try {
      var answerTemp = ""
      if (props.display) {
        answerTemp = eval(props.display).toLocaleString()
      }

      props.setAnswer(answerTemp)
    } catch (e){
      alert(`計算式が不正です。計算式を修正してください。\n${e}`);
    }
  };

  return (
    <button className={`${style.btn} ${style.equal}`} onClick={handleClick}>=</button>
  );
}