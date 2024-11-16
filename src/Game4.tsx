import { useState } from "react";
import { Link } from "react-router-dom"; // 用於導航
import "./Game.css";

const scenes = [
  {
    id: 1,
    text: "有一天，烏鴉在飛行時發現了一個瓶子，瓶子裡有一些水，但水位很低，烏鴉喝不到。你是烏鴉，現在你會怎麼做？",
    options: [
      { text: "試圖直接喝水", nextSceneId: 2 },
      { text: "尋找附近的小石子", nextSceneId: 3 },
      { text: "放棄並繼續飛行", nextSceneId: 4 },
    ],
  },
  {
    id: 2,
    text: "你試圖直接把嘴伸進瓶子裡，但瓶口太窄，根本喝不到水。",
    options: [
      { text: "繼續嘗試", nextSceneId: 5 },
      { text: "尋找附近的小石子", nextSceneId: 3 },
    ],
  },
  {
    id: 3,
    text: "你在附近找到了一些小石子，決定把它們丟進瓶子裡，看看水位是否會上升。",
    options: [
      { text: "開始丟石子進瓶子", nextSceneId: 6 },
      { text: "放棄這個方法，試圖直接喝水", nextSceneId: 2 },
    ],
  },
  {
    id: 4,
    text: "你選擇放棄並繼續飛行，但很快你感到口渴，發現自己需要找到其他水源。",
    options: [
      { text: "回到瓶子那裡", nextSceneId: 1 },
      { text: "繼續飛行，尋找其他水源", nextSceneId: 7 },
    ],
  },
  {
    id: 5,
    text: "你反覆嘗試，但還是無法喝到瓶子裡的水。這讓你感到沮喪。",
    options: [
      { text: "放棄並飛走", nextSceneId: 4 },
      { text: "尋找其他方法", nextSceneId: 3 },
    ],
  },
  {
    id: 6,
    text: "你開始把小石子丟進瓶子裡。隨著石子的增加，水位逐漸上升，終於到達瓶口。",
    options: [
      { text: "成功喝到水！", nextSceneId: 8 },
      { text: "繼續丟更多石子", nextSceneId: 9 },
    ],
  },
  {
    id: 7,
    text: "你繼續飛行，但森林裡很難找到其他水源，最後你感到筋疲力盡。",
    options: [
      { text: "返回瓶子所在地", nextSceneId: 1 },
      { text: "停下來休息", nextSceneId: 10 },
    ],
  },
  {
    id: 8,
    text: "你成功喝到了水，解決了口渴的問題！這次經歷讓你明白了智慧的重要性。",
    options: [],
  },
  {
    id: 9,
    text: "你繼續丟更多石子，但水位已經足夠高，你成功喝到了水，並滿足地離開了瓶子。",
    options: [],
  },
  {
    id: 10,
    text: "你停下來休息，但仍然口渴，最後無法繼續飛行，只能停在樹枝上等待幫助。",
    options: [],
  },
];

const Game4 = () => {
  const [currentSceneId, setCurrentSceneId] = useState(1);

  const currentScene = scenes.find((scene) => scene.id === currentSceneId);

  const handleOptionClick = (nextSceneId) => {
    if (!nextSceneId) {
      alert("故事結束，感謝遊玩！");
    } else {
      setCurrentSceneId(nextSceneId);
    }
  };

  return (
    <div className="game">
      {/* 返回首頁按鈕 */}
      <div className="back-home">
        <Link to="/" className="back-button">
          回首頁
        </Link>
      </div>
      {currentScene ? (
        <div className="scene">
          <p>{currentScene.text}</p>
          <div className="options">
            {currentScene.options.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option.nextSceneId)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>感謝遊玩！</div>
      )}
    </div>
  );
};

export default Game4;
