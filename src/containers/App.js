//prosty kontener, którego zadaniem jest utzrymanie stanu aplikacji/treści i opisanie co robi!

import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component {
	constructor(props){ // konstruktor klasy App
		super(props); // super to funkcja wbudowana , w niej przekazujemy argumenty dla konstruktora klasy rozszerzanej! 
		this.state = { // Funkcję tę wywołujemy tylko w konstruktorze!
			data: [] // ustawiam w konstruktorze stan początkowy aplikacji
		};
	}
	
	addTodo(val) { // metoda do dodawania nowych elementów do kolekcji
		const todo = {
			text: val,
			id: uuid.v4(), // Przy użyciu metody uuid.v4() tworzymy unikatową kombinację cyfr i liczb i przypisujemy ją do klucza id
		};
		//użycie zmiennej typu const ,aby mieć pewność ,że zmienna nie będzie nigdy nadpisywana
		const data = [...this.state.data, todo]; // Ten zabieg to sprytna konstrukcja, pełniąca rolę metody push
		this.setState({data});// data:data		 //	, ale działa bez modyfikowania stanu
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id); // metoda filter, dzięki niej tworzymy tablicę z odfiltrowanymi pewnymi elementami
		//  var remainder = this.state.data.filter(function(todo) {
    	//	return todo.id !== id;				---------- ES5 ---------- 
		//	});
		this.setState({data: remainder});
	}

	render() {  //metoda render wyświetli całą aplikację 
    return ( // użycie pierwszego loadera CSS
        <div className={style.TodoApp}> 
			<Title title = 'ToDo list App' tasks = 'Things to do'/>
		</div>
    );
}				  
}

export default App;