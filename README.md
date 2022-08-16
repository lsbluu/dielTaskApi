
# Boas-vindas ao repositório do projeto Diel Task API!

Você pode acessar o deploy do projeto :point_right:	 [Diel Task API](https://dieltask-bk.herokuapp.com/).




<details>
   <summary><strong> :desktop_computer:	 HTTP Requests</strong></summary><br />
   Páginas obrigatórias:
    LISTAR - GET. <br/>
   https://dieltask-bk.herokuapp.com/
    <h1 align="center"><img src="./getall.png" alt="Markdownify"  width="600"></h1>
    LISTAR - GET BY DAY.
   https://dieltask-bk.herokuapp.com/search/day?day=13<br/>
        <h1 align="center"><img src="./getday.png" alt="Markdownify"  width="600"></h1>
        LISTAR - GET BY MONTH.
   https://dieltask-bk.herokuapp.com/search/month?month=06<br/>
            <h1 align="center"><img src="./getmonth.png" alt="Markdownify"  width="600"></h1>
            LISTAR - GET BY TITLE.
   https://dieltask-bk.herokuapp.com/search/title?title=doc<br/>
                <h1 align="center"><img src="./gettititle.png" alt="Markdownify"  width="600"></h1>
                DELETAR - DELETE BY ID.
   https://dieltask-bk.herokuapp.com/1<br/>
                    <h1 align="center"><img src="./delete.png" alt="Markdownify"  width="600"></h1>
                    ATUALIZAR - PUT BY ID.
   https://dieltask-bk.herokuapp.com/38<br/>
   - body
   - {
	"title":"ted",
	"description":"teste",
	"whenDate":"2022-08-15T23:12:00.000Z",
	"duration":"23:12"
}
                        <h1 align="center"><img src="./put.png" alt="Markdownify"  width="600"></h1>
                        INSERIR - POST
   https://dieltask-bk.herokuapp.com/<br/>
   - body
   - {
	"title":"hhhh",
	"description":"hhhh",
	"whenDate":"2022-08-15T15:11",
	"duration":"1"
}
                            <h1 align="center"><img src="./post.png" alt="Markdownify"  width="600"></h1>
    </details>


<details>
  <summary><strong>:keyboard:	 Acessando projeto localmente </strong></summary><br />


 1. Clone o repositório

 2. Instale as dependências com `npm install`
 
 3. Execute o NPM START
 

</details>


<details>
  <summary><strong>:keyboard:	 API Utilizada </strong></summary><br />
Repositorio: https://github.com/lsbluu/dielTaskApi <br/>
Heroku: https://dieltask-bk.herokuapp.com/

</details>


