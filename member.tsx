<>
  {/* Coding By CodingNepal - codingnepalweb.com */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/*--======== CSS ======== */}
  <link rel="stylesheet" href="style.css" />
  <title>Animated Skills Bar</title>
  <h2>회원 정보를 입력 하세요</h2>
  회원 이름: <input type="text" id="fname" onchange="upperCase()" />
  <p>회원 별 진척도를 볼 수 있습니다.</p>
  <div className="container">
    <div className="skill-box">
      <span className="title">Trainer</span>
      <div className="skill-bar">
        <span className="skill-per trainer">
          <span className="tooltip">80%</span>
        </span>
      </div>
    </div>
  </div>
  <div id="myChart" style={{ width: "100%", maxWidth: 600, height: 500 }} />
</>
