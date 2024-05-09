// built-in component : html 의 기본 요소, 소문자로 시작
// component : 직접만든 요소(태그), 대문자로 시작

// component 는 return을 가진 함수

function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 -> fragment 사용

  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Apreiam, distinctio,nemo</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개임
  // <div></div> 로 감싸주면 괜찮

  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Cupiditate, voluptatem?</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러 줄일 때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Est, quos?</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
