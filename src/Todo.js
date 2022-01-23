import React, { useState } from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';

function Todo() {

    // js işlemleri, değişkenler ve fonksiyonlar burada bulunur
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');
    const [isSelected, setIsSelected] = useState(false); // seçili olmadığında add ekleme butonu görüneceği için şuan false olarak state ayarladık.
    const [isSelectedId, setIsSelectedId] = useState(null); // sayfa ilk açıldığında seçili olan bir id olmadığı için değerini null olarak set ettik. edit işleminde seçili olan Id değeri elimizde olduğu için bu state güncelleyeceğiz. ve güncel seçili id değerini bildiğimiz için bu sefer update işleminde kullanabileceğiz.

    //listeye yeni bir item ekleyip state güncelleyeceğiz
    const addNewTodo = (todo) => {
        console.log('todo', todo);
        // todoText bir state bağladık artık butona click olunca güncel state elimizde var

        todo = todo.trim(); // sağdan soldan boşluk alır.
        let isExist = todos.find(x => x.name == todo);

        if (isExist) {
            alert('aynı değerden listede var')
        }
        else {

            if (todo != '') {
                const todoItem = {
                    id: todos.length + 1,
                    name: todo.trim()
                };

                const newTodos = [...todos, todoItem]; // spread operatör ile todo item todos state güncel olarak gönderdik. yani ekleyip gönderdik.
                // todos içerisindekilerin değerine alıp üzerine todoItem ekle sonra yeni dizinin değeri ile todosState güncelle. 
                setTodos([... newTodos]);
                setTodoText(''); // input texti state bağladık todoText böylece input value silinmiş oldu.
            }
            else {
                alert('boş girilemez');
            }
        }

    }

    // listeden bir item silecekğiz state güncelleyeceğiz.
    const deleteTodo = (id) => {

        const selectedTodo = todos.find(x => x.id == id);

        const result = window.confirm(`${selectedTodo.name} olan elemanı silmek istediğinize emin misiniz?`)

        if (result == true) {
            const notDeletedTodos = todos.filter(x => x.id != id);
            // silinecek olanı todos listesinden filtreledim. Elimde silinmeyenler kaldı
            setTodos([... notDeletedTodos]);
            // todos da silinen eleman state olmadığını nesne jsx üzerinden kaldırıldı.
        }

        setIsSelected(false); // silme işleminden sonra ekleme işlemine geri dönsün.
    }

    // düzenlenecek olan item bulup bunun name değerini inputa set edeceğiz
    // ilgili listedeki item'a tıklanınca bu işlemi yaparız.
    const editTodo = (id) => {
        const selectedTodo = todos.find(x => x.id == id);
        setTodoText(selectedTodo.name); // selectedTodoText seçilene göre güncelleriz.
        setIsSelected(true); // edit function içerisinde bir şey seçiliyor.
        setIsSelectedId(id); // seçili id değerini güncelledik.
    }

    // update edeceğimiz şeyi idsine göre bilmeliyiz ki todos listesinden bulup todoText inputuna yazılan değere göre name alanını güncelleyelim.
    const updateTodo = (id) => {
        const selectedTodo = todos.find(x => x.id == id);

        if (todoText.trim() != '') {
            selectedTodo.name = todoText;

            // todos state değiştirmemiz lazım.
            setTodos([...todos]); // todos nesnesi içerisindeki name alanını değiştirip jsx değişikliği algılasın diye setTodos state güncelledik.
            // update işlemlerinde jsx'in değirin değişmesiniş anlaması için setState yaparken state nesnemiz bir dizi ise [... sondeger] eğer güncellenecek olan şey bir obje ise {... sondeger} şeklinde setState kullanmalıyız.
            setIsSelected(false); // seçim yok
            setIsSelectedId(null); // seçili bir id yok
            setTodoText(''); // inputta boş
        }
        else {
            alert('güncellenecek değer boş geçilemez');
        }


    }

    const inputChange = (value) => {
        console.log('value', value);
        setTodoText(value); // todoText state değiştir.
    }

    // reactjs de input change keyup vari çalışır. Her bir değişimde tetiklenir.

    // jsx dosyası alanı
    return <Container className="bg-light p-5">

        <Row>
            <ListGroup>
                {
                    // bir component iki tane ClassName tanımlayamayacağımız için mecbur dinamik string oluşturarak className active verdik. Bunu yaparkende `` backticks ile className isSelectedId göre active class ekleme yapatık.
                    todos.map((item, key) => {
                        return <ListGroup.Item className={`d-flex justify-content-between ${isSelectedId == item.id ? 'active':''}  
                        `} key={key}>{item.id} - {item.name}

                        <div>
                            <Button className="me-2"  variant="success" onClick={() => editTodo(item.id)}>Seç</Button>

                            <Button className="me-2" variant="danger" onClick={() => deleteTodo(item.id)}>Sil</Button>
                        </div>

                        </ListGroup.Item>
                    })
                }

            </ListGroup>
        </Row >
        <Row className="justify-content-md-center align-items-end">

            <Col md={8}>
                <Form.Label>Todo Name</Form.Label>
                <Form.Control type="text" value={todoText} onChange={(event) => inputChange(event.target.value)} />
            </Col>
            <Col md={4}>
                {
                    isSelected == false ?
                        <Button variant="primary" onClick={() => addNewTodo(todoText)}>Ekleme işlemi</Button>
                        :
                        <Button variant="secondary" onClick={() => updateTodo(isSelectedId)}>Güncelleme işlemi</Button>
                }
            </Col>
        </Row>
    </Container >
}

// todos state dönmek için map kullanıyoruz. foreach veya $.each yerine jsx dosyasında map kullanılıyor. key demek index anlamına gelir. item ise objenin kendisi anlamına gelir. return ile her bir li sayfada render ettik.
// sayafaya map kullanılarak render edilen her bir item için key kullanarak her bir item index değerini tanımlamalıyız. 


export default Todo;
