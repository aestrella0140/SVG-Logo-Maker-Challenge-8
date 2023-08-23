class shapes {
    constructor() {
        this.color = "";
    }
    setColor (colorVar) {
        this.color = colorVar;
    }
}

class Triangle extends shape {
    render() {
       return `<polygon points="250,60 100,400 400,400" fill="${this.color}" ></polygon>`;
        
    }
}

class Circle extends shape {
    render() {
   return `<circle cx="50" cy="50" r="40" fill="${this.color}"></circle>`;
    } 
}

class Square extends shape {
    render() {
        return `<rect x="50" y="20" width="150" height="150" fill= "${this.color}"></rect>`;
    }
}

module.exports = { Triangle, Circle, Square };