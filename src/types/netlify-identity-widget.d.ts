declare module 'netlify-identity-widget' {
  export function init(opts?: { container: string }): void;
  export function open(): void;
  export function close(): void;
  export function logout(): void;

  interface User {
    user_metadata: {
      full_name: string;
    };
  }

  export function currentUser(): User | null;

  export function on(event: 'init', cb: (user: User) => void): void;
  export function on(event: 'login', cb: (user: User) => void): void;
  export function on(event: 'logout', cb: Function): void;
  export function on(event: 'error', cb: (err: Error) => void): void;
  export function on(event: 'open', cb: Function): void;
  export function on(event: 'close', cb: Function): void;
}
