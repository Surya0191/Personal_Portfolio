export class Tag {
    static readonly HTML = new Tag("HTML", "#d35400");        // muted orange
    static readonly CSS = new Tag("CSS", "#2980b9");          // muted blue
    static readonly Typescript = new Tag("Typescript", "#3498db"); // softer blue
    static readonly JavaScript = new Tag("JavaScript", "#e67e22"); // muted orange
    static readonly React = new Tag("React", "#5dade2");      // soft light blue
    static readonly Redux = new Tag("Redux", "#9b59b6");      // muted purple
    static readonly NodeJs = new Tag("Node.js", "#27ae60");   // muted green
    static readonly PHP = new Tag("PHP", "#8e44ad");          // muted purple
    static readonly RubyOnRails = new Tag("Ruby on Rails", "#c0392b"); // muted red
    static readonly VueJs = new Tag("Vue.js", "#2ecc71");     // soft green
    static readonly Angular = new Tag("Angular", "#e74c3c");  // muted red
    static readonly ReactNative = new Tag("React Native", "#5dade2"); // soft light blue

    private constructor(private readonly key:string, public readonly color:string){

    }

    toString(){
        return this.key;
    }
}
