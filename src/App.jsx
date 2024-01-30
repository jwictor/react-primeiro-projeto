import "./App.css"

function App() {
    return(
        <>
            {/* header */}
            <header>
                <img src="https://png.pngtree.com/png-vector/20221227/ourmid/pngtree-white-airplane-cartoon-illustration-png-image_6539037.png" />

                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Info</li>
                    <li>Contato</li>
                </ul>
            </header>

            {/* main */}
            <main>
                <div>
                    <h1>Qual o seu destino?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Culpa consectetur id voluptas dolore, obcaecati cum nisi?
                    </p>
                    <button>Saiba mais</button>
                </div>

                <div>
                    <img src="https://www.pngarts.com/files/8/Airplane-Cartoon-PNG-Photo.png" />
                </div>
            </main>    
              {/* footer   */}

              <footer>
                <ul>
                    <li>todos os direitos reservados</li>
                    <li>@2024</li>
                </ul>
            </footer>             
        </>
    );
}

export default App;