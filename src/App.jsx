import React from "react"
import Form from "./form"
import TodoList from "./TodoList"
// import TodoItem from "./TodoItem"


class App extends React.Component {
	constructor() {
		super() //継承元のコンストラクタが使えるよ
		this.state = {
			todos: [
				{
					// id: 1,
					title: "課題をやる",
					desc: "testtestestestestest",
					isDone: false
				},
				{
					// id: 2,
					title: "課題をやる",
					desc: "testtestestestestest",
					isDone: false
				}
			]
		}
	}
	handleSubmit(e) {

		e.preventDefault()
		// stateを書き換えるよ

		// ######### formに入力されたデータを取得

		// const title = this.title.value
		// このthisはインスタンスになってしまうが、フォームを指したい(form.sample)。なのでe(仮)を引数に取る

		const title = e.target.title.value
		// targetはイベントの発生源のエレメントが取れる。この場合<form>
		const desc = e.target.desc.value

		// #########3 stateのtodosにそのデータを追加
		// this.state.todos.push({
		// 	id: 3,
		// 	title: title,
		// 	desc: desc,
		// 	isDone: false
		// })
		// これはできないよ。stateは直接変更はやめた方がいい。

		const newTodos = this.state.todos.slice()
		// todosをコピーする

		newTodos.push({
			// id: newTodos.length,
			title: title,
			desc: desc,
			isDone: false
		})



		// これはすべてを再renderingする。
		this.setState({

			// 変更するstateの内容を記述
			todos: newTodos
		})
	}

	handleClick(key) {
		// 押されたボタンのtodoのisDoneを変更=>this.state.todos[i].isDone = trueだが、iだけ求めたい。
		// 押されたボタンはe.targetで求められる
		// 押されたボタンと一緒にいるやつのkeyはどう求めるのか。
		const newTodos = this.state.todos.slice()
		if (newTodos[key].isDone === false) {
			newTodos[key].isDone = true
		} else {
			newTodos[key].isDone = false
		}
		// その結果をsetStateする
		this.setState({
			todos: newTodos
		})
	}

	render() {
		return (
			<React.Fragment>
				<Form handleSubmit={this.handleSubmit.bind(this)}
					
					
					></Form>
				<TodoList todos={this.state.todos}
						handleClick={this.handleClick.bind(this)}
				></TodoList>
			</React.Fragment> //疑似的に囲うやつ
		)
	}
}

export default App

