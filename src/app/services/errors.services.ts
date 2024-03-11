//Custom Error : Es una fumada para tener los mensajes de error en una clase
export namespace ErrorService {
  export function convertMessage(code: string): string {
      switch (code) {
          case 'auth/user-disabled': {
              return 'Sorry your user is disabled.';
          }
          case 'auth/user-not-found': {
              return 'Sorry user not found.';
          }

          case 'auth/wrong-password': {
            return 'Sorry, incorrect password entered. Please try again.';
          }

          case 'auth/invalid-email':{
            return'Email invalid';
          }

          default: {
              return 'Login error try again later.';
          }
      }
  }
}
