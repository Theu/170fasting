

const test = 


function visualizeTodos(getTodos) {
    return async function showTodoHandlers(ctx) {
        const jsonRes = await getTodos();
        const todoList = Object.entries(jsonRes.rows).map(([key, value]) => {return value.doc.title})
        const todo = todoList.map(todo => {return `<li>${todo}</li>`})
        // TODO: UNDERSTAND HOW TO DEAL WITH NODES IN NODE
        const htmlRes = `<html>
            <head>
                <title>
                    SHOW TODOS
                </title>
            </head>
            <body>
                <h1>todo list</h1>
                <ul>${todo}</ul>
            </body>
        </html>`
        ctx.body = htmlRes;
        ctx.status = 200;
    }
}