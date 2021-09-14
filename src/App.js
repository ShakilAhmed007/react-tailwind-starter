import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="w-full min-h-screen bg-gray-900">
        <section className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 h-96 w-80 rounded-2xl rotate-3 top-1/2 left-1/2">
        </section>
        <section className="absolute p-6 space-y-6 duration-300 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 h-96 w-80 rounded-2xl rotate-3 hover:rotate-0 top-1/2 left-1/2">
          <div className="flex justify-end">
            <div className="w-4 h-4 bg-gray-900 rounded-full" />
          </div>
          <header className="text-xl font-extrabold text-center text-gray-600">Wellcome To</header>
          <div>
            <p className="text-5xl font-extrabold text-center text-gray-900">React <br />+<br />(Tailwind)</p>
            <p className="text-4xl font-extrabold text-center" style={{ "color": "#FE5401" }}>Starter!</p>
          </div>

        </section>
      </main>

    </div>
  );
}

export default App;
