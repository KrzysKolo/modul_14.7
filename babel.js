function AppHeader() {
  return (
    <header className="ui fixed menu">
      <nav className="ui container">
       Lista kontaktów
        
        <div className="header item">
          <button className="ui button">Dodaj</button>
        </div>
      </nav>
    </header>
  );
}

function ContactsList() {
  return (
    <ul className="ui relaxed divided list selection">
      <ContactItem
        login="typeofweb1"
        name="Lena"
        department="JavaScript Developer"
      />
      <ContactItem
        login="typeofweb2"
        name="Brian"
        department="Human Resources"
      />
      <ContactItem
        login="typeofweb3"
        name="Rick"
        department="QA"
      />
    </ul>
  );
}

function ContactItem({ login, name, department }) {
  const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
  return (
    <li className="item">
      <img src={imgUrl} className="ui mini rounded image" />
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{department}</div>
      </div>
    </li>
  );
}

function App() {
  return (
    <div>
      <AppHeader />
      <main className="ui main text container">
        <ContactsList />
      </main>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
var app = React.createElement(App);
