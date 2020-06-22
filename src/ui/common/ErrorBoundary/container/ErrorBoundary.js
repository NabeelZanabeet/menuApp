import * as React from 'react';
import ErrorBoundaryView from '../components/ErrorBoundaryView';

export const reportCrash = (error, info) => {
  // to report bugs & error
};

class ErrorBoundary extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info) {
    // Display fallback UI
    this.setState({ hasError: true });

    reportCrash(error, info);
  }

  onResetPressed = async () => {
    this.setState({ hasError: false });
  };

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorBoundaryView onResetPressed={this.onResetPressed} />;
    }
    return children;
  }
}

export default ErrorBoundary;
