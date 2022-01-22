import logo from './logo.svg';
import './App.css';
// eğer uygulamaya yani componente bir css eklemek istersek yukarıdaki gibi bir import ile css yolunu gösteririz.


// react dinamik olarak html dosyasını değiştirdiği için jsx adında html çok benzeyen bir yapı ile çalışır

function App() {

  const deneme  = 'Test';

//   const template = $`<div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       ${deneme}
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>`

// yukarıdaki yazım yerine direk html'le dinamik olarak çekilen bir veri {} interpolation ifadesi ile bağlanabilir. jsx bize dinamik html çıktısı üretmek için facebook tarafından geliştirilmiştir. Çıktı html dönüşeceğinden dolayı return ifadesi ile render edilir. yani Doma basılır.

// jsx dosyasında class yazamıyoruz onun yerine className kullanıyoruz.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {deneme}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  // aşağıdaki çıktıyı html olarak sayfaya render eder.
//   ` <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Test
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>`
}

export default App;
