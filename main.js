
class Shape
{
    constructor(color,bacgraund)
    {
        this.color = color;
        this.bacgraund = bacgraund

    }

   
    get getInfoShape()
    {
        return `Class Shape: color:${this.color}, bacgraund:${this.bacgraund}`;
    }

    set setInfoShape(info)
    {
        [this.color,this.bacgraund] = info.split(',');
       
    }
}

const shape1 = new Shape("green","red");
console.log(shape1.getInfoShape);

shape1.setInfoShape = "wite,blac";
console.log(shape1.getInfoShape);


class Rectangle extends Shape
{
    constructor(color,bacgraund,width,height)
    {
        super(color,bacgraund);
        this.width = width;
        this.height = height;
    }
    get getInfoRectangle()
    {
        return `Class Rectangle: color:${this.color}, bacgraund:${this.bacgraund},
                width:${this.width}, height:${this.height} `;
    }

    set setRectangleWidth(_width)
    {
        this.width = _width;
       
    }

    set setRectangleHeight(_height)
    {
        this.height = _height;
       
    }

    checkArea()
    {
        return this.width * this.height;
    }
}

const rect1 = new Rectangle("yelow","blue",5,7);
console.log(rect1.getInfoRectangle);

rect1.setRectangleWidth = 8;
rect1.setRectangleHeight = 16;
console.log(rect1.getInfoRectangle);

console.log(`Area of rectcangle: ${rect1.checkArea()}`);


class Circle extends Shape
{
    constructor(radius,color = null,bacgraund = null)
    {
        super(color,bacgraund);
        this.radius = radius;
    }

    get getInfoCircle()
    {
        return `Class Circle: color:${this.color}, bacgraund:${this.bacgraund},
                radius:${this.radius}`;
    }

    set setRadius(radius)
    {
        this.radius = radius;
       
    }

    checkArea()
    {
        const area = Math.PI * Math.pow(this.radius,2);
        return area.toFixed(2);
    }
}

const circle1 = new Circle(9,"grey","magenta")
console.log(circle1.getInfoCircle);

circle1.setRadius = 17;
console.log(circle1.getInfoCircle);

console.log(`Area of circle: ${circle1.checkArea()}`);

const circle2 = new Circle(11,"red");
console.log(circle2.getInfoCircle);

const circle3 = new Circle(11);
console.log(circle3.getInfoCircle);

class MyArray
{
    constructor(elements = [])
    {
        this.arr = elements;
        this.length =  this.arr.length;

    }
}


MyArray.prototype.pop = function()
{
    if(this.length === 0)
    {
        return undefined;
    }
    const popedElemet = this[this.length - 1];
    delete this[this.length - 1];

    this.length--;

    return popedElemet;

}

MyArray.prototype.some = function(callback)
 {
    for (let i = 0; i < this.length; i++)
     {
        if (callback(this.arr[i])) {
            return true;
        }
    }
    return false;
}

MyArray.prototype.every = function(callback)
{
    for (let i = 0; i < this.length; i++)
     {
        if (!callback(this.arr[i])) {
            return false;
        }
    }
    return true;

}

MyArray.prototype.map = function(callback)
{
    const result =[];
    for (let i = 0; i < this.length; i++)
    {
       result.push(callback(this.arr[i]));
    }
    return result;
}

const myArr1 = new MyArray ([1,"two",3,4,5,6,7,8,9,99]);

console.log(myArr1);
console.log(myArr1.lengthMyArray);

console.log(myArr1.pop());
console.log(myArr1);

const isOne = (value) => value === 1;

console.log(myArr1.some(isOne));

const isNum = (value)=> typeof value == 'number';

console.log(myArr1.every(isNum));

const multTen = (value) => value = value*10;

console.log(myArr1.map(multTen));




