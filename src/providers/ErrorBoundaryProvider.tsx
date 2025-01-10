import { Component, ReactNode, ErrorInfo } from "react";
import styled from "styled-components";

const ErrorBoundaryDiv = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface ErrorBoundaryProviderProps {
  children: ReactNode;
}

interface ErrorBoundaryProviderState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundaryProvider extends Component<
  ErrorBoundaryProviderProps,
  ErrorBoundaryProviderState
> {
  constructor(props: ErrorBoundaryProviderProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryProviderState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryDiv>
          <p>{this.state.error?.toString() || "An unknown error occurred."}</p>
        </ErrorBoundaryDiv>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryProvider;
