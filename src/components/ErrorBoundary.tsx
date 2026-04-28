import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error('App crashed:', error, info);
  }

  handleReset = () => {
    try {
      localStorage.removeItem('ai_deck_email');
    } catch {
      // ignore
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-dvh flex items-center justify-center bg-background p-6">
          <div className="max-w-md w-full text-center space-y-4">
            <h1 className="text-2xl font-semibold text-foreground">Something went wrong</h1>
            <p className="text-sm text-muted-foreground">
              The deck hit an unexpected error while loading. Try reloading — if it keeps happening,
              clearing site data usually resolves it.
            </p>
            {this.state.error?.message && (
              <pre className="text-xs text-muted-foreground/70 bg-secondary/40 rounded p-3 text-left overflow-auto max-h-40">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={this.handleReset}
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition"
            >
              Reset and reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
