import React, {Fragment} from 'react';
import './text.css'
import Button from './Button.js';
// css dosyalarını da yukarıdaki şekilde uygulama tanıtırız.

// uygulama içerisinde bir sayfayı göstermek için bir function component açtık
// 2 çeşit componet yazımı var
// 1. class component 2.function component
// class component desteği son versiyon ile kalktı bu sebeple function component üzerinden devam edicez.


// function componentlerde kendi içinde yazım şekline göre 2 ye ayrılır 1. default function component diğeri arrow function component
// function component yazma şekli
// rfce
const styles = {
    color:'red',
    backgroundColor:'yellow',
};

// styles function dışına değişken olarak tanımlayı aşağıda style attribute bağladık.

function Test({title,body}) {

    // {title,body} dışarıdan gelen bu değereler props yani componentin peropety'si özelliği diyoruz.
    // bir componente dışarıdan değer gönderilecek ise bu gönderilecek değerler için props kavramını kullanıyoruz.
    // eğer bir component içerisinde bir state durum değişikliği yapacak ise bu durumda ise state kavramını kullanacağız.

    return <>
        <h1 className="title">{title}</h1>
        <p style={{textAlign:'center', backgroundColor:'red'}}>{body}</p>
        <p style={styles}>{body}</p>
        <Button title={'Button1'} color={'red'} />
        <Button title={'Button2'} color={'green'} />
        <Button title={'Button3'} color={'blue'} />
    </>;
}


{/* <div id="myDiv" style="background-color":"red"></div> */}

// reactjs uygulamalarında style işlemleri JS üzerindne çalışır. yukarıdaki gibi css ile stil değiştirmek mümkün değildir.
// document.getElementById("myDiv").style.backgroundColor = "red";

// <></> ile <Fragment> </Fragment> reactjs de aynıdır.
// Fragment ile bir jsx dosyasında elementi kapsaya biliriz. ekrana ekstra bir html element açmaz ama fragment içerisindeki html elementlerine stil uygulayamayız. div ise div içerisindeki elementleri hep kapsayı hemde stil uygulayıcı bir özellik sağlar.

export default Test;

//rafc arrow function component yazım şekli

// import React from 'react';

// export const Test = () => {
//   return <div></div>;
// };

// arrow function direk olarak export ile yazılır, default function ise export default functiondan sonra yazılır. ikiside aynı şey yapar.
// return ifadesi ile DOM'a basılıp ekranda işlenecek olan html döndürülmüş olur. o yüzden function componentlerde return render anlamına gelir. (Render) html dom'a elementi append et demek oluyor.

// bir component başka bir js dosyasında çağırılacak ise export default ile işaretlenmelidir. Bu sayede başka bir js dosyasında import edilebilir.
// import sayafaya çağır
// export sayfada çağırmak için dışarı çıkar.

//rcc class component çağırma
// import React, { Component } from 'react';

// export default class Test extends Component {
//   render() {
//     return <div></div>;
//   }
// }

// class component'de bir dinamik html dosyasının Dom'a basılması için render methodu kullanır. function componentler bunu return ile yapar.

// export default Test;

