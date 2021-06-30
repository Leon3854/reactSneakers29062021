


function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img height={20} width={20} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={20} height={20} src="img/car.svg" alt=""/>
            <span className="ml-5">1205 руб.</span>
          </li>
          <li>
            <img src="img/user.svg"  width={20} height={20} alt=""/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кросcовки</h1>

        <div className="d-flex">

          <div className="card">
            <img width={133} height={112} src="img/1.png" alt="nike"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
              <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/add.svg"  alt=""/>
              </button>
            </div>          
          </div>

          <div className="card">
            <img width={133} height={112} src="img/sneakers/2.jpg" alt="nike"/>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
              <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/add.svg"  alt=""/>
              </button>
            </div>          
          </div>

          <div className="card">
            <img width={133} height={112} src="img/sneakers/3.jpg" alt="nike"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
              <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/add.svg"  alt=""/>
              </button>
            </div>          
          </div>

          <div className="card">
            <img width={133} height={112} src="img/sneakers/4.jpg" alt="nike"/>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
              <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/add.svg"  alt=""/>
              </button>
            </div>          
          </div>

        </div>
      </div>
           
    </div>
  );
}

export default App;
