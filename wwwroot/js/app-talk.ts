namespace App {
    export class Talk {
        public static GetGreeting(now: Date): string {
            let h = now.getHours();
            if ( h < 5 ) {
                return "Welcome back!";
            }
            else {
                return "Welcome!";
            }
        }
    }
}