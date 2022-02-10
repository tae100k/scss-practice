import "./App.scss";

function App() {
  return (
    <div className="App">
      <h2>1. 변수 사용 </h2>
      <div className="redDiv">RedDiv</div>
      <h2>2. nesting 사용 </h2>
      <div className="container">
        <h4>h4태그입니다.</h4>
        <h3>h3태그입니다.</h3>
      </div>
      <h2>3. extend 사용</h2>
      <div className="lightAlert">
        <p>3. @extend 라이트 알림창</p>
      </div>
      <div className="darkAlert">
        <p>3. @extend 다크 알림창</p>
      </div>
      <h2>4. @mixin, @include사용</h2>

      <p className="test">4. mixin으로 취소선 삽입</p>
    </div>
  );
}

export default App;
