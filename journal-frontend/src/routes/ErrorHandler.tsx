import React, { Component } from 'react';
import { toast } from 'react-toastify';

type ErrorBoundaryState = {
  hasError: boolean;
  errorMessage?: string;
};

type CustomProps = {
    children: React.ReactNode
}

class ErrorBoundary extends Component<CustomProps, ErrorBoundaryState> {
  constructor(props: CustomProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    window.addEventListener('error', this.handleGlobalError);
    window.addEventListener('unhandledrejection', this.handlePromiseRejection);
  }
  
  componentWillUnmount() {
    window.removeEventListener('error', this.handleGlobalError);
    window.removeEventListener('unhandledrejection', this.handlePromiseRejection);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    toast.error('Error')
    console.error("Uncaught error:", error, errorInfo);
  }

  handleGlobalError = (event: ErrorEvent) => {
    console.error("Global error:", event.error);
    toast.error(event.error)
    this.setState({ hasError: true, errorMessage: event.message });
  };

  handlePromiseRejection = (event: PromiseRejectionEvent) => {
    console.error("Unhandled promise rejection:", event.reason);
    toast.error(event.reason)
    this.setState({ hasError: true, errorMessage: event.reason instanceof Error ? event.reason.message : "An error occurred." });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. {this.state.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;