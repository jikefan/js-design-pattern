/**
 * 创建product类
 */
class Sandwich {
    constructor() {
        this.ingredients = [];
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    toString() {
        return this.ingredients.join(', ');
    }
}

/**
 * 创建一个建造者类
 */
class SandwichBuilder {
    constructor() {
        this.sandwich = new Sandwich();
    }

    reset() {
        this.sandwich = new Sandwich();
    }

    putMeat(meat) {
        this.sandwich.addIngredient(meat);
    }

    putBread(bread) {
        this.sandwich.addIngredient(bread);
    }

    putVegetables(vegetables) {
        this.sandwich.addIngredient(vegetables);
    }

    get result() {
        return this.sandwich;
    }
}

/**
 * 用户使用的builder
 */
class SandwichMaker {
    constructor() {
        this.builder = new SandwichBuilder();
    }

    createChickenSandwich() {
        this.builder.reset();
        this.builder.putMeat('鸡肉');
        this.builder.putBread('奶香面包');
        this.builder.putVegetables('生菜');
        return this.builder.result;
    }

    createBeefSandwich() {
        this.builder.reset();
        this.builder.putMeat('牛肉');
        this.builder.putBread('麦香面包');
        this.builder.putVegetables('生菜');
        return this.builder.result;
    }
}

(function main(){
    const sandwichMaker = new SandwichMaker();
    const chickenSandwich = sandwichMaker.createChickenSandwich();
    const beefSandwich = sandwichMaker.createBeefSandwich();
    console.log('你的三明治如下:');
    console.log(chickenSandwich);
    console.log(beefSandwich);
})()