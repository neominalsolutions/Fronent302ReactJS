import React from 'react';
// ana paket react ile geliştirme yapmak için temel yapıları barındıran paket
import ReactDOM from 'react-dom';
// html doma işlemleri yapan paket
import './index.css';
import App from './App';
import Test from './test' 
// eğer importtan sonraki bir component ismini küçük harf ile başlatırsak react bu component bir bir html tag olarak sanır ve sayfaya basamaz. React componentleri büyük harf ile başlamalıdır. yan dizindeki js uzantılı dosyaları küçük harf ile yazmamızda bir sakınca yok bunun ile karıştırmayalım.
// import tan sonra gelen değer alias takma isim demek yani bu Test.js componentini nasıl bir isim ile sayfaya çağıracağımız demek.
// import ile başka bir js dosyasına erişebilir.
import reportWebVitals from './reportWebVitals';
import Button from './Button';
import Todo from './Todo';


// sayfa ilk açıldığında uygulamayı app elementten çalıştırır.
// index html root içerisine app elementindeki kodları render eder.
// uygulamanın ilk çalıştığı sayfa index.js index.js ise uygulama açılınca reactjs uygulamanın app denilen bir componente yönlendirir.

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* uygulama bu sefer App.js değilde Test.js ile çalışsın */}
    {/* <Test title={'Başlık'} body={'İçerik'} ></Test> */}
    <Todo></Todo>
  </React.StrictMode>,
  document.getElementById('root')
);

// props değerlerini doldurarak componente başlağıç değeri tanımlasını yapmış olduk.
// props ise farklı vasyonlarda bir component oluşturabilir. Button componenti açtık diyelim bu componente gönderdiğim color props ile farklı renklerde farklı stiller ekranda görünmesini sağlayabilirim.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
