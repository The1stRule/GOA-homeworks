import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
      console.log(error);
      return { error };
    }

    render() {
      if(this.state.error) {
        return <h1>This is fallback UI</h1>
      }

      return this.props.children;
    }
}

export default ErrorBoundary;