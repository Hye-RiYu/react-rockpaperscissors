import { useState } from 'react';
import Box from './component/Box';
import './App.css';

// 1. 박스 2개(타이틀,사진,결과값)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭 한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3,4번의 결과를 가지고 누가 이겼는지 결과를 보여준다
// 6. 승패결과에 따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강, 비기면-검정)

const choice = {
  rock : {
    name : "Rock",
    img : "https://thumb.silhouette-ac.com/t/69/69ffced83032519ca680dc3058b9ca26_t.jpeg"
  },
  scissors : {
    name : "Scissors",
    img : "https://thumb.silhouette-ac.com/t/a7/a7c3020b4cfb4fd154c4fcfd62702df2_t.jpeg"
  },
  paper : {
    name : "Paper",
    img : "https://thumb.silhouette-ac.com/t/ac/ace4c56ba1582e3a3c6ed4a3b20ec7a9_t.jpeg"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  }
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} />
        <Box title="Computer" />
      </div>
      <div className='game-button'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
