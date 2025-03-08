import ErrorBoundary from './components/ErrorBoundary.jsx';
import Child from './components/Child.jsx';

const App = () => {
  return (
    <main>
      <ErrorBoundary>
        <Child error={true} />
      </ErrorBoundary>
    </main>
  )
}


export default App;