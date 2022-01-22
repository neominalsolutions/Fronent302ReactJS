import React, { useState } from 'react';

// bu yöntemde ise arrow function bir component açtık bu sefer props keyword ile içerisine değer alacağını söyledik.

const Button = (props) => {

    console.log('buton')

    // clickCount diye bir state değişkeni tanımladık ve defaut olarak initial yani ilk değerini 0 olarak atadık.
    // bu işlem için useState adında bir özellik kullandık.
    // biz bu tür react bazlı özelliklere hook ismini veriyoruz. useState hook bir component içerisindeki değişkenin değeriniş değiştirebilme ve değişen bu değerin jsx tarafından algılanmasını sağlar.
    const [clickCount,setClickCount] = useState(0);
    // component state değişiminde tekrar tekrar çalışıp render oluyor clickCount son güncel değerini ekrana basıyor.

    // set ile başlayan şeyler değişkene güncel değerini atar. setsiz yazılan değer ise değişkenin değerini okumamızı sağlar. 
    const { title,color }  = props;
    // propstan gelen değerleri title,color olarak içeride ayrı değişkenlere atadık.
    // REACTJS DE event binding işlemi
    // daha temiz anlaşı kod olması sebebi ile bu yöntemi tercih ederiz.
    const ClickMe = () => {
        alert('clicked');
        // yaptığım her işlemde clickMe fonksiyonu çalışır ve clickCount değerimi 1 fazlasını state set methodu ile atamasını yaparım.
        setClickCount(clickCount + 1);
    //   clickCount ++;
    }

    //let clickCount = 0; // buton tıklama sayısı değişkeni

    // buton içerisindeki bir değişkenin değerinin değişimini sağlamak için state denile bir kavramı kullanmalıyız. State demek component içerisindeki değişkenlerin değişimini algıla ve componentin değişen kısımlarını jsx dosyasına tanıt demek.

  return <>
    <p>Tıklama Sayıs: {clickCount}</p>
    {/* <button onClick={() => alert('butona tıklandı')} style={{color:color}}>{title}</button>   */}
    <button onClick={ClickMe} style={{color:color}}>{title}</button>  
  </>;
};

// reactjs de compont içerisinde bir event nasıl çalışıyor.

export default Button;

